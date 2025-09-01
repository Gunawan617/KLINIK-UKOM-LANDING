import { redirect } from "next/navigation";
import Image from "next/image";
// Removed ClientAnalytics import and usage

async function getPost(id: string) {
  const res = await fetch(`http://localhost:8000/api/public/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Gagal fetch detail post");
  return res.json();
}

// === SEO Metadata Dinamis ===
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      url: post.canonical_url || `http://localhost:3000/posts/${params.id}`,
      images: post.image
        ? [`http://localhost:8000/storage/${post.image}`]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      images: post.image
        ? [`http://localhost:8000/storage/${post.image}`]
        : [],
    },
    alternates: {
      canonical: post.canonical_url || `http://localhost:3000/posts/${params.id}`,
    },
  };
}

// === Halaman Detail Post ===
export default async function PostDetail({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  // 🚀 Redirect kalau ada canonical_url
  if (post.canonical_url) {
    redirect(post.canonical_url);
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
  {/* Analytics removed: file no longer exists */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 text-sm mb-6">
        {post.created_at && !isNaN(Date.parse(post.created_at))
          ? new Date(post.created_at).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "Tanggal tidak tersedia"}
      </p>

      {post.image && (
        <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden shadow">
          <Image
            src={`http://localhost:8000/storage/${post.image}`}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none">
        {/* Render konten HTML dari backend */}
        <div dangerouslySetInnerHTML={{ __html: typeof post.content === "string" ? post.content : "" }} />
      </div>
    </div>
  );
}
