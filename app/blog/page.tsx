'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string;
  createdAt: string;
}

// Dummy data untuk development
const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    title: "Panduan Lengkap Belajar Next.js untuk Pemula",
    slug: "panduan-lengkap-belajar-nextjs-pemula",
    summary: "Pelajari Next.js dari dasar hingga mahir dengan panduan step-by-step yang mudah dipahami. Cocok untuk pemula yang ingin memulai career sebagai React developer.",
    content: "Next.js adalah framework React yang powerful untuk membangun aplikasi web modern...",
    image: "/api/placeholder/800/400?text=Next.js+Tutorial",
    createdAt: "2024-12-15T10:30:00Z"
  },
  {
    id: 2,
    title: "Tips Optimasi Performance Website React",
    slug: "tips-optimasi-performance-website-react",
    summary: "Discover berbagai teknik untuk meningkatkan performa aplikasi React Anda. Dari code splitting hingga lazy loading, semua dibahas lengkap di sini.",
    content: "Performance adalah kunci kesuksesan sebuah aplikasi web...",
    image: "/api/placeholder/800/400?text=React+Performance",
    createdAt: "2024-12-14T14:20:00Z"
  },
  {
    id: 3,
    title: "Membangun REST API dengan Node.js dan Express",
    slug: "membangun-rest-api-nodejs-express",
    summary: "Tutorial komprehensif untuk membangun REST API yang scalable menggunakan Node.js dan Express. Termasuk authentication, validation, dan best practices.",
    content: "REST API merupakan backbone dari hampir semua aplikasi modern...",
    image: "/api/placeholder/800/400?text=Node.js+API",
    createdAt: "2024-12-13T09:15:00Z"
  },
  {
    id: 4,
    title: "Database Design Best Practices untuk Aplikasi Web",
    slug: "database-design-best-practices-aplikasi-web",
    summary: "Pelajari cara merancang database yang efisien dan scalable. Dari normalisasi hingga indexing, semua konsep penting dibahas dengan contoh real-world.",
    content: "Database design yang baik adalah fondasi dari aplikasi yang sukses...",
    image: "/api/placeholder/800/400?text=Database+Design",
    createdAt: "2024-12-12T16:45:00Z"
  },
  {
    id: 5,
    title: "Modern CSS Techniques: Grid, Flexbox, dan CSS Variables",
    slug: "modern-css-techniques-grid-flexbox-variables",
    summary: "Explore teknik CSS modern yang akan membuat workflow development Anda lebih efisien. Dari CSS Grid hingga Custom Properties, semuanya ada di sini.",
    content: "CSS telah berkembang pesat dalam beberapa tahun terakhir...",
    image: "/api/placeholder/800/400?text=Modern+CSS",
    createdAt: "2024-12-11T11:30:00Z"
  },
  {
    id: 6,
    title: "Deployment Strategies untuk Aplikasi JavaScript",
    slug: "deployment-strategies-aplikasi-javascript",
    summary: "Panduan lengkap untuk deploy aplikasi JavaScript ke berbagai platform. Dari Vercel hingga AWS, pelajari pro dan cons masing-masing platform.",
    content: "Deployment adalah tahap terakhir yang sama pentingnya dengan development...",
    image: "/api/placeholder/800/400?text=Deployment+Guide",
    createdAt: "2024-12-10T13:20:00Z"
  },
  {
    id: 7,
    title: "Testing dalam JavaScript: Unit, Integration, dan E2E",
    slug: "testing-javascript-unit-integration-e2e",
    summary: "Menguasai berbagai jenis testing untuk memastikan aplikasi JavaScript Anda reliable dan maintainable. Lengkap dengan tools dan best practices.",
    content: "Testing adalah investasi jangka panjang untuk kualitas kode...",
    image: "/api/placeholder/800/400?text=JavaScript+Testing",
    createdAt: "2024-12-09T08:45:00Z"
  },
  {
    id: 8,
    title: "Security Best Practices untuk Web Development",
    slug: "security-best-practices-web-development",
    summary: "Pelajari cara melindungi aplikasi web dari berbagai ancaman keamanan. Dari XSS hingga SQL Injection, ketahui cara pencegahan yang efektif.",
    content: "Keamanan web bukan lagi pilihan, tetapi keharusan di era digital...",
    image: "/api/placeholder/800/400?text=Web+Security",
    createdAt: "2024-12-08T15:10:00Z"
  },
  {
    id: 9,
    title: "State Management dalam React: Redux vs Zustand vs Context",
    slug: "state-management-react-redux-zustand-context",
    summary: "Perbandingan mendalam tentang berbagai solusi state management dalam React. Ketahui kapan menggunakan masing-masing dan trade-offs nya.",
    content: "State management adalah salah satu aspek terpenting dalam pengembangan aplikasi React...",
    image: "/api/placeholder/800/400?text=State+Management",
    createdAt: "2024-12-07T12:25:00Z"
  }
];

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const pageSize = 6;

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const fetchPosts = async (page: number) => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Calculate pagination for dummy data
      const total = DUMMY_POSTS.length;
      const totalPages = Math.ceil(total / pageSize);
      const offset = (page - 1) * pageSize;
      const items = DUMMY_POSTS.slice(offset, offset + pageSize);

      setPosts(items);
      setTotalPages(totalPages);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading artikel...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-red-600 text-lg font-semibold">Error: {error}</div>
            <button 
              onClick={() => fetchPosts(currentPage)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Coba Lagi
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Blog & Artikel</h1>
            <p className="mt-4 text-xl text-gray-600">
              Temukan artikel menarik dan wawasan terbaru
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">Belum ada artikel tersedia</div>
          </div>
        ) : (
          <>
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gray-200">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-gray-400 text-4xl">📄</div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(post.createdAt)}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Summary */}
                    {post.summary && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {truncateText(post.summary, 150)}
                      </p>
                    )}

                    {/* Read More Button */}
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Baca Selengkapnya
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Sebelumnya
                </button>

                {/* Page Numbers */}
                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage = 
                      page === 1 || 
                      page === totalPages || 
                      (page >= currentPage - 1 && page <= currentPage + 1);
                    
                    if (!showPage && page === 2 && currentPage > 4) {
                      return <span key={page} className="px-3 py-2 text-gray-500">...</span>;
                    }
                    
                    if (!showPage && page === totalPages - 1 && currentPage < totalPages - 3) {
                      return <span key={page} className="px-3 py-2 text-gray-500">...</span>;
                    }
                    
                    if (!showPage) return null;

                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Selanjutnya
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}