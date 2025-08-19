"use client"
import React from "react";
import { books } from "./index";
import BookCard from "../books/BookCard";
import { Book } from "../books/types";

const BookPrev: React.FC = () => {
  // fungsi handler sederhana
  const handleDetail = (book: Book) => {
    console.log("Lihat detail:", book.title);
  };

  const handleBuy = (book: Book) => {
    const whatsappNumber = "6281234567890";
    const message = `Halo, saya ingin membeli buku "${book.title}" seharga ${book.price}. Mohon informasi lebih lanjut.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Buku Terbaru</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan buku-buku terbaru untuk persiapan UKOM dan pengembangan karir di bidang kesehatan
          </p>
        </div>

        {/* Grid Buku Responsive */}
<div className="grid gap-8 justify-center grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
  {books.map((book) => (
    <BookCard
      key={book.id}
      book={book}
      searchQuery=""
      onDetail={handleDetail}
      onBuy={handleBuy}
    />
  ))}
</div>


        <div className="text-center mt-12">
          <a
            href="/buku"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Lihat Semua Buku
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookPrev;


