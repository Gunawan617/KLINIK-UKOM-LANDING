import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: {
      source_url: string;
    }[];
  };
}

async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `http://localhost/wordpress/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { cache: 'no-store' } // biar fresh setiap request
    );

    if (!res.ok) return null;

    const data: WPPost[] = await res.json();
    return data.length > 0 ? data[0] : null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Kembali ke Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Title & Date */}
        <header className="mb-8">
          <div className="text-gray-500 text-sm mb-4">
            {formatDate(post.date)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title.rendered}
          </h1>
          {post.excerpt?.rendered && (
            <div
              className="text-xl text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          )}
        </header>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div
            className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </article>
    </div>
  );
}
