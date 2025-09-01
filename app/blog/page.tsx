import HomeClient from "./HomeClient";
import Link from "next/link";
import { API_CONFIG, getApiUrl } from "../../lib/api-config";

// Ambil artikel per halaman
async function getPosts(page: number = 1) {
  const res = await fetch(`${getApiUrl(API_CONFIG.ENDPOINTS.POSTS)}?page=${page}`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error("Failed to fetch posts");

  const data = await res.json();
  return data && data.success && data.data ? data.data : { data: [] };
}

// Page blog dengan pagination
export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const postsData = await getPosts(currentPage);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 lg:px-0">
      <HomeClient posts={postsData.data} />

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        {currentPage > 1 && (
          <Link
            href={`/posts?page=${currentPage - 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            ← Prev
          </Link>
        )}
        <span className="px-4 py-2 bg-gray-100 rounded">
          Page {postsData.current_page} of {postsData.last_page}
        </span>
        {currentPage < postsData.last_page && (
          <Link
            href={`/posts?page=${currentPage + 1}`}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Next →
          </Link>
        )}
      </div>
    </div>
  );
}

//wordpress
// 'use client';

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   fetchPosts,
//   fetchRecentPosts,
//   fetchPopularPosts,
//   fetchCategories,
//   fetchTags,
//   Post,
// } from "@/lib/api";

// export default function BlogPage() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [recentPosts, setRecentPosts] = useState<any[]>([]);
//   const [popularPosts, setPopularPosts] = useState<any[]>([]);
//   const [categories, setCategories] = useState<any[]>([]);
//   const [tags, setTags] = useState<any[]>([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const pageSize = 6;

//   const formatDate = (dateString: string) =>
//     new Date(dateString).toLocaleDateString("id-ID", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });

//   const truncateText = (text: string, maxLength: number) =>
//     text.length <= maxLength ? text : text.slice(0, maxLength) + "...";

//   const loadPosts = async (page = 1, search = "") => {
//     setLoading(true);
//     const { posts, totalPages } = await fetchPosts(page, pageSize, search);
//     setPosts(posts);
//     setTotalPages(totalPages);
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadPosts(currentPage);
//     fetchRecentPosts().then(setRecentPosts);
//     fetchPopularPosts().then(setPopularPosts);
//     fetchCategories().then(setCategories);
//     fetchTags().then(setTags);
//   }, [currentPage]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-12">
//         {/* Konten Utama */}
//         <div className="lg:col-span-3">
//           <h1 className="text-3xl font-bold mb-6">Blog & Artikel</h1>

//           {/* Search */}
//           <div className="mb-6 flex">
//             <input
//               type="text"
//               placeholder="Cari artikel..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="flex-1 border rounded-l-lg px-4 py-2"
//             />
//             <button
//               onClick={() => {
//                 setCurrentPage(1);
//                 loadPosts(1, searchQuery);
//               }}
//               className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
//             >
//               Cari
//             </button>
//           </div>

//           {/* List Artikel */}
//           {loading ? (
//             <p className="text-gray-600">Loading artikel...</p>
//           ) : posts.length === 0 ? (
//             <p className="text-gray-500">Belum ada artikel</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {posts.map((post) => (
//                 <article
//                   key={post.id}
//                   className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-shadow duration-300 flex flex-col"
//                 >
//                   <div className="relative h-48 bg-gray-200">
//                     <Image
//                       src={post.image}
//                       alt={post.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="p-6 flex flex-col justify-between h-full">
//                     <div>
//                       <p className="text-sm text-gray-500 mb-2 flex items-center gap-2">
//                         <Image
//                           src={post.authorAvatar}
//                           alt={post.author}
//                           width={24}
//                           height={24}
//                           className="rounded-full"
//                         />
//                         {post.author} • {formatDate(post.createdAt)}
//                       </p>
//                       <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors duration-200">
//                         <Link href={`/blog/${post.slug}`}>{post.title}</Link>
//                       </h2>
//                       <p className="text-gray-600 mb-3">{truncateText(post.summary, 120)}</p>
//                     </div>
//                     <div className="mt-3 text-sm text-gray-500 flex flex-wrap gap-2">
//                       <span>Categories: {post.categories.join(", ")}</span>
//                       <span>Tags: {post.tags.join(", ")}</span>
//                       <span>Comments: {post.commentCount}</span>
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           )}

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center gap-2 mt-6">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
//                 disabled={currentPage === 1}
//                 className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50 hover:bg-gray-100 transition-colors"
//               >
//                 Sebelumnya
//               </button>
//               <span className="px-4 py-2">
//                 Halaman {currentPage} dari {totalPages}
//               </span>
//               <button
//                 onClick={() =>
//                   setCurrentPage((prev) => Math.min(totalPages, prev + 1))
//                 }
//                 disabled={currentPage === totalPages}
//                 className="px-4 py-2 bg-white border rounded-lg disabled:opacity-50 hover:bg-gray-100 transition-colors"
//               >
//                 Selanjutnya
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Sidebar */}
//         <aside className="space-y-8">
//           {/* Author dari artikel terbaru */}
//           {posts[0] && (
//             <div className="bg-white shadow rounded-lg p-6 text-center">
//               <Image
//                 src={posts[0].authorAvatar}
//                 alt={posts[0].author}
//                 width={80}
//                 height={80}
//                 className="rounded-full mx-auto mb-3"
//               />
//               <h3 className="font-bold">{posts[0].author}</h3>
//               <p className="text-sm text-gray-600">Author dari artikel terbaru</p>
//             </div>
//           )}

//           {/* Artikel Terbaru */}
//           <div className="bg-white shadow rounded-lg p-6">
//             <h3 className="font-bold text-lg mb-3 border-b pb-2">Artikel Terbaru</h3>
//             <ul className="space-y-3">
//               {recentPosts.map((post) => (
//                 <li key={post.id}>
//                   <Link
//                     href={`/blog/${post.slug}`}
//                     className="text-blue-600 hover:underline"
//                   >
//                     {post.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Artikel Populer */}
//           <div className="bg-white shadow rounded-lg p-6">
//             <h3 className="font-bold text-lg mb-3 border-b pb-2">Artikel Populer</h3>
//             <ul className="space-y-3">
//               {popularPosts.map((post) => (
//                 <li key={post.id}>
//                   <Link
//                     href={`/blog/${post.slug}`}
//                     className="text-blue-600 hover:underline"
//                   >
//                     {post.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Kategori */}
//           <div className="bg-white shadow rounded-lg p-6">
//             <h3 className="font-bold text-lg mb-3 border-b pb-2">Kategori</h3>
//             <ul className="space-y-2">
//               {categories.map((cat) => (
//                 <li key={cat.id}>
//                   <Link
//                     href={`/category/${cat.slug}`}
//                     className="text-gray-700 hover:text-blue-600 transition-colors"
//                   >
//                     {cat.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Tag */}
//           <div className="bg-white shadow rounded-lg p-6">
//             <h3 className="font-bold text-lg mb-3 border-b pb-2">Tag</h3>
//             <div className="flex flex-wrap gap-2 mt-2">
//               {tags.map((tag) => (
//                 <Link
//                   key={tag.id}
//                   href={`/tag/${tag.slug}`}
//                   className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors"
//                 >
//                   {tag.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }
