"use client"
import React from "react"
import { Book } from "./types"

interface BookDetailProps {
  book: Book
  onBack: () => void
  onBuy: (book: Book) => void
}

export default function BookDetail({ book, onBack, onBuy }: BookDetailProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <img
        src={book.cover_image}
        alt={book.title}
        className="h-72 w-full object-cover"
      />
      <div className="p-8 space-y-6">
        <h2 className="text-3xl font-bold">{book.title}</h2>
        <p className="text-lg font-semibold">👨‍⚕️ {book.author}</p>
        <p className="text-sm text-gray-600">{book.category}</p>
        <p className="text-gray-700 leading-relaxed">{book.description}</p>
        <div className="text-3xl font-bold text-blue-600">{book.price}</div>
        <div className="flex gap-4">
          <button
            onClick={onBack}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-xl font-semibold transition"
          >
            ⬅ Kembali
          </button>
          <button
            onClick={() => onBuy(book)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            🛒 Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  )
}
