"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

  const postData: DataType[] = 
    [
    {
        name: "Retno Wulan, S.ST., M.Keb",
        profession: "Bidan",
        comment: "Bimbel ini sangat membantu dalam persiapan Uji Kompetensi Bidan. Materinya jelas, mudah dipahami, dan sesuai dengan kebutuhan praktik kebidanan.",
        imgSrc: "/assets/testimonial/Retno Wulan - Bidan R Wulan-modified.png",
    },
     {
        name: "Retno Wulan, S.ST., M.Keb",
        profession: "Bidan",
        comment: "Bimbel ini sangat membantu dalam persiapan Uji Kompetensi Bidan. Materinya jelas, mudah dipahami, dan sesuai dengan kebutuhan praktik kebidanan.",
        imgSrc: "/assets/testimonial/Retno Wulan - Bidan R Wulan-modified.png",
    },
     {
        name: "Retno Wulan, S.ST., M.Keb",
        profession: "Bidan",
        comment: "Bimbel ini sangat membantu dalam persiapan Uji Kompetensi Bidan. Materinya jelas, mudah dipahami, dan sesuai dengan kebutuhan praktik kebidanan.",
        imgSrc: "/assets/testimonial/Retno Wulan - Bidan R Wulan-modified.png",
    },
     {
        name: "Retno Wulan, S.ST., M.Keb",
        profession: "Bidan",
        comment: "Bimbel ini sangat membantu dalam persiapan Uji Kompetensi Bidan. Materinya jelas, mudah dipahami, dan sesuai dengan kebutuhan praktik kebidanan.",
        imgSrc: "/assets/testimonial/Retno Wulan - Bidan R Wulan-modified.png",
    },
    // {
    //     name: "Siti Rahmawati, S.ST",
    //     profession: "Bidan Praktisi & Mentor",
    //     comment: "Metode belajar interaktifnya bikin saya lebih percaya diri menghadapi ujian. Sangat direkomendasikan untuk calon bidan!",
    //     imgSrc: "/assets/mentor/user2.png",
    // },
    // {
    //     name: "Ahmad Faizal, S.Kep., Ners",
    //     profession: "Alumni Bimbel Ners",
    //     comment: "Pengajarnya berpengalaman dan sangat mendukung. Saya lulus UKOM di percobaan pertama berkat bimbel ini.",
    //     imgSrc: "/assets/mentor/user3.png",
    // },
    // {
    //     name: "dr. Lestari Wulandari, M.Kep",
    //     profession: "Pengajar Keperawatan",
    //     comment: "Pendekatan belajarnya sangat cocok untuk mahasiswa yang butuh bimbingan intensif. Top banget!",
    //     imgSrc: "/assets/mentor/user1.png",
    // },
    // {
    //     name: "Siti Rahmawati, S.ST",
    //     profession: "Bidan Praktisi & Mentor",
    //     comment: "Sistem soal dan pembahasannya sangat lengkap. Cocok untuk yang mau lulus UKOM dengan nilai tinggi.",
    //     imgSrc: "/assets/mentor/user2.png",
    // },
    // {
    //     name: "Ahmad Faizal, S.Kep., Ners",
    //     profession: "Alumni Bimbel Ners",
    //     comment: "Belajarnya fleksibel tapi tetap terstruktur. Cocok banget buat yang sambil kerja atau koas.",
    //     imgSrc: "/assets/mentor/user3.png",
    // },
    ]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: true,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="pt-40 pb-10 sm:pb-32 lg:py-32" id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                                            <div className={`bg-white m-4 p-5 pt-16 my-20 relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow'}`}>
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
                            <h4 className='text-base font-normal text-darkgray my-4 mt-6'>{items.comment}</h4>
                            <hr className="text-gray-300" />
                            <div className="flex justify-between">
                                <div>
                                <h3 className='text-lg font-medium text-darkbrown pt-4 pb-2'>{items.name}</h3>
                                <h3 className='text-sm font-normal text-lightgray pb-2'>{items.profession}</h3>
                                </div>
                                <div className="flex">
                                <StarIcon width={20} className="text-gold" />
                                <StarIcon width={20} className="text-gold" />
                                <StarIcon width={20} className="text-gold" />
                                <StarIcon width={20} className="text-gold" />
                                <StarIcon width={20} className="text-lightgray" />
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
