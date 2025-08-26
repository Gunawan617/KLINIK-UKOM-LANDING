"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  videoUrl?: string;
  name: string;
  students: number;
  classes: number;
  rating: number;
}

const postData: DataType[] = [
  {
    heading: "Bimbel Perawat Malam",
    heading2: "Perawat",
    name: "Ns. Hairunnisa S.Kep.,M.Kep",
    imgSrc: "/assets/courses/courseone.png",
    videoUrl: "https://www.youtube.com/embed/JNVag6P3U1M",
    students: 150,
    classes: 12,
    rating: 4.7,
  },
  {
    heading: "Bimbel Perawat Malam",
    heading2: "Perawat",
    name: "Dr. Nur Meity Sulistia Ayu, S. Kep., Ns., M. Kep.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/qlt3Q6LQDpU",
    students: 130,
    classes: 12,
    rating: 4.7,
  },
  {
    heading: "Bimbel Perawat Malam",
    heading2: "Perawat",
    name: "Dr. Tri Lestari Handayani, M.Kep.,Sp.Mat.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/l1thhaP-uDY",
    students: 130,
    classes: 12,
    rating: 4.7,
  },
  {
    heading: "Bimbel Perawat Malam",
    heading2: "Perawat",
    name: "Ns. Ayuda Nia Agustina, M.Kep., Sp.Kep.An",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/K4vKMQQ8OP0",
    students: 130,
    classes: 12,
    rating: 4.7,
  },
  {
    heading: "Bimbel Perawat Malam",
    heading2: "Perawat",
    name: "Moh. Hendra Setia Lesmana, S.Kep., Ns., M.Sc., Ph.D.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/Ow0ec-ix5XA",
    students: 130,
    classes: 12,
    rating: 4.7,
  },

   {
    heading: "Bimbel Kebidanan",
    heading2: "Bidan",
    name: "Dr. Bdn. Kursih Sulastriningsih, SSiT., M.Kes.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/vuBqE4h7d9A",
    students: 130,
    classes: 12,
    rating: 4.7,
  },

    {
    heading: "Bimbel Kebidanan",
    heading2: "Bidan",
    name: "Ratna Suminar, SST., Bdn., M.Tr.Keb.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/GpLon0t-fYg",
    students: 130,
    classes: 12,
    rating: 4.7,
  },


    {
    heading: "Bimbel Kebidanan",
    heading2: "Bidan",
    name: "Zumroh Hasanah, S. Keb., Bd., M.Kes.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/Nx3yihTLWeA",
    students: 130,
    classes: 12,
    rating: 4.7,
  },

    {
    heading: "Bimbel Kebidanan",
    heading2: "Bidan",
    name: ". Erni Hernawati, SST., M.Keb., M.M., Ph.D.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/KCgj8t86T10",
    students: 130,
    classes: 12,
    rating: 4.7,
  },

    {
    heading: "Bimbel Kebidanan",
    heading2: "Bidan",
    name: "Zumroh Hasanah, S. Keb., Bd., M.Kes.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/orWWxg7RJQ4",
    students: 130,
    classes: 12,
    rating: 4.7,
  },
];

const CoursesSlider = () => {
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("tiny-slider/src/tiny-slider").then(({ tns }) => {
        tns({
          container: ".courses-slider",
          items: 1,
          slideBy: "page",
          autoplay: false,
          nav: false,
          controls: true,
          controlsContainer: "#custom-controls",
          prevButton: prevBtnRef.current,
          nextButton: nextBtnRef.current,
          gutter: 20,
          mouseDrag: true,
          responsive: {
            640: { items: 1.5 },
            768: { items: 2 },
            1024: { items: 2.5 },
            1280: { items: 3 },
          },
        });
      });
    }
  }, []);

  return (
    <section id="courses" className="py-12 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          <h3 className="text-midnightblue text-3xl md:text-4xl font-semibold">
            Pratinjau Pembelajaran
          </h3>
          <Link
            href={"/"}
            className="text-Blueviolet text-lg font-medium hover:underline"
          >
            Lihat Lebih Lanjut &gt;
          </Link>
        </div>

        {/* Custom arrows */}
        <div
          id="custom-controls"
          className="absolute z-10 top-[48%] left-0 right-0 flex justify-between px-2 md:px-6 pointer-events-none"
        >
          <button
            ref={prevBtnRef}
            className="bg-white p-2 rounded-full shadow-md pointer-events-auto hover:bg-gray-100"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
          </button>
          <button
            ref={nextBtnRef}
            className="bg-white p-2 rounded-full shadow-md pointer-events-auto hover:bg-gray-100"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Slider */}
        <div className="courses-slider flex gap-6 px-2">
          {postData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-courses overflow-hidden flex flex-col min-w-[270px] sm:min-w-[300px] md:min-w-[330px]"
            >
              {/* Media */}
              <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                {item.videoUrl ? (
                  <iframe
                    src={item.videoUrl}
                    title={item.heading}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover rounded-t-2xl"
                  ></iframe>
                ) : (
                  <Image
                    src={item.imgSrc}
                    alt={item.heading}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                )}

                <div className="absolute right-3 bottom-3 bg-ultramarine rounded-full px-4 py-2 shadow-md">
                  <h3 className="text-white uppercase text-xs font-medium text-center">
                    Best Seller
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-black">{item.heading}</h4>
                  <h4 className="text-lg md:text-xl font-bold text-black">{item.heading2}</h4>
                  <p className="text-sm text-gray-600 mt-3">{item.name}</p>
                </div>

                {/* Rating */}
                <div className="flex justify-between items-center mt-5">
                  <div className="flex gap-2 items-center">
                    <span className="text-red text-xl font-semibold">{item.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, idx) => (
                        <StarIcon key={idx} className="h-5 w-5 text-gold" />
                      ))}
                    </div>
                  </div>
                </div>

                <hr className="my-4 border-gray-300" />

                {/* Info */}
                <div className="flex justify-between text-sm text-gray-700">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/assets/courses/book-open.svg"}
                      alt="classes"
                      width={20}
                      height={20}
                    />
                    <span>{item.classes} classes</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/assets/courses/users.svg"}
                      alt="students"
                      width={20}
                      height={20}
                    />
                    <span>{item.students} students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSlider;
