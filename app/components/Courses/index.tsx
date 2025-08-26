"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { postData } from "./data/courses";

const CoursesSlider = () => {
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
        </div>

        {/* Swiper Container dengan overflow control */}
        <div className="relative overflow-hidden">{/* Container utama overflow hidden */}
          <div className="px-2 sm:px-4 md:px-6 pb-6">{/* Inner container untuk padding */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            centeredSlides={false}
            watchOverflow={true}
            allowTouchMove={true}
            observer={true}
            observeParents={true}
            breakpoints={{
              640: { 
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 24
              }
            }}
            className="courses-slider pb-4"
            style={{ overflow: 'visible' }} /* Hanya untuk shadow vertical */
          >
            {postData.map((item, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full max-w-[380px] mx-auto mb-4">
                  {/* Media */}
                  <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                    {item.videoUrl ? (
                      <iframe
                        src={item.videoUrl}
                        title={item.heading}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full object-cover"
                      ></iframe>
                    ) : (
                      <Image
                        src={item.imgSrc}
                        alt={item.heading}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}

                    <div className="absolute right-3 bottom-3 bg-ultramarine rounded-full px-4 py-2 shadow-md">
                      <h3 className="text-white uppercase text-xs font-medium text-center">
                        Best Seller
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Heading */}
                    <div className="flex-grow">
                      <h4 className="text-lg md:text-xl font-bold text-black leading-tight mb-2">
                        {item.heading}
                      </h4>
                      {item.heading2 && (
                        <h4 className="text-lg md:text-xl font-bold text-black leading-tight mb-3">
                          {item.heading2}
                        </h4>
                      )}
                      <p className="text-sm text-gray-600 line-clamp-2">{item.name}</p>
                    </div>

                    {/* Rating + Info */}
                    <div className="mt-6">
                      {/* Rating */}
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                          <span className="text-red text-xl font-semibold">
                            {item.rating}
                          </span>
                          <div className="flex">
                            {[...Array(5)].map((_, idx) => (
                              <StarIcon
                                key={idx}
                                className="h-4 w-4 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <hr className="my-4 border-gray-200" />

                      {/* Info */}
                      <div className="flex justify-between text-sm text-gray-600">
                        <div className="flex gap-2 items-center">
                          <Image
                            src={"/assets/courses/book-open.svg"}
                            alt="classes"
                            width={18}
                            height={18}
                          />
                          <span>{item.classes} classes</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <Image
                            src={"/assets/courses/users.svg"}
                            alt="students"
                            width={18}
                            height={18}
                          />
                          <span>{item.students} students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation arrows */}
          <div className="absolute inset-y-0 left-2 right-2 flex justify-between items-center pointer-events-none z-10">
            <button className="prev-btn -ml-6 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
            </button>
            <button className="next-btn -mr-6 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-200 pointer-events-auto disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronRightIcon className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSlider;