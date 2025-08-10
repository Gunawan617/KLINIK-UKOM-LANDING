"use client"
import React, { useState } from 'react';

const Icon = ({ name, className = "w-5 h-5" }: { name: string; className?: string }) => {
  const icons = {
    search: "🔍", filter: "⚙", book: "📖", edit: "✏", award: "🏆", 
    users: "👥", clock: "⏰", check: "✅", star: "⭐", calendar: "📅", 
    user: "👤", message: "💬", heart: "❤", share: "📤", right: "→", phone: "📞"
  };
  return <span className={`${className} inline-flex items-center justify-center`}>{icons[name as keyof typeof icons] || "📄"}</span>;
};

const BukuPage = () => {
  const [activeTab, setActiveTab] = useState<string>('services');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const publishingServices = [
    {
      id: 1,
      title: "Paket Penerbitan Standar",
      description: "Layanan penerbitan lengkap dengan ISBN, editing profesional, dan layout berkualitas tinggi untuk buku kesehatan dan pendidikan",
      features: [
        "Pengurusan ISBN gratis",
        "Editing naskah profesional oleh ahli kesehatan", 
        "Layout dan desain cover menarik",
        "Cetak 100 eksemplar berkualitas premium",
        "Distribusi platform digital"
      ],
      price: "Rp 3.500.000",
      duration: "4-6 minggu",
      popular: false,
      gradient: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Paket Penerbitan Premium",
      description: "Layanan penerbitan terlengkap dengan marketing digital dan promosi khusus untuk buku-buku kesehatan profesional",
      features: [
        "Semua fitur paket standar",
        "Marketing digital terintegrasi",
        "Press release ke media kesehatan",
        "Cetak 200 eksemplar premium",
        "Distribusi toko buku fisik nasional"
      ],
      price: "Rp 5.800.000",
      duration: "6-8 minggu",
      popular: true,
      gradient: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      title: "Self Publishing Kesehatan",
      description: "Paket terjangkau untuk tenaga kesehatan yang ingin menerbitkan buku atau panduan praktis dengan cepat",
      features: [
        "Pengurusan ISBN cepat",
        "Layout profesional standar",
        "Cover design sesuai tema kesehatan",
        "Cetak sesuai permintaan (POD)",
        "Platform digital UKOM Academy"
      ],
      price: "Rp 1.800.000",
      duration: "2-3 minggu", 
      popular: false,
      gradient: "from-green-500 to-green-600"
    }
  ];

  const publishedBooks = [
    {
      id: 1,
      title: "Panduan Lengkap UKOM Keperawatan 2024 - Edisi Terbaru",
      author: "Dr. Siti Nurhaliza, S.Kep., Ns., M.Kep",
      category: "UKOM Keperawatan",
      excerpt: "Buku panduan terlengkap untuk persiapan UKOM Keperawatan dengan 1.500+ soal terbaru, pembahasan detail dari ahli berpengalaman, strategi belajar efektif, dan tips sukses menghadapi ujian kompetensi.",
      coverColor: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700",
      publishedDate: "2024-01-15",
      pageCount: 485,
      isbn: "978-602-123-456-7",
      featured: true,
      tags: ["UKOM", "Keperawatan", "Ujian Kompetensi", "Panduan"],
      testimonial: "Buku wajib untuk semua calon perawat! Sangat membantu dalam persiapan UKOM dengan soal-soal yang update dan relevan."
    },
    {
      id: 2,
      title: "Farmakologi Klinis Terapan - Edisi Revisi dengan Kasus Nyata",
      author: "Prof. Dr. Ahmad Wijaya, Apt., M.Farm., Ph.D",
      category: "Farmasi Klinis",
      excerpt: "Referensi lengkap farmakologi klinis dengan 200+ kasus nyata dari praktik rumah sakit. Dilengkapi dengan algoritma pengobatan terkini, panduan dosis tepat, interaksi obat, dan monitoring terapi untuk praktisi farmasi klinis.",
      coverColor: "bg-gradient-to-br from-red-500 via-red-600 to-red-700",
      publishedDate: "2024-01-10",
      pageCount: 580,
      isbn: "978-602-123-458-1",
      featured: true,
      tags: ["Farmasi", "Klinis", "Terapi", "Rumah Sakit"],
      testimonial: "Referensi farmasi klinis terlengkap! Kasus-kasusnya sangat membantu dalam praktik sehari-hari di rumah sakit."
    },
    {
      id: 3,
      title: "Psikologi Kesehatan Modern: Pendekatan Holistik dalam Pelayanan Medis",
      author: "Dr. Lisa Maharani, M.Psi., Psikolog",
      category: "Psikologi Kesehatan",
      excerpt: "Buku terdepan tentang psikologi kesehatan dengan pendekatan holistik dan evidence-based. Membahas integrasi kesehatan mental-fisik, teknik konseling medis, dan penerapan psikologi positif dalam setting medis modern.",
      coverColor: "bg-gradient-to-br from-green-500 via-green-600 to-green-700",
      publishedDate: "2024-01-08",
      pageCount: 420,
      isbn: "978-602-123-459-8",
      featured: false,
      tags: ["Psikologi", "Kesehatan Mental", "Holistik", "Konseling"],
      testimonial: "Paradigma baru dalam psikologi kesehatan! Sangat relevan untuk era pelayanan kesehatan modern yang komprehensif."
    }
  ];

  const categories = ['all', 'UKOM Keperawatan', 'Farmasi Klinis', 'Psikologi Kesehatan'];

  const filteredBooks = publishedBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('services')}
              className={`py-5 px-2 border-b-3 font-semibold text-sm transition-all duration-200 ${
                activeTab === 'services'
                  ? 'border-blue-500 text-blue-600 bg-blue-50 bg-opacity-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon name="edit" className="w-5 h-5" />
                <span>Layanan Penerbitan</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('showcase')}
              className={`py-5 px-2 border-b-3 font-semibold text-sm transition-all duration-200 ${
                activeTab === 'showcase'
                  ? 'border-blue-500 text-blue-600 bg-blue-50 bg-opacity-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon name="book" className="w-5 h-5" />
                <span>Showcase Buku Terbitan</span>
              </div>
              
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === 'services' && (
          <div>
            {/* Services Hero */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Wujudkan Impian Menerbitkan Buku Kesehatan Anda
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Kami menyediakan layanan penerbitan buku profesional khusus untuk tenaga kesehatan dengan berbagai paket sesuai kebutuhan dan budget Anda.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {publishingServices.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative group border border-gray-100">
                  {service.popular && (
                    <div className="absolute top-6 right-6 z-20">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1 shadow-lg animate-pulse">
                        <Icon name="award" className="w-4 h-4" />
                        TERPOPULER
                      </span>
                    </div>
                  )}

                  <div className={`w-full h-56 bg-gradient-to-br ${service.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Icon name="book" className="w-20 h-20 mx-auto mb-4 opacity-90" />
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-blue-100 text-sm px-4">Profesional & Berkualitas</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-gray-700 mb-6 leading-relaxed text-base">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                        <Icon name="check" className="w-5 h-5 text-green-500" />
                        Fitur yang Termasuk:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                            <Icon name="check" className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {service.price}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Icon name="clock" className="w-4 h-4" />
                          <span className="font-medium">{service.duration}</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      Konsultasi Gratis Sekarang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'showcase' && (
          <div>
            {/* Search and Filter */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12 border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 relative">
                  <Icon name="search" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Cari buku berdasarkan judul, penulis, atau topik kesehatan..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-lg"
                  />
                </div>
                <div className="relative">
                  <Icon name="filter" className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-10 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none bg-white min-w-[250px] text-lg font-medium"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'Semua Kategori' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Showcase Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Buku-Buku Kesehatan Terbitan UKOM Academy
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Koleksi buku berkualitas tinggi yang telah kami terbitkan untuk mendukung pendidikan dan pengembangan karir profesional di bidang kesehatan Indonesia
              </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {filteredBooks.map((book) => (
                <div key={book.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
                  {book.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-3">
                      <span className="text-sm font-bold flex items-center justify-center gap-2">
                        <Icon name="star" className="w-5 h-5" />
                        FEATURED BOOK - BESTSELLER
                        <Icon name="star" className="w-5 h-5" />
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="mb-8 relative">
                      <div className={`${book.coverColor} rounded-xl p-8 text-white relative overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                        <div className="relative z-10">
                          <Icon name="book" className="w-10 h-10 mb-4 opacity-90" />
                          <h3 className="font-bold text-xl mb-3 leading-tight">{book.title}</h3>
                          <p className="text-base opacity-90 mb-2">oleh {book.author}</p>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                            {book.pageCount} halaman
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="bg-blue-100 text-blue-800 font-semibold px-3 py-2 rounded-lg">
                          {book.category}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600 flex items-center gap-1 font-medium">
                          <Icon name="calendar" className="w-4 h-4" />
                          {formatDate(book.publishedDate)}
                        </span>
                      </div>

                      <p className="text-gray-700 leading-relaxed line-clamp-4">
                        {book.excerpt}
                      </p>

                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 space-y-4 border border-gray-100">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">ISBN:</span>
                            <span className="font-mono text-gray-800 bg-white px-2 py-1 rounded">{book.isbn}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600 font-medium">Halaman:</span>
                            <span className="text-gray-800 font-semibold">{book.pageCount} hal</span>
                          </div>
                        </div>
                      </div>

                      {book.testimonial && (
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-lg">
                          <div className="flex items-start gap-3">
                            <Icon name="message" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-blue-800 italic leading-relaxed font-medium">"{book.testimonial}"</p>
                              <p className="text-blue-600 text-sm mt-2 font-semibold">- Reviewer Profesional</p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {book.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-3 py-2 rounded-full transition-colors cursor-pointer font-medium">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">
                          <Icon name="book" className="w-5 h-5" />
                          Lihat Detail Buku
                          <Icon name="right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredBooks.length === 0 && (
              <div className="text-center py-20">
                <div className="bg-gray-100 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Icon name="book" className="w-16 h-16 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tidak ada buku ditemukan</h3>
                <p className="text-gray-600 mb-8 text-lg">Coba ubah kata kunci pencarian atau filter kategori</p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BukuPage;