"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

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
    heading: "Pembahasan Soal",
    heading2: "Perawat",
    name: "Dr. Neny Triana, S.Kep., Ns., M.Pd., M.Kep.",
    imgSrc: "/assets/courses/courseone.png",
    videoUrl: "https://www.youtube.com/embed/NWOVGQbsEpg",
    students: 150,
    classes: 12,
    rating: 4.7,
  },
  {
    heading: "Pembahasan Soal",
    heading2: "Perawat bersama",
    name: "Ria Anugrahwati, Ners., M.Kep.",
    imgSrc: "/assets/courses/coursetwo.png",
    videoUrl: "https://www.youtube.com/embed/VmBHRObsXQ0",
    students: 130,
    classes: 12,
    rating: 4.7,
  },
  {
    heading: "Pembahasan Soal UKOM",
    heading2: "D3 Lab Medis",
    name: "Sabrina P. M. Pinontoan, S.Pd., M.Si.",
    imgSrc: "/assets/courses/coursethree.png",
    videoUrl: "https://www.youtube.com/embed/RHHT-v5mTEw",
    students: 120,
    classes: 12,
    rating: 4.7,
  },
];

const CoursesList = () => {
  return (
    <section id="courses" className="py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
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

        {/* Cards wrapper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {postData.map((items, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-courses overflow-hidden flex flex-col"
            >
              {/* Media */}
              <div className="relative w-full aspect-video">
                {items.videoUrl ? (
                  <iframe
                    src={items.videoUrl}
                    title={items.heading}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-cover rounded-t-2xl"
                  ></iframe>
                ) : (
                  <Image
                    src={items.imgSrc}
                    alt={items.heading}
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
                  <h4 className="text-lg md:text-xl font-bold text-black">
                    {items.heading}
                  </h4>
                  <h4 className="text-lg md:text-xl font-bold text-black">
                    {items.heading2}
                  </h4>
                  <p className="text-sm text-gray-600 mt-3">{items.name}</p>
                </div>

                {/* Rating */}
                <div className="flex justify-between items-center mt-5">
                  <div className="flex gap-2 items-center">
                    <span className="text-red text-xl font-semibold">
                      {items.rating}
                    </span>
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
                    <span>{items.classes} classes</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={"/assets/courses/users.svg"}
                      alt="students"
                      width={20}
                      height={20}
                    />
                    <span>{items.students} students</span>
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

export default CoursesList;
