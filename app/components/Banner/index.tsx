// "use client";
// import Image from "next/image";

// const Banner = () => {
//   const teamMembers = [
//     { name: "Kak Awan", src: "/assets/banner/Foto Baru Kak Awan.png" },
//     { name: "Kak Bian", src: "/assets/banner/Foto Baru Kak Bian.png" },
//     { name: "Kak Naufal", src: "/assets/banner/Foto Baru Kak Naufal.png" },
//     { name: "Kak Rezz", src: "/assets/banner/Foto Baru Kak Daffa.png" },
//   ];

//   return (
//     <section
//       id="home-section"
//       className="bg-lightkblue font-sans min-h-[80vh] flex items-start lg:items-center py-6 w-full overflow-hidden"
//     >
//       <div className="mx-auto max-w-7xl w-full px-4 sm:px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-12">
//           {/* LEFT CONTENT */}
//           <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-8">
//             {/* Heading */}
//             <h1 className="text-midnightblue text-3xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-start leading-tight pt-5 lg:pt-0">
//               Bimbel UKOM Terbaik di Indonesia
//             </h1>

//             {/* Subheading */}
//             <h3 className="text-charcoal text-base sm:text-lg font-normal text-center lg:text-start opacity-75 pt-3 lg:pt-0">
//               Raih kelulusan lebih pasti dengan mentor ahli, kurikulum terarah,
//               dan tryout berbasis kompetensi.
//             </h3>

//             {/* Welcome box */}
//             <div className="bg-white/60 border border-slate-300 rounded-lg p-4 text-sm text-charcoal shadow-sm">
//               Selamat datang di <strong>Bimbel UKOM!</strong> Kami percaya
//               setiap calon tenaga kesehatan memiliki potensi besar untuk sukses.
//               Dengan bimbingan mentor berpengalaman dan metode pembelajaran yang
//               terstruktur, mari kita wujudkan bersama kelulusan impian Anda.
//             </div>

//             {/* Features */}
//             <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
//               {["Flexible", "Learning path", "Community"].map((feature, idx) => (
//                 <div key={idx} className="flex gap-2 items-center">
//                   <Image
//                     src="/assets/banner/check-circle.svg"
//                     alt="check-icon"
//                     width={24}
//                     height={24}
//                     className="shrink-0"
//                   />
//                   <p className="text-sm sm:text-lg font-normal text-black">
//                     {feature}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT – TIM UKOM */}
//           <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
//             <div className="w-full">
//               {/* Section Title */}
//               <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-midnightblue text-center lg:text-right pb-6 tracking-tight">
//                 <span className="border-b-4 border-ultramarine pb-1">
//                   Tim UKOM
//                 </span>
//               </h3>

//               {/* Mentor Grid */}
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
//                 {teamMembers.map((m) => (
//                   <div
//                     key={m.name}
//                     className="group flex flex-col items-center hover:cursor-pointer transition-all duration-300"
//                   >
//                     {/* Image Container */}
//                     <div
//                       className="relative flex items-center justify-center rounded-xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md group-hover:shadow-ultramarine/40 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300"
//                       style={{ padding: 0, maxWidth: 340, width: '100%', margin: '0 auto', background: 'white' }}
//                     >
//                       <Image
//                         src={m.src}
//                         alt={m.name}
//                         width={320}
//                         height={420}
//                         className="object-contain"
//                         style={{ width: '100%', height: 'auto', maxHeight: 440 }}
//                         sizes="(max-width: 640px) 98vw, (max-width: 1024px) 48vw, 340px"
//                       />
//                     </div>

//                     {/* Name */}
//                     <span className="mt-3 text-base sm:text-lg font-medium text-midnightblue group-hover:text-ultramarine transition text-center w-full">
//                       {m.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

