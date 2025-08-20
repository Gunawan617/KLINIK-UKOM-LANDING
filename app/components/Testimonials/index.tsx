"use client";
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { postData } from "./PostData"; // path relatif sesuai folder

// fungsi shuffle (Fisher–Yates)
const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default class MultipleItems extends Component<
  {},
  { shuffledData: typeof postData }
> {
  state = {
    shuffledData: [] as typeof postData,
  };

  componentDidMount() {
    // shuffle hanya di client → aman dari hydration error
    this.setState({ shuffledData: shuffleArray(postData) });
  }

  render() {
    const { shuffledData } = this.state;

    const settings = {
      dots: true,
      dotsClass: "slick-dots",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true, dots: false } },
        { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1, infinite: true, dots: false } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false } },
      ],
    };

    return (
        <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
          <div className="mx-auto max-w-7xl sm:py-4 lg:px-8">
        <div className="text-center mb-10">
    <h2 className="text-4xl font-extrabold text-darkbrown inline-block relative">
      Testimoni
      <span className="absolute left-0 -bottom-2 w-full h-1 bg-gold rounded-full"></span>
    </h2>
    <p className="text-base text-gray-500 mt-4">Apa kata mereka tentang kami</p>
  </div>

          <Slider {...settings}>
            {shuffledData.map((items, i) => (
              <div key={i}>
                <div
                  className={`bg-white m-4 p-5 pt-16 my-20 relative ${
                    i % 2 ? "middleDiv" : "testimonial-shadow"
                  }`}
                >
                  {/* Foto */}
                  <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={items.imgSrc}
                        alt={items.name}
                        width={100}
                        height={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Komentar */}
                  <h4 className="text-base font-normal text-darkgray my-4 mt-6">{items.comment}</h4>
                  <hr className="text-gray-300" />

                  {/* Nama + Profesi + Bintang */}
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-darkbrown pt-4 pb-2">{items.name}</h3>
                      <h3 className="text-sm font-normal text-lightgray pb-2">{items.profession}</h3>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, idx) => (
                        <StarIcon key={idx} width={20} className="text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
