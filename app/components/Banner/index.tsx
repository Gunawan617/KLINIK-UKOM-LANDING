// import Image from 'next/image';

// const Banner = () => {
//   const teamMembers = [
//     { name: 'Bang Awan', src: '/assets/banner/Awan.png' },
//     { name: 'Bang Bian', src: '/assets/banner/Bian.png' },
//     { name: 'Bang Naufal', src: '/assets/banner/Naufal.png' },
//     { name: 'Bang Rezz', src: '/assets/banner/Rezz.png' },
//   ];

//   return (
//     <div id="home-section" className="bg-lightkblue font-sans">
//       <div className="mx-auto max-w-7xl pt-16 sm:pt-20 sm:pb-24 px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
//           {/* LEFT CONTENT */}
//           <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-8">
//             {/* Heading */}
//             <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-tight pt-5 lg:pt-0">
//               Bimbel UKOM Terbaik di Indonesia
//             </h1>

//             {/* Subheading */}
//             <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
//               Raih kelulusan lebih pasti dengan mentor ahli, kurikulum terarah, dan tryout berbasis kompetensi.
//             </h3>

//             {/* Features */}
//             <div className="flex flex-wrap gap-4 pt-10 lg:pt-4 mb-10 lg:mb-0">
//               {['Flexible', 'Learning path', 'Community'].map((feature, idx) => (
//                 <div key={idx} className="flex gap-2 items-center">
//                   <Image
//                     src="/assets/banner/check-circle.svg"
//                     alt="check-icon"
//                     width={30}
//                     height={30}
//                     className="smallImage"
//                   />
//                   <p className="text-sm sm:text-lg font-normal text-black">{feature}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT – TIM UKOM */}
//           <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
//             <div className="w-full">
//               {/* Section Title */}
//               <h3 className="text-3xl lg:text-4xl font-bold text-midnightblue text-center lg:text-right pb-6 tracking-tight">
//                 <span className="border-b-4 border-ultramarine pb-1">Tim UKOM</span>
//               </h3>

//               {/* Mentor Grid */}
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
//                 {teamMembers.map((m) => (
//                   <div
//                     key={m.name}
//                     className="group flex flex-col items-center hover:cursor-pointer transition-all duration-300"
//                   >
//                     {/* Image Container */}
//                     <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-xl group-hover:shadow-ultramarine/40 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
//                       <Image
//                         src={m.src}
//                         alt={m.name}
//                         fill
//                         className="object-cover"
//                         sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
//                       />
//                     </div>

//                     {/* Name */}
//                     <span className="mt-3 text-base font-medium text-midnightblue group-hover:text-ultramarine transition">
//                       {m.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import Image from 'next/image';

const Banner = () => {
  const teamMembers = [
    { name: 'Bang Awan', src: '/assets/banner/Awan.png' },
    { name: 'Bang Bian', src: '/assets/banner/Bian.png' },
    { name: 'Bang Naufal', src: '/assets/banner/Naufal.png' },
    { name: 'Bang Rezz', src: '/assets/banner/Rezz.png' },
  ];

  return (
    <div id="home-section" className="bg-lightkblue font-sans">
      <div className="mx-auto max-w-7xl pt-16 sm:pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-8">
            {/* Heading */}
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start leading-tight pt-5 lg:pt-0">
              Bimbel UKOM Terbaik di Indonesia
            </h1>

            {/* Subheading */}
            <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-5 lg:pt-0">
              Raih kelulusan lebih pasti dengan mentor ahli, kurikulum terarah, dan tryout berbasis kompetensi.
            </h3>

            {/* Welcome box */}
            <div className="bg-white/60 border border-slate-300 rounded-lg p-4 text-sm text-charcoal shadow-sm">
              Selamat datang di <strong>Bimbel UKOM!</strong> Kami percaya setiap calon tenaga kesehatan
              memiliki potensi besar untuk sukses. Dengan bimbingan mentor berpengalaman dan metode pembelajaran
              yang terstruktur, mari kita wujudkan bersama kelulusan impian Anda.
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 pt-4">
              {['Flexible', 'Learning path', 'Community'].map((feature, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <Image
                    src="/assets/banner/check-circle.svg"
                    alt="check-icon"
                    width={28}
                    height={28}
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – TIM UKOM */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
            <div className="w-full">
              {/* Section Title */}
              <h3 className="text-3xl lg:text-4xl font-bold text-midnightblue text-center lg:text-right pb-6 tracking-tight">
                <span className="border-b-4 border-ultramarine pb-1">Tim UKOM</span>
              </h3>

              {/* Mentor Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {teamMembers.map((m) => (
                  <div
                    key={m.name}
                    className="group flex flex-col items-center hover:cursor-pointer transition-all duration-300"
                  >
                    {/* Image Container - Portrait */}
                    <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md group-hover:shadow-ultramarine/40 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
                      <Image
                        src={m.src}
                        alt={m.name}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      />
                    </div>

                    {/* Name */}
                    <span className="mt-3 text-base font-medium text-midnightblue group-hover:text-ultramarine transition">
                      {m.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
