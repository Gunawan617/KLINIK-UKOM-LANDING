import Image from 'next/image';
import { Metadata } from 'next';
import { API_CONFIG, getApiUrl } from '../../../lib/api-config';
// import PostAnalytics from '../[id]/ClientAnalytics'; // Uncomment if analytics is available

// Ambil post dari API Laravel, cek success dan ambil data
async function getPost(slug: string) {
  const res = await fetch(`${getApiUrl(API_CONFIG.ENDPOINTS.POST_BY_SLUG)}/${slug}`, {
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error('Failed to fetch post');
  const data = await res.json();
  return data && data.success && data.data ? data.data : null;
}

// Format tanggal Indonesia
function formatDate(dateStr?: string) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Metadata dinamis untuk SEO
// Canonical URL akan mengambil dari post.canonical_url jika ada, jika tidak fallback ke /blog/{slug}
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post?.meta_title || post?.title || 'Detail Blog',
    description: post?.meta_description || post?.summary || '',
    keywords: post?.meta_keywords
      ? post.meta_keywords.split(',').map((t: string) => t.trim())
      : ['blog', 'artikel'],
    alternates: {
      canonical: post?.canonical_url && post.canonical_url !== ''
        ? post.canonical_url
        : `http://localhost:3000/blog/${params.slug}`,
    },
    openGraph: {
      title: post?.meta_title || post?.title || '',
      description: post?.meta_description || post?.summary || '',
      url: post?.canonical_url && post.canonical_url !== ''
        ? post.canonical_url
        : `http://localhost:3000/blog/${params.slug}`,
      images: post?.image
        ? [`http://localhost:8000/storage/${post.image}`]
        : [],
      type: 'article',
      publishedTime: post?.published_at || post?.created_at,
      authors: post?.author ? [post.author] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.meta_title || post?.title || '',
      description: post?.meta_description || post?.summary || '',
      images: post?.image
        ? [`http://localhost:8000/storage/${post.image}`]
        : [],
    },
  };
}

// Komponen halaman detail post
export default async function PostDetail({ params }: { params: { slug: string } }) {
  let post = null;
  let fetchError = null;
  try {
    post = await getPost(params.slug);
  } catch (err) {
    fetchError = err instanceof Error ? err.message : String(err);
  }

  // Always show debug info in development
  // if (!post) {
  //   // eslint-disable-next-line no-console
  //   console.log('DEBUG (server):', { slug: params.slug, post, fetchError });
  //   return (
  //     <div className="max-w-3xl mx-auto py-10 px-4 sm:px-0 text-center text-red-600">
  //       <h2 className="text-2xl font-bold mb-4">Data blog tidak ditemukan</h2>
  //       <p>Pastikan API mengembalikan data yang benar dan slug post valid.</p>
  //       <div className="bg-gray-100 text-left p-4 mt-6 rounded">
  //         <strong>Debug info:</strong>
  //         <pre>{JSON.stringify({ slug: params.slug, post, fetchError }, null, 2)}</pre>
  //       </div>
  //     </div>
  //   );
  // }

  const author = post.author || 'Admin';
  const category = post.category || null;
  const tags =
    post.meta_keywords && typeof post.meta_keywords === 'string'
      ? post.meta_keywords.split(',').map((t: string) => t.trim())
      : [];

  // eslint-disable-next-line no-console
  console.log('DEBUG (server):', { slug: params.slug, post, fetchError });
  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-0">
      {/* <PostAnalytics postId={params.slug} /> */}
      <h1 className="text-4xl font-bold mb-2 text-gray-900 leading-tight">
        {post.title}
      </h1>

      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-4 gap-2">
        <span>{formatDate(post.published_at || post.created_at) || 'Tanggal tidak tersedia'}</span>
        <span>•</span>
        <span>By {author}</span>
        {category && (
          <>
            <span>•</span>
            <span>{category}</span>
          </>
        )}
      </div>

      {post.image && (
        <div className="mb-8 rounded-lg overflow-hidden shadow">
          <Image
            src={`http://localhost:8000/storage/${post.image}`}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-72 object-cover"
            priority
          />
        </div>
      )}

      <p className="text-lg text-gray-700 mb-6 italic">{post.summary}</p>

      {/* Debug: Commented out dangerouslySetInnerHTML */}
      {/*
      <article
        className="prose prose-lg max-w-none text-gray-900 mb-8"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      */}
      {/* <div className="bg-gray-100 p-4 rounded mb-8">
        <strong>Debug content:</strong>
        <pre>{JSON.stringify(post, null, 2)}</pre>
        <strong>Debug fetchError:</strong>
        <pre>{JSON.stringify(fetchError, null, 2)}</pre>
      </div> */}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6">
          {tags.map((tag: string) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
