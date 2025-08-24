// import React from 'react';

// const bimbelPrograms = [
//   {
//     code: "UKOM_BIDAN",
//     name: "Bimbel Persiapan UKOM Bidan",
//     category: "Kesehatan",
//     participants: "6,800+",
//     image: "assets/major/Bidan.png",
//     description: "Program intensif persiapan Uji Kompetensi Bidan dengan materi lengkap, latihan soal, dan simulasi berbasis SKL terbaru.",
//   },
//   {
//     code: "UKOM_PERAWAT",
//     name: "Bimbel Persiapan UKOM Perawat",
//     category: "Kesehatan",
//     participants: "9,200+",
//     image: "assets/major/Perawat.png",
//     description: "Kelas persiapan Uji Kompetensi Perawat dengan pendalaman materi, bank soal UKOM, serta tryout untuk meningkatkan kelulusan.",
//   },
// ];

// const alumni = [
//   {
//     name: "Febri Tri Ayu Sari, S.Keb.",
//     program: "Bidan",
//     passed: "Lulus UKOM 2024",
//     image: "assets/testimonial/Alumni Bidan/Bdn. Febri Tri Ayu Sari, S.Keb..jpeg",
//   },
//   {
//     name: "Yudhi Kumala Sakti S.Kep.Ners.",
//     program: "Perawat",
//     passed: "Lulus UKOM 2024",
//     image: "assets/testimonial/Alumni Perawat/Yudhi Kumala Sakti S.Kep.Ners..jpeg",
//   },
//   {
//     name: "YUNANDA RIZKY MAHARANI, S. Tr. Keb.",
//     program: "Bidan",
//     passed: "Lulus UKOM 2025",
//     image: "assets/testimonial/Alumni Bidan/YUNANDA RIZKY MAHARANI, S. Tr. Keb .jpeg",
//   },
//   {
//     name: "Petrosina P Irmuply Amd.Kep.jpeg",
//     program: "Perawat",
//     passed: "Lulus UKOM 2025",
//     image: "assets/testimonial/Alumni Perawat/Petrosina P Irmuply Amd.Kep.jpeg",
//   },
// ];

// const BimbelPrev: React.FC = () => {
//   return (
//     // <section className="py-2 bg-gray-50 mt-0">
//       <section className="py-2 bg-blue-50 mt-0">

//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-4">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">
//             Program Bimbel UKOM Terpercaya
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Sukses UKOM dengan program bimbel intensif yang sudah terbukti meluluskan ribuan peserta
//           </p>
//         </div>

//         {/* Grid Program */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
//           {bimbelPrograms.map((program) => (
//             <div
//               key={program.code}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
//             >
//               {/* Image */}
//               <div className="md:w-1/2 h-48 md:h-auto overflow-hidden">
//                 <img
//                   src={program.image}
//                   alt={program.name}
//                   className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//                 />
//               </div>

//               {/* Info */}
//               <div className="flex-1 p-5 flex flex-col justify-between">
//                 <div>
//                   <h3 className="font-bold text-xl text-gray-900 mb-2">{program.name}</h3>
//                   <p className="text-sm text-blue-400 mb-3">{program.participants} peserta aktif</p>
//                   <p className="text-gray-700 text-sm leading-relaxed">{program.description}</p>
//                 </div>
//                 <div className="flex items-center justify-between mt-4">
//             <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
//               {program.category}
//             </span>
//             <div className="flex space-x-2">
//               {/* Hubungi Sekarang di kiri */}
//               <a
//                 href="https://wa.me/6281295012668"

//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-green-400 hover:bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-lg transition-colors"
//               >
//                 Hubungi Sekarang
//               </a>

