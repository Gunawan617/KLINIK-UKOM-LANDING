

// const tryoutPrograms = [
//   {
//     code: "BIDAN",
//     name: "Tryout Bidan",
//     category: "Kesehatan",
//     participants: "6,800+",
//     image: "assets/tryout/Banner TO Bidan.png",
//     description:
//       "Simulasi soal UKOM kebidanan sesuai kompetensi: kehamilan, persalinan, nifas, neonatus, KB, dan gawat darurat maternal-neonatal.",
//   },
//   {
//     code: "PERAWAT",
//     name: "Tryout Perawat",
//     category: "Kesehatan",
//     participants: "9,200+",
//     image: "assets/tryout/Banner TO Prwt.png",
//     description:
//       "Latihan soal UKOM keperawatan: medikal-bedah, gawat darurat, maternitas, anak, komunitas, dan manajemen keperawatan.",
//   },
// ];

// const TryoutPrev: React.FC = () => {
//   return (
//     <section className="py-2 bg-blue-50 mt-0">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-4">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">
//             Tryout UKOM Online Terpercaya
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Uji kesiapanmu menghadapi UKOM dengan soal-soal simulasi yang akurat
//             dan sesuai standar nasional
//           </p>
//         </div>

//         {/* Grid Program */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
//           {tryoutPrograms.map((program) => (
//             <div
//               key={program.code}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
//             >
//               {/* Image only */}
//               <div className="w-full aspect-[4/3] overflow-hidden">
//                 <img
//                   src={program.image}
//                   alt={program.name}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//                 />
//               </div>

//               {/* Buttons + Category */}
//               <div className="flex items-center justify-between p-4">
//                 {/* Kiri = Tombol + Category */}
//                 <div className="flex items-center gap-2">
//                   <a
//                     href="https://wa.me/6281295012668"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="bg-green-400 hover:bg-green-500 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors"
//                   >
//                     Hubungi Sekarang
//                   </a>
//                   <span className="text-xs text-gray-500 bg-gray-100 px-2 py-2 rounded">
//                     {program.category}
//                   </span>
//                 </div>

//                 {/* Kanan = Lihat Detail */}
//                 <a
//                   href="/bimbel"
//                   className="text-blue-400 hover:text-blue-500 text-xs font-medium px-3 py-2 border border-blue-400 rounded-lg"
//                 >
//                   Lihat Detail →
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Button */}
//         <div className="text-center">
//           <a
//             href="/tryout"
//             className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-400 hover:bg-blue-500 transition-colors"
//           >
//             Ikuti Tryout Sekarang
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TryoutPrev;
"use client";
import React, { useEffect, useState } from "react";
import { API_CONFIG, getApiUrl } from "../../../lib/api-config";

interface TryoutProgram {
  id: number;
  code: string;
  name: string;
  category: string;
  participants?: string;
  image?: string;
  description?: string;
}

const TryoutPrev: React.FC = () => {
  const [programs, setPrograms] = useState<TryoutProgram[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Helper function untuk mendapatkan URL gambar
  const getImageUrl = (imagePath?: string) => {
    if (!imagePath) return "/assets/placeholder.png";
    
    // Jika path sudah full URL, gunakan langsung
    if (imagePath.startsWith('http')) return imagePath;
    
    // Jika path dimulai dengan 'storage/', tambahkan base URL
    if (imagePath.startsWith('storage/')) {
      return `${API_CONFIG.BASE_URL}/${imagePath}`;
    }
    
    // Fallback
    return "/assets/placeholder.png";
  };

  useEffect(() => {
    fetch(getApiUrl(API_CONFIG.ENDPOINTS.TRYOUT_PROGRAMS))
      .then((res) => {
        if (!res.ok) throw new Error("Gagal fetch");
        return res.json();
      })
      .then((data) => {
        // 👇 Pastikan data array
        if (Array.isArray(data)) {
          setPrograms(data);
        } else if (Array.isArray(data.data)) {
          setPrograms(data.data);
        } else {
          throw new Error("Format API tidak sesuai");
        }
        setError(false);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="tryoutprev" className="py-2 bg-blue-50 mt-0">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Tryout UKOM Online Terpercaya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uji kesiapanmu menghadapi UKOM dengan soal-soal simulasi yang akurat
            dan sesuai standar nasional
          </p>
        </div>

        {/* Loading / Error */}
        {loading && <p className="text-center text-gray-500">⏳ Menunggu data...</p>}
        {error && !loading && (
          <p className="text-center text-red-500">⚠️ Data gagal dimuat</p>
        )}

        {/* Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={getImageUrl(program.image)}
                    alt={program.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/6281295012668"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-400 hover:bg-green-500 text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors"
                    >
                      Hubungi Sekarang
                    </a>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {program.category}
                    </span>
                  </div>
                  <a
                    href={`/tryout/${program.id}`}
                    className="text-blue-400 hover:text-blue-500 text-xs font-medium px-3 py-2 border border-blue-400 rounded-lg"
                  >
                    Lihat Detail →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Button */}
        <div className="text-center">
          <a
            href="/tryout"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-400 hover:bg-blue-500 transition-colors"
          >
            Ikuti Tryout Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default TryoutPrev;
