"use client"
import { useParams } from "next/navigation"

export default function DetailBukuPage() {
  const { id } = useParams()

  // data buku sementara (nanti bisa ambil dari DB/API)
  const books = [
    {
      id: "1",
      title: "Panduan Lengkap UKOM Keperawatan 2024 - Edisi Terbaru",
      author: "Dr. Siti Nurhaliza, S.Kep., Ns., M.Kep",
      category: "UKOM Keperawatan",
      description:
        "Buku panduan terlengkap dengan 1.500+ soal terbaru, pembahasan detail, strategi belajar efektif, dan tips sukses menghadapi ujian.",
      price: "Rp 250.000",
      whatsappNumber: "6281234567890",
      coverColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
    },
    {
      id: "2",
      title: "Farmakologi Klinis Terapan - Edisi Revisi dengan Kasus Nyata",
      author: "Prof. Dr. Ahmad Wijaya, Apt., M.Farm., Ph.D",
      category: "Farmasi Klinis",
      description:
        "Referensi farmakologi klinis dengan 200+ kasus nyata dari praktik rumah sakit. Lengkap dengan algoritma pengobatan terkini.",
      price: "Rp 300.000",
      whatsappNumber: "6281234567890",
      coverColor: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
    },
  ]

  const book = books.find((b) => b.id === id)

  if (!book) {
    return <div className="p-10 text-center text-gray-500">Buku tidak ditemukan</div>
  }

  const handleBuy = () => {
    const message = `Halo, saya ingin membeli buku "${book.title}" seharga ${book.price}. Mohon informasi lebih lanjut.`
    const url = `https://wa.me/${book.whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex justify-center">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg border p-8">
        <div className={`${book.coverColor} h-64 flex items-center justify-center text-white rounded-xl mb-6`}>
          <h1 className="text-2xl font-bold text-center px-6">{book.title}</h1>
        </div>
        <p className="text-gray-700 font-medium text-lg mb-2">👨‍⚕️ {book.author}</p>
        <p className="text-sm text-gray-600 mb-4">{book.category}</p>
        <p className="text-gray-700 leading-relaxed mb-6">{book.description}</p>
        <div className="text-3xl font-bold text-blue-600 mb-6">{book.price}</div>
        <button
          onClick={handleBuy}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition flex items-center justify-center gap-2"
        >
          🛒 Beli Sekarang
        </button>
      </div>
    </div>
  )
}
