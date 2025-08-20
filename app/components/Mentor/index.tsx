"use client";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// TYPE
interface DataType {
  profession: string;
  name: string;
  imgSrc: string;
}

// SHUFFLE FUNCTION
function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

// DATA
    const postData: DataType[] = [
    // DOSEN PERAWAT
    {
    profession: 'Dosen Perawat',
    name: 'Dr. Sestu Retno Dwi Andayani, S.Kp., M.Kes',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Dr. Sestu Retno Dwi Andayani, S.Kp., M.Kes.jpg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Dr. Nurma Afiani, S.Kep., Ns., M.Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Dr. Nurma Afiani, S.Kep., Ns., M.Kep..png',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Ns. Harmilah, S.Pd., S.Kep., M. Kep. Sp. KMB',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Ns. Harmilah, S.Pd., S.Kep., M. Kep. Sp. KMB.jpeg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Ns. Umi Hani, M.Kep., Sp.Kep.Kom',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Ns. Umi Hani, M.Kep., Sp.Kep.Kom. .png',
    },
    {
    profession: 'Dosen Perawat',
    name: 'M. Iqbal Angga Kusuma, S.Kep., Ns., M.Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/M. Iqbal Angga Kusuma, S.Kep., Ns., M.Kep..jpeg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Ns. Andrik Hermanto, S.Kep., M.Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Ns. Andrik Hermanto, S.Kep., M.Kep.png',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Ns. Ayuda Nia Agustina, M.Kep., Sp.Kep.An',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Ns. Ayuda Nia Agustina, M.Kep., Sp.Kep.An.jpeg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Ns. Hairunnisa, S.Kep., M.Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Ns. Hairunnisa, S.Kep., M.Kep.jpg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Retno Ayu Yuliastuti, S.Kep., Ns., M.Tr.Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Retno Ayu Yuliastuti, S.Kep., Ns., M.Tr.Kep.jpeg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Riza Arisanty Latifah, S.Kep., Ners., M.Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Riza Arisanty Latifah, S.Kep., Ners., M.Kep.jpeg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Sulastri, SKp, M. Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Sulastri, SKp, M. Kep.jpg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Supriatin, S.Kep., Ners., M.Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Supriatin, S.Kep., Ners., M.Kep.jpeg',
    },
    {
    profession: 'Dosen Perawat',
    name: 'Afrizal Hasan S.Kep.,Ns.,M.Kep',
    imgSrc: '/assets/mentor/FOTO DOSEN PERAWAT/Afrizal Hasan S.Kep.,Ns.,M.Kep.jpeg',
    },

    // DOSEN BIDAN
    {
    profession: 'Dosen Bidan',
    name: 'Dr. Budi Astyandini, S.SiT, M.Kes',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Dr. Budi Astyandini.S.SiT.M. Kes.jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Dr. Rizka Ayu Setyani, SST MPH',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Dr. Rizka Ayu Setyani, SST MPH.jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Dr. Bdn. Kursih Sulastriningsih SSiT, M.Kes',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Dr. Bdn. Kursih Sulastriningsih SSiT, M. Kes.jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'YUNI VIVI SANTRI P, SKM, S.Keb, MKM',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/YUNI VIVI SANTRI P, SKM,.S.Keb. MKM.jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Yessy Arisman, S.Tr.Keb., M.Tr.Keb',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Yessy Arisman, S.Tr.Keb., M.Tr. Keb.jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Stella Maris Bakara, S.Tr.Keb., M.K.M, CHE',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Stella Maris Bakara, S.Tr.Keb., M.K.M, CHE.JPG',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Nur Maziyah Hurin_in, S.Tr.Keb., M.Kes',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Nur Maziyah Hurin_in, S.Tr.Keb., M. Kes..jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Pariqa Annisa, S.Tr.Keb., BD., M.Keb',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Pariqa Annisa, S.Tr.Keb., BD., M.Keb..jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Ratna Suminar, S.ST., M.Tr.Keb',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Ratna Suminar, S.ST., M.Tr. Keb..jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Risda Mariana Manik SST., M.K.M',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Risda Mariana Manik SST., M.K.M.jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Sri Wisnu Wardani, S.ST., S.Keb',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Sri Wisnu Wardani, S.ST., S.Keb..jpeg',
    },
    {
    profession: 'Dosen Bidan',
    name: 'Muayah, SKM., SST., M.Tr.Keb',
    imgSrc: '/assets/mentor/FOTO DOSEN BIDAN/Muayah, SKM., SST., M.Tr. Keb.jpeg',
    },

    // MENTOR LAINNYA
    ]

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