//               {/* Lihat Detail di kanan */}
//               <a
//                 href="/bimbel"
//                 className="text-blue-400 hover:text-blue-500 text-xs font-medium px-2 py-1 border border-blue-400 rounded-lg"
//               >
//                 Lihat Detail →
//               </a>
//             </div>
//           </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Alumni Section */}
//         <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
//           <div className="text-center mb-4">
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Alumni Sukses</h3>
//             <p className="text-gray-600">Ribuan peserta sudah lulus UKOM dengan program kami</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {alumni.map((al, idx) => (
//               <div key={idx} className="text-center">
//                 <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
//                   <div className="relative w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full bg-blue-100">
//                     <img
//                       src={al.image}
//                       alt={al.name}
//                       className="absolute inset-0 w-full h-full object-cover"
//                     />
//                   </div>
//                   <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
//                     {al.name}
//                   </h4>
//                   <p className="text-xs text-blue-400 mb-1">{al.program}</p>
//                   <p className="text-xs text-gray-500">{al.passed}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Button */}
//         <div className="text-center">
//           <a
//             href="/bimbel"
//             className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-400 hover:bg-blue-500 transition-colors"
//           >
//             Daftar Sekarang
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BimbelPrev;

import React from "react";

const bimbelPrograms = [
  {
    code: "UKOM_BIDAN",
    name: "Bimbel Persiapan UKOM Bidan",
    category: "Kesehatan",
    participants: "6,800+",
    image: "assets/major/Bidan.png",
    description:
      "Program intensif persiapan Uji Kompetensi Bidan dengan materi lengkap, latihan soal, dan simulasi berbasis SKL terbaru.",
  },
  {
    code: "UKOM_PERAWAT",
    name: "Bimbel Persiapan UKOM Perawat",
    category: "Kesehatan",
    participants: "9,200+",
    image: "assets/major/Perawat.png",
    description:
      "Kelas persiapan Uji Kompetensi Perawat dengan pendalaman materi, bank soal UKOM, serta tryout untuk meningkatkan kelulusan.",
  },
];

const alumni = [
  {
    name: "Febri Tri Ayu Sari, S.Keb.",
    program: "Bidan",
    passed: "Lulus UKOM 2024",
    image:
      "assets/testimonial/Alumni Bidan/Bdn. Febri Tri Ayu Sari, S.Keb..jpeg",
  },
  {
    name: "Yudhi Kumala Sakti S.Kep.Ners.",
    program: "Perawat",
    passed: "Lulus UKOM 2024",
    image:
      "assets/testimonial/Alumni Perawat/Yudhi Kumala Sakti S.Kep.Ners..jpeg",
  },
  {
    name: "YUNANDA RIZKY MAHARANI, S. Tr. Keb.",
    program: "Bidan",
    passed: "Lulus UKOM 2025",
    image:
      "assets/testimonial/Alumni Bidan/YUNANDA RIZKY MAHARANI, S. Tr. Keb .jpeg",
  },
  {
    name: "Petrosina P Irmuply Amd.Kep.jpeg",
    program: "Perawat",
    passed: "Lulus UKOM 2025",
    image: "assets/testimonial/Alumni Perawat/Petrosina P Irmuply Amd.Kep.jpeg",
  },
];

const BimbelPrev: React.FC = () => {
  return (
    // <section className="py-2 bg-gray-50 mt-0">
    <section className="py-2 bg-blue-50 mt-0">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Program Bimbel UKOM Terpercaya
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sukses UKOM dengan program bimbel intensif yang sudah terbukti
            meluluskan ribuan peserta
          </p>
        </div>

        {/* Grid Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {bimbelPrograms.map((program) => (
            <div
              key={program.code}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image only */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Buttons + Category */}
              <div className="flex items-center justify-between p-4">
                {/* Kiri = Tombol + Category sejajar */}
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

                {/* Kanan = Lihat Detail */}
                <a
                  href="/bimbel"
                  className="text-blue-400 hover:text-blue-500 text-xs font-medium px-3 py-2 border border-blue-400 rounded-lg"
                >
                  Lihat Detail →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Alumni Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-4">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Alumni Sukses
            </h3>
            <p className="text-gray-600">
              Ribuan peserta sudah lulus UKOM dengan program kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {alumni.map((al, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                  <div className="relative w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full bg-blue-100">
                    <img
                      src={al.image}
                      alt={al.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                    {al.name}
                  </h4>
                  <p className="text-xs text-blue-400 mb-1">{al.program}</p>
                  <p className="text-xs text-gray-500">{al.passed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <a
            href="/bimbel"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-400 hover:bg-blue-500 transition-colors"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default BimbelPrev;
