"use client"
import React from "react"
import { Book } from "./types"

interface BookCardProps {
  book: Book
  searchQuery?: string
  onDetail: (book: Book) => void
  onBuy: (book: Book) => void
}

export default function BookCard({ book, searchQuery = "", onDetail, onBuy }: BookCardProps) {
  const highlightText = (text: string, query: string) => {
    if (!query) return text
    const parts = text.split(new RegExp(`(${query})`, "gi"))
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-200 font-semibold">{part}</span>
      ) : (
        part
      )
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
      <img
        src={book.coverImage}
        alt={book.title}
        className="h-56 w-full object-cover"
      />
      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <h2 className="text-xl font-bold line-clamp-2">
          {highlightText(book.title, searchQuery)}
        </h2>
        <p className="text-gray-600 text-sm">
          👨‍⚕️ {highlightText(book.author, searchQuery)}
        </p>
        <p className="text-sm text-gray-500">{book.category}</p>
        <p className="text-gray-700 line-clamp-3">{book.excerpt}</p>
        <div className="text-lg font-bold text-blue-600">{book.price}</div>
        <div className="flex gap-3">
          <button
            onClick={() => onDetail(book)}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg font-semibold transition"
          >
            📖 Detail
          </button>
          <button
            onClick={() => onBuy(book)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
          >
            🛒 Beli
          </button>
        </div>
      </div>
    </div>
  )

  
}
