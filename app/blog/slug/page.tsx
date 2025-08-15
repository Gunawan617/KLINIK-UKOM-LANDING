import { notFound } from 'next/navigation';
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

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

// Dummy data untuk development
const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    title: "Panduan Lengkap Belajar Next.js untuk Pemula",
    slug: "panduan-lengkap-belajar-nextjs-pemula",
    summary: "Pelajari Next.js dari dasar hingga mahir dengan panduan step-by-step yang mudah dipahami. Cocok untuk pemula yang ingin memulai career sebagai React developer.",
    content: "Next.js adalah framework React yang powerful untuk membangun aplikasi web modern. Framework ini dikembangkan oleh Vercel dan telah menjadi pilihan utama banyak developer untuk membangun aplikasi React yang production-ready.\n\nDalam panduan ini, kita akan mempelajari konsep-konsep dasar Next.js mulai dari routing, rendering, hingga deployment. Next.js menyediakan banyak fitur out-of-the-box seperti automatic code splitting, image optimization, dan built-in CSS support.\n\nSalah satu keunggulan utama Next.js adalah kemampuannya untuk melakukan Server-Side Rendering (SSR) dan Static Site Generation (SSG). Fitur ini membuat aplikasi kita lebih SEO-friendly dan memiliki performa yang lebih baik.\n\nUntuk memulai dengan Next.js, Anda perlu memahami konsep-konsep React terlebih dahulu. Setelah itu, kita bisa mulai eksplorasi fitur-fitur canggih seperti API routes, middleware, dan dynamic imports.\n\nDi akhir panduan ini, Anda akan mampu membuat aplikasi web yang kompleks dan siap untuk production menggunakan Next.js.",
    image: "/api/placeholder/800/400?text=Next.js+Tutorial",
    createdAt: "2024-12-15T10:30:00Z"
  },
  {
    id: 2,
    title: "Tips Optimasi Performance Website React",
    slug: "tips-optimasi-performance-website-react",
    summary: "Discover berbagai teknik untuk meningkatkan performa aplikasi React Anda. Dari code splitting hingga lazy loading, semua dibahas lengkap di sini.",
    content: "Performance adalah kunci kesuksesan sebuah aplikasi web. Aplikasi yang lambat akan membuat user frustasi dan meninggalkan website kita. Dalam artikel ini, kita akan membahas berbagai teknik optimasi performance untuk aplikasi React.\n\nTeknik pertama yang akan kita bahas adalah code splitting. Dengan memecah bundle JavaScript menjadi chunk-chunk kecil, kita bisa mengurangi initial load time aplikasi. React.lazy() dan Suspense adalah tools yang powerful untuk implementasi lazy loading.\n\nSelanjutnya, kita akan membahas React.memo() untuk mencegah unnecessary re-renders. Komponen yang tidak berubah tidak perlu di-render ulang, dan React.memo() membantu kita mengoptimalkan hal ini.\n\nImage optimization juga sangat penting. Gunakan format gambar yang tepat seperti WebP, implementasikan lazy loading untuk gambar, dan gunakan responsive images untuk berbagai ukuran layar.\n\nTerakhir, kita akan membahas bundler optimization seperti tree shaking, minification, dan compression. Tools seperti Webpack dan Vite sudah menyediakan optimasi ini out-of-the-box.",
    image: "/api/placeholder/800/400?text=React+Performance",
    createdAt: "2024-12-14T14:20:00Z"
  },
  {
    id: 3,
    title: "Membangun REST API dengan Node.js dan Express",
    slug: "membangun-rest-api-nodejs-express",
    summary: "Tutorial komprehensif untuk membangun REST API yang scalable menggunakan Node.js dan Express. Termasuk authentication, validation, dan best practices.",
    content: "REST API merupakan backbone dari hampir semua aplikasi modern. Dalam tutorial ini, kita akan belajar membangun REST API yang robust menggunakan Node.js dan Express framework.\n\nKita akan mulai dengan setup project dan konfigurasi dasar Express. Setelah itu, kita akan membahas routing, middleware, dan error handling. Express menyediakan struktur yang flexible untuk membangun API dengan berbagai kompleksitas.\n\nAuthentication adalah aspek penting dalam API development. Kita akan implementasi JWT (JSON Web Tokens) untuk autentikasi user. JWT memberikan cara yang secure dan stateless untuk mengelola session user.\n\nValidasi input juga sangat penting untuk security dan data integrity. Kita akan menggunakan library seperti Joi atau express-validator untuk memvalidasi request body dan parameters.\n\nDatabase integration dengan MongoDB atau PostgreSQL akan dibahas lengkap, termasuk connection pooling, query optimization, dan migration strategies. Kita juga akan membahas testing dengan Jest dan documentation dengan tools seperti Swagger.",
    image: "/api/placeholder/800/400?text=Node.js+API",
    createdAt: "2024-12-13T09:15:00Z"
  },
  {
    id: 4,
    title: "Database Design Best Practices untuk Aplikasi Web",
    slug: "database-design-best-practices-aplikasi-web",
    summary: "Pelajari cara merancang database yang efisien dan scalable. Dari normalisasi hingga indexing, semua konsep penting dibahas dengan contoh real-world.",
    content: "Database design yang baik adalah fondasi dari aplikasi yang sukses. Design yang buruk akan menyebabkan performance issues, data inconsistency, dan maintenance nightmare. Artikel ini akan membahas best practices untuk database design.\n\nNormalisasi adalah konsep fundamental yang harus dipahami setiap developer. Kita akan membahas normal forms (1NF, 2NF, 3NF) dan kapan kita perlu melakukan denormalization untuk performance optimization.\n\nIndexing strategy sangat crucial untuk query performance. Kita akan belajar berbagai jenis index (B-tree, Hash, Bitmap) dan kapan menggunakan masing-masing. Composite index dan covering index juga akan dibahas detail.\n\nRelationship design antara tables memerlukan pemahaman yang mendalam. One-to-one, one-to-many, dan many-to-many relationships memiliki implementation pattern yang berbeda-beda.\n\nScaling strategy seperti partitioning, sharding, dan replication akan dibahas untuk menangani aplikasi dengan traffic tinggi. Kita juga akan membahas CAP theorem dan trade-offs dalam distributed database systems.",
    image: "/api/placeholder/800/400?text=Database+Design",
    createdAt: "2024-12-12T16:45:00Z"
  },
  {
    id: 5,
    title: "Modern CSS Techniques: Grid, Flexbox, dan CSS Variables",
    slug: "modern-css-techniques-grid-flexbox-variables",
    summary: "Explore teknik CSS modern yang akan membuat workflow development Anda lebih efisien. Dari CSS Grid hingga Custom Properties, semuanya ada di sini.",
    content: "CSS telah berkembang pesat dalam beberapa tahun terakhir. Modern CSS techniques memungkinkan kita untuk membuat layout yang complex dengan kode yang lebih clean dan maintainable.\n\nCSS Grid adalah revolutionary layout system yang memungkinkan kita membuat 2D layouts dengan mudah. Tidak seperti Flexbox yang fokus pada 1D layout, Grid memberikan kontrol penuh atas rows dan columns.\n\nFlexbox tetap relevan untuk 1D layouts dan alignment. Kombinasi Grid dan Flexbox adalah power combo untuk membuat responsive layouts. Kita akan belajar kapan menggunakan masing-masing.\n\nCSS Custom Properties (CSS Variables) memberikan dynamic behavior pada CSS. Kita bisa membuat theming system, responsive breakpoints, dan animation yang lebih flexible.\n\nModern CSS juga includes features seperti CSS Container Queries, CSS Subgrid, dan CSS Logical Properties. Features ini memungkinkan kita membuat designs yang truly responsive dan adaptable.",
    image: "/api/placeholder/800/400?text=Modern+CSS",
    createdAt: "2024-12-11T11:30:00Z"
  },
  {
    id: 6,
    title: "Deployment Strategies untuk Aplikasi JavaScript",
    slug: "deployment-strategies-aplikasi-javascript",
    summary: "Panduan lengkap untuk deploy aplikasi JavaScript ke berbagai platform. Dari Vercel hingga AWS, pelajari pro dan cons masing-masing platform.",
    content: "Deployment adalah tahap terakhir yang sama pentingnya dengan development. Pilihan deployment strategy yang tepat akan menentukan performance, scalability, dan maintenance cost aplikasi kita.\n\nVercel adalah platform yang sangat popular untuk Next.js applications. Built-in support untuk serverless functions, edge computing, dan automatic HTTPS membuat deployment menjadi sangat simple.\n\nNetlify adalah alternatif yang excellent untuk static sites dan JAMstack applications. Features seperti form handling, identity management, dan split testing sangat berguna untuk marketing websites.\n\nAWS menyediakan flexibility dan scalability yang tidak terbatas. Services seperti EC2, Lambda, CloudFront, dan RDS bisa dikombinasikan untuk membuat architecture yang robust.\n\nDocker containerization memungkinkan consistent deployment across different environments. Kubernetes orchestration menambahkan layer scaling dan management yang powerful untuk production workloads.",
    image: "/api/placeholder/800/400?text=Deployment+Guide",
    createdAt: "2024-12-10T13:20:00Z"
  },
  {
    id: 7,
    title: "Testing dalam JavaScript: Unit, Integration, dan E2E",
    slug: "testing-javascript-unit-integration-e2e",
    summary: "Menguasai berbagai jenis testing untuk memastikan aplikasi JavaScript Anda reliable dan maintainable. Lengkap dengan tools dan best practices.",
    content: "Testing adalah investasi jangka panjang untuk kualitas kode. Aplikasi yang well-tested lebih mudah di-maintain, di-refactor, dan memiliki fewer bugs di production.\n\nUnit testing fokus pada testing individual functions atau components dalam isolation. Jest adalah testing framework yang paling popular di JavaScript ecosystem. Kita akan belajar writing effective unit tests dengan good coverage.\n\nIntegration testing memverifikasi bahwa different parts of aplikasi bekerja dengan baik together. Testing database connections, API endpoints, dan component interactions adalah contoh integration testing.\n\nEnd-to-end testing mensimulasikan real user interactions dengan aplikasi. Tools seperti Cypress dan Playwright memungkinkan kita untuk automate browser testing dengan syntax yang intuitive.\n\nTest-Driven Development (TDD) adalah methodology dimana kita menulis test sebelum menulis code. Approach ini memastikan code coverage yang tinggi dan design yang lebih modular.",
    image: "/api/placeholder/800/400?text=JavaScript+Testing",
    createdAt: "2024-12-09T08:45:00Z"
  },
  {
    id: 8,
    title: "Security Best Practices untuk Web Development",
    slug: "security-best-practices-web-development",
    summary: "Pelajari cara melindungi aplikasi web dari berbagai ancaman keamanan. Dari XSS hingga SQL Injection, ketahui cara pencegahan yang efektif.",
    content: "Keamanan web bukan lagi pilihan, tetapi keharusan di era digital. Cyber attacks semakin sophisticated, dan developer harus memahami common vulnerabilities dan cara pencegahannya.\n\nCross-Site Scripting (XSS) adalah salah satu attack yang paling common. Input sanitization, output encoding, dan Content Security Policy (CSP) adalah defense mechanisms yang effective.\n\nSQL Injection dapat dicegah dengan menggunakan parameterized queries atau ORM yang proper. Never trust user input dan always validate data sebelum processing.\n\nAuthentication dan authorization harus diimplementasikan dengan benar. Strong password policies, multi-factor authentication, dan session management yang secure adalah basics yang harus ada.\n\nHTTPS, CORS, dan security headers seperti X-Frame-Options dan X-Content-Type-Options memberikan additional layer of protection. Regular security audits dan dependency updates juga penting untuk maintaining security posture.",
    image: "/api/placeholder/800/400?text=Web+Security",
    createdAt: "2024-12-08T15:10:00Z"
  },
  {
    id: 9,
    title: "State Management dalam React: Redux vs Zustand vs Context",
    slug: "state-management-react-redux-zustand-context",
    summary: "Perbandingan mendalam tentang berbagai solusi state management dalam React. Ketahui kapan menggunakan masing-masing dan trade-offs nya.",
    content: "State management adalah salah satu aspek terpenting dalam pengembangan aplikasi React. Pilihan state management solution yang tepat akan menentukan maintainability dan scalability aplikasi.\n\nReact Context API adalah built-in solution yang simple untuk sharing state across components. Cocok untuk applications dengan state requirements yang moderate dan tidak memerlukan complex state updates.\n\nRedux adalah mature library dengan ecosystem yang besar. Redux Toolkit (RTK) membuat Redux development menjadi lebih simple dengan less boilerplate. Time travel debugging dan predictable state updates adalah keunggulan Redux.\n\nZustand adalah lightweight alternative yang growing in popularity. API yang simple, TypeScript support yang excellent, dan performance yang baik membuat Zustand menarik untuk many use cases.\n\nJotai dan Recoil adalah atomic state management solutions yang memungkinkan fine-grained state subscriptions. Approach ini dapat memberikan better performance untuk applications dengan complex state dependencies.",
    image: "/api/placeholder/800/400?text=State+Management",
    createdAt: "2024-12-07T12:25:00Z"
  }
];

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogDetailPageProps) {
  const post = getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }

  return {
    title: post.title,
    description: post.summary || 'Baca artikel lengkap di blog kami',
    openGraph: {
      title: post.title,
      description: post.summary || 'Baca artikel lengkap di blog kami',
      images: post.image ? [post.image] : [],
    },
  };
}