const Banner = () => {
  const teamMembers = [
    { name: "Kak Awan", src: "/assets/banner/Foto Baru Kak Awan.png" },
    { name: "Kak Bian", src: "/assets/banner/Foto Baru Kak Bian.png" },
    { name: "Kak Naufal", src: "/assets/banner/Foto Baru Kak Naufal.png" },
    { name: "Kak Daffa", src: "/assets/banner/Foto Baru Kak Daffa.png" },
    { name: "Kak Rezz", src: "/assets/banner/Foto Baru Kak Rez.png" },
    { name: "Kak Atta", src: "/assets/banner/Foto Baru Kak Atta.png" },
  ];

  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
    };

    let intervalId = setInterval(autoScroll, 50);

    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => {
      clearInterval(intervalId);
      intervalId = setInterval(autoScroll, 50);
    };

    carousel.addEventListener("mouseenter", handleMouseEnter);
    carousel.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      if (carousel) {
        carousel.removeEventListener("mouseenter", handleMouseEnter);
        carousel.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section
      id="home-section"
      className="bg-lightkblue font-sans flex items-center py-8 lg:py-16 w-full overflow-hidden h-auto lg:min-h-screen"
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-12">
          {/* LEFT CONTENT */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-y-8">
            <h1 className="text-midnightblue text-3xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-start leading-tight">
              Bimbel UKOM Terbaik di Indonesia
            </h1>

            <h3 className="text-charcoal text-base sm:text-lg font-normal text-center lg:text-start opacity-75">
              Raih kelulusan lebih pasti dengan mentor ahli, kurikulum terarah,
              dan tryout berbasis kompetensi.
            </h3>

            <div className="bg-white/60 border border-slate-300 rounded-lg p-4 text-sm text-charcoal shadow-sm">
              Selamat datang di <strong>Bimbel UKOM!</strong> Kami percaya
              setiap calon tenaga kesehatan memiliki potensi besar untuk sukses.
              Dengan bimbingan mentor berpengalaman dan metode pembelajaran yang
              terstruktur, mari kita wujudkan bersama kelulusan impian Anda.
            </div>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              {["Flexible", "Learning path", "Community"].map((feature, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <Image
                    src="/assets/banner/check-circle.svg"
                    alt="check-icon"
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <p className="text-sm sm:text-lg font-normal text-black">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            
  {/* 👉 CTA Button di sini */}
  <div className="flex justify-center lg:justify-start mt-4">
    <Link
      href="/cbt"
      className="px-4 py-2 rounded-lg bg-ultramarine text-white font-medium shadow hover:bg-midnightblue transition text-sm"
    >
      🎯 Coba Mini CBT Gratis
    </Link>
  </div>
</div>
       

          

          {/* RIGHT – TIM UKOM */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
            <div className="w-full">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-midnightblue text-center lg:text-right pb-6 tracking-tight">
                <span className="border-b-4 border-ultramarine pb-1">
                  Tim UKOM
                </span>
              </h3>

              <div className="relative overflow-hidden">
                <div
                  ref={carouselRef}
                  className="flex gap-4 sm:gap-6 overflow-x-hidden scroll-smooth"
                  style={{
                    width: "100%",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {[...teamMembers, ...teamMembers].map((m, index) => (
                    <div
                      key={`${m.name}-${index}`}
                      className="group flex flex-col items-center hover:cursor-pointer transition-all duration-300 flex-shrink-0"
                      style={{ minWidth: "200px" }}
                    >
                      <div
                        className="relative flex items-center justify-center rounded-xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-md group-hover:shadow-ultramarine/40 group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300"
                        style={{
                          padding: 0,
                          maxWidth: 200,
                          width: "100%",
                          margin: "0 auto",
                          background: "white",
                        }}
                      >
                        <Image
                          src={m.src}
                          alt={m.name}
                          width={160}
                          height={210}
                          className="object-contain"
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: 220,
                          }}
                          sizes="160px"
                        />
                      </div>
                      <span className="mt-3 text-sm sm:text-base font-medium text-midnightblue group-hover:text-ultramarine transition text-center w-full">
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

      <style jsx>{`
        div[ref] {
          -webkit-overflow-scrolling: touch;
        }
        div[ref]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Banner;
