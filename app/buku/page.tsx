"use client"
import React, { useState, useMemo } from "react"
import BookCard from "../components/books/BookCard"
import BookDetail from "../components/books/BookDetail"
import { Book } from "../components/books/types"

export default function BukuPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const books: Book[] = [
    {
      id: 1,
      title: "Panduan Lengkap UKOM Keperawatan 2024 - Edisi Terbaru",
      author: "Dr. Siti Nurhaliza, S.Kep., Ns., M.Kep",
      category: "UKOM Keperawatan",
      excerpt: "Buku panduan terlengkap dengan 1.500+ soal terbaru...",
      description: "Buku ini berisi soal-soal prediksi UKOM terbaru...",
      price: "Rp 250.000",
      coverImage: "https://picsum.photos/600/300?random=1",
    },
    {
      id: 2,
      title: "Farmakologi Klinis Terapan - Edisi Revisi dengan Kasus Nyata",
      author: "Prof. Dr. Ahmad Wijaya, Apt., M.Farm., Ph.D",
      category: "Farmasi Klinis",
      excerpt: "Referensi farmakologi klinis dengan 200+ kasus nyata...",
      description: "Buku farmakologi klinis yang disusun berdasarkan pengalaman...",
      price: "Rp 300.000",
      coverImage: "https://picsum.photos/600/300?random=2",
    },
    // Tambah buku lain di sini, grid akan otomatis menyesuaikan
  ]

  const categories = ["all", ...new Set(books.map((b) => b.category))]

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory =
        selectedCategory === "all" || book.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  const handleBuy = (book: Book) => {
    const whatsappNumber = "6281234567890"
    const message = `Halo, saya ingin membeli buku "${book.title}" seharga ${book.price}. Mohon informasi lebih lanjut.`
    const encoded = encodeURIComponent(message)
    const url = `https://wa.me/${whatsappNumber}?text=${encoded}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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
            <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
              {filteredBooks.map((book) => (
              // Passing searchQuery to highlight text in BookCard
                <BookCard
                key={book.id}
                book={book}
                searchQuery={searchQuery}   // <--- passing query untuk highlight
                onDetail={setSelectedBook}
                onBuy={handleBuy}
                />

              ))}
            </div>
          </>
        ) : (
          <BookDetail
            book={selectedBook}
            onBack={() => setSelectedBook(null)}
            onBuy={handleBuy}
          />
        )}
      </div>
    </div>
  )
}
