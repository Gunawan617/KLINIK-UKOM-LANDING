"use client"
import React from 'react';
import { Book } from './types';

interface BookDetailProps {
  book: Book;
  onBack: () => void;
  onBuy: (book: Book) => void;
}

export default function BookDetail({ book, onBack, onBuy }: BookDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="text-xl">←</span>
          <span>Kembali ke Daftar Buku</span>
        </button>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Cover Image */}
            <div className="md:w-1/3">
              <div className="relative h-96 md:h-full bg-gray-100">
                {book.coverImage ? (
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/placeholder.svg';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📚</div>
                      <div className="text-gray-500">No Image</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="md:w-2/3 p-8">
              {/* Category */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {book.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {book.title}
              </h1>

              {/* Author */}
              <p className="text-lg text-gray-600 mb-6">
                oleh <span className="font-semibold text-gray-900">{book.author}</span>
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-green-600">
                  Rp {book.price.toLocaleString('id-ID')}
                </div>
              </div>

              {/* Excerpt */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ringkasan</h3>
                <p className="text-gray-700 leading-relaxed">
                  {book.excerpt}
                </p>
              </div>

              {/* Description */}
              {book.description && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Deskripsi Lengkap</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              )}

              {/* Metadata */}
              <div className="mb-8 text-sm text-gray-500 space-y-1">
                {book.created_at && (
                  <p>Ditambahkan: {new Date(book.created_at).toLocaleDateString('id-ID')}</p>
                )}
                {book.updated_at && book.updated_at !== book.created_at && (
                  <p>Diupdate: {new Date(book.updated_at).toLocaleDateString('id-ID')}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => onBuy(book)}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <span>🛒</span>
                  <span>Beli Sekarang</span>
                </button>
                <button
                  onClick={onBack}
                  className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
