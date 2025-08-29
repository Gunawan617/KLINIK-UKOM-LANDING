"use client"
import React from 'react';
import { Book } from './types';

interface BookCardProps {
  book: Book;
  searchQuery: string;
  onDetail: (book: Book) => void;
  onBuy: (book: Book) => void;
}

export default function BookCard({ book, searchQuery, onDetail, onBuy }: BookCardProps) {
  // Helper function untuk highlight search query
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Cover Image */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {book.coverImage ? (
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/assets/placeholder.svg';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="text-center">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-gray-500 text-sm">No Image</div>
            </div>
          </div>
        )}

        {/* Overlay untuk hover effect */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
            {book.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {highlightText(book.title, searchQuery)}
        </h3>

        {/* Author */}
        <p className="text-sm text-gray-600 mb-3">
          oleh <span className="font-medium">{highlightText(book.author, searchQuery)}</span>
        </p>

        {/* Excerpt */}
        <p className="text-sm text-gray-700 mb-4 line-clamp-3 leading-relaxed">
          {highlightText(book.excerpt, searchQuery)}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-xl font-bold text-green-600">
            Rp {book.price.toLocaleString('id-ID')}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => onDetail(book)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            📖 Detail
          </button>
          <button
            onClick={() => onBuy(book)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            🛒 Beli
          </button>
        </div>
      </div>
    </div>
  );
}
