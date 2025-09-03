import BookCard from "../books/BookCard"
import BookDetail from "../books/BookDetail"
import BookPrev from "./BookPrev"
import { Book } from "../books/types"

export const books: Book[] = [
 {
      id: 1,
      title: "Panduan Lengkap UKOM Keperawatan 2024",
      author: "Tri Ratnaningsih dkk.",
      category: "UKOM Keperawatan",
      excerpt: "Buku panduan lengkap dengan soal-soal prediksi UKOM terbaru...",
      description:
        "Buku ini berisi soal-soal prediksi UKOM terbaru, pembahasan detail, strategi belajar efektif, dan tips sukses menghadapi ujian profesi ners.",
      price: "Rp 250.000",
      cover_image: "assets/books/Rahasia sukses ukom 2025 profesi ners.png",
    },
    {
      id: 2,
      title: "Rahasia Sukses UKOM Bidan",
      author: "Atika Zahria Arisanti dkk.",
      category: "UKOM Bidan",
      excerpt: "Panduan lengkap dan strategi sukses menghadapi UKOM Bidan...",
      description:
        "Buku ini berisi tips, strategi, dan soal-soal prediksi UKOM Bidan terbaru agar lulus dengan nilai maksimal.",
      price: "Rp 300.000",
      cover_image: "assets/books/Rahasia sukses ukom bidan.png",
    },
    {
      id: 3,
      title: "Rangkuman Materi Keperawatan Terintegrasi UKOM 2025",
      author: "M Iqbal Angga Kusuma S.Kep.,Ns., M.Kep dkk.",
      category: "UKOM Keperawatan",
      excerpt: "Rangkuman materi keperawatan lengkap untuk persiapan UKOM...",
      description:
        "Buku ini menyajikan ringkasan materi dari berbagai bidang keperawatan, dilengkapi soal latihan dan tips menjawab soal cepat dan tepat.",
      price: "Rp 275.000",
      cover_image: "assets/books/Rangkuman Materi Keperawatan Terintegrasi ukom 2025.png",
    },


  
]


export { BookCard, BookDetail, BookPrev }
