
import './globals.css';

import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import { AnalyticsProvider } from './context/AnalyticsContext';
import PageViewTracker from './components/PageViewTracker';

export const metadata = {
  title: 'Klinik UKOM | Persiapan Uji Kompetensi Tenaga Kesehatan',
  description:
    'Klinik UKOM membantu mahasiswa dan tenaga kesehatan mempersiapkan Uji Kompetensi dengan latihan soal, pembahasan, dan tips sukses menghadapi UKOM.',
  keywords: [
    'Klinik UKOM',
    'Bimbel UKOM',
    'Uji Kompetensi',
    'Tryout UKOM',
    'Latihan Soal UKOM',
    'Persiapan UKOM Tenaga Kesehatan',
  ],
  openGraph: {
    title: 'Klinik UKOM | Persiapan Uji Kompetensi Tenaga Kesehatan',
    description:
      'Platform persiapan Uji Kompetensi (UKOM) untuk mahasiswa dan tenaga kesehatan. Latihan soal, pembahasan, serta tips sukses UKOM.',
    url: 'https://klinikukom.id',
    siteName: 'Klinik UKOM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klinik UKOM | Persiapan Uji Kompetensi Tenaga Kesehatan',
    description:
      'Persiapan terbaik menghadapi Uji Kompetensi Tenaga Kesehatan dengan Klinik UKOM.',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logos.png" />
        {/* Pastikan file favicon.ico di /public adalah logo custom kamu */}
      </head>
      <body>
        <AnalyticsProvider>
          <PageViewTracker />
          <Navbar />
          {children}
          <Footer />
        </AnalyticsProvider>
      </body>
    </html>
  )
}