function getPost(slug: string): Post | null {
  return DUMMY_POSTS.find(post => post.slug === slug) || null;
}

function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  return DUMMY_POSTS
    .filter(post => post.slug !== currentSlug)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = getPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatContent = (content: string) => {
    // Simple content formatting - splits by newlines and creates paragraphs
    return content.split('\n').filter(paragraph => paragraph.trim()).map((paragraph, index) => (
      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
        {paragraph.trim()}
      </p>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Blog
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        {post.image && (
          <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        )}

        {/* Article Header */}
        <header className="mb-8">
          {/* Date */}
          <div className="text-gray-500 text-sm mb-4">
            {formatDate(post.createdAt)}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Summary */}
          {post.summary && (
            <div className="text-xl text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6">
              {post.summary}
            </div>
          )}
        </header>

        {/* Article Body */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="prose prose-lg max-w-none">
            {post.content ? (
              <div className="text-gray-800 leading-relaxed">
                {formatContent(post.content)}
              </div>
            ) : (
              <p className="text-gray-500 italic">Konten artikel belum tersedia.</p>
            )}
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bagikan Artikel</h3>
          <div className="flex space-x-4">
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    text: post.summary || '',
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link artikel telah disalin!');
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Share
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link artikel telah disalin!');
              }}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Artikel Terkait</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    {relatedPost.image && (
                      <div className="relative h-32 bg-gray-200">
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="text-xs text-gray-500 mb-2">
                        {formatDate(relatedPost.createdAt)}
                      </div>
                      <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      {relatedPost.summary && (
                        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                          {relatedPost.summary}
                        </p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}