"use client"
import React, { useState, useMemo, useEffect } from "react"
import BookCard from "../components/books/BookCard"
import BookDetail from "../components/books/BookDetail"
import { API_CONFIG, getApiUrl, getImageUrl } from "../../lib/api-config"
// import { Book } from "../components/books/types"

export default function BukuPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBook, setSelectedBook] = useState<any | null>(null)
  const [books, setBooks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)



  // Fetch books dari API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(false);

        console.log("🔄 Fetching books from server...");
        const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.BOOKS), {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

        console.log("📡 Response status:", response.status);
        console.log("📡 Response headers:", Object.fromEntries(response.headers.entries()));

        if (!response.ok) {
          const errorText = await response.text();
          console.error("❌ Server Gagal:", response.status, errorText);
          throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        console.log("✅ Sukses konek ke server:", data);

        // Pastikan data array
        if (Array.isArray(data)) {
          console.log(`📚 Found ${data.length} books`);
          setBooks(data);
          console.log("Books state after setBooks:", data);
        } else if (Array.isArray(data.data)) {
          console.log(`📚 Found ${data.data.length} books (nested)`);
          setBooks(data.data);
          console.log("Books state after setBooks:", data.data);
        } else {
          console.error("❌ Unexpected data format:", data);
          throw new Error("Format API tidak sesuai - data bukan array");
        }
      } catch (err) {
        console.error("💥 Fetch error:", err);
        setError(true);
        setBooks([]); // Reset books on error
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);


  const categories = ["all", ...new Set(books.map((b) => b.category))]
  console.log("Books state:", books)

  const filteredBooks = useMemo(() => {
    const filtered = books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      if (selectedCategory === "all") {
        return matchesSearch;
      }
      return matchesSearch && book.category === selectedCategory;
    });
    console.log("Filtered books:", filtered);
    return filtered;
  }, [books, searchQuery, selectedCategory]);

  const handleBuy = (book: any) => {
    const whatsappNumber = "6281295012668"
    const message = `Halo, saya ingin membeli buku "${book.title}" seharga ${book.price}. Mohon informasi lebih lanjut.`
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Loading / Error */}
        {loading && (
          <div className="text-center py-8">
            <div className="inline-flex items-center gap-2 text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
              <span>⏳ Memuat data buku...</span>
            </div>
          </div>
        )}
        {error && !loading && (
          <div className="text-center py-8">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-red-600 mb-2">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-red-800 font-semibold mb-2">Gagal Memuat Data Buku</h3>
              <p className="text-red-600 text-sm mb-4">
                Tidak dapat terhubung ke server. Silakan periksa:
              </p>
              <ul className="text-red-600 text-sm text-left space-y-1">
                <li>• Pastikan server Laravel berjalan</li>
                <li>• Periksa koneksi internet</li>
                <li>• Coba refresh halaman</li>
              </ul>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                🔄 Coba Lagi
              </button>
            </div>
          </div>
        )}

        {!selectedBook ? (
          <>
            {/* Filter */}
            <div className="bg-white rounded-2xl shadow p-6 mb-12 border border-gray-100 flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Cari buku berdasarkan judul, penulis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-lg"
                />
              </div>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-4 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 bg-white min-w-[220px] text-lg font-medium"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "Semua Kategori" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid Buku Responsive */}
            {!loading && !error && filteredBooks.length === 0 && (
              <div className="text-center text-gray-500 py-8">Tidak ada buku ditemukan.</div>
            )}
            {!loading && !error && filteredBooks.length > 0 && (
              <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
                {filteredBooks.map((book) => {
                  return (
                    <BookCard
                      key={book.id}
                      book={{
                        ...book,
                        cover_image: getImageUrl(book.cover_image)
                      }}
                      searchQuery={searchQuery}
                      onDetail={setSelectedBook}
                      onBuy={handleBuy}
                    />
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <BookDetail
            book={{
              ...selectedBook,
              cover_image: getImageUrl(selectedBook.cover_image)
            }}
            onBack={() => setSelectedBook(null)}
            onBuy={handleBuy}
          />
        )}
      </div>
    </div>
  )
}
