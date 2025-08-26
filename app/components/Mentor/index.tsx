"use client";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { postData, DataType } from "./data/mentor";


// SHUFFLE FUNCTION
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

// DATA
  

// CUSTOM ARROWS
function SampleNextArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        background: "#D5EFFA",
        padding: "28px",
        borderRadius: "30px",
        border: "1px solid #1A21BC",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#D5EFFA",
        padding: "28px",
        borderRadius: "30px",
        border: "1px solid #1A21BC",
      }}
      onClick={onClick}
    />
  );
}

// MAIN COMPONENT
export default function MentorCarousel() {
  const [shuffledData, setShuffledData] = useState<DataType[]>(postData);

  useEffect(() => {
    // Shuffle hanya di client
    setShuffledData(shuffleArray(postData));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    speed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 4500,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1000, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 530, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="py-10 sm:py-24 bg-paleblue" id="mentor">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative">
        <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">
          Dibimbing dengan dosen Ahli
        </h2>

        <Slider {...settings}>
          {shuffledData.map((items, i) => (
            <div key={i} className="px-2">
              <div className="py-14 md:py-10 text-center h-full flex flex-col">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto rounded-full overflow-hidden mb-6">
                  <Image
                    src={items.imgSrc}
                    alt={`${items.name} profile`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-end">
                  <div className="max-w-xs mx-auto px-4">
                    <div className="h-16 sm:h-20 flex items-end justify-center mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-lightblack leading-tight text-center">
                        {items.name}
                      </h3>
                    </div>
                    <div className="h-12 sm:h-14 flex items-start justify-center">
                      <h4 className="text-base sm:text-lg font-normal text-lightblack opacity-50 text-center leading-tight">
                        {items.profession}
                      </h4>
                    </div>
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
