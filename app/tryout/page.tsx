"use client";

import React, { useState } from 'react';

// Icons sebagai SVG components
const Play = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="5,3 19,12 5,21 5,3"></polygon>
  </svg>
);

const Clock = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
);

const Users = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="m22 21-3-3m0 0-3-3m3 3h-8"></path>
  </svg>
);

const Trophy = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55.47.98.97 1.21C14.23 18.75 16 20.26 16 22"></path>
    <path d="M7 8h10v4a6 6 0 1 1-12 0V8Z"></path>
  </svg>
);

const ArrowRight = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
);

const CheckCircle = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22,4 12,14.01 9,11.01"></polyline>
  </svg>
);

const Star = ({ className = "" }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26 12,2"></polygon>
  </svg>
);

const BookOpen = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const Target = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const User = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default function TryoutPage() {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');

  // const programs = [
  //   { code: 'UAAPT', name: 'UKOM Profesi Apoteker', category: 'Kesehatan', participants: '12,500+' },
  //   { code: 'UANUT', name: 'UKOM Profesi Nutrisi', category: 'Kesehatan', participants: '8,200+' },
  //   { code: 'UAPER', name: 'UKOM Profesi Perawat', category: 'Kesehatan', participants: '15,300+' },
  //   { code: 'UABID', name: 'UKOM Profesi Bidan', category: 'Kesehatan', participants: '9,800+' }
  // ];
    const programs = [
    { 
      code: 'UAAPT', 
      name: 'UKOM Profesi Apoteker', 
      category: 'Kesehatan', 
      participants: '12,500+',
      image: '/images/apoteker.png' 
    },
    { 
      code: 'UANUT', 
      name: 'UKOM Profesi Nutrisi', 
      category: 'Kesehatan', 
      participants: '8,200+',
      image: '/images/nutrisi.png' 
    },
    { 
      code: 'UAPER', 
      name: 'UKOM Profesi Perawat', 
      category: 'Kesehatan', 
      participants: '15,300+',
      image: '/images/perawat.png' 
    },
    { 
      code: 'UABID', 
      name: 'UKOM Profesi Bidan', 
      category: 'Kesehatan', 
      participants: '9,800+',
      image: '/images/bidan.png' 
    }
  ];


  const packages = [
    {
      id: 'basic',
      name: 'Basic Package',
      price: 'Gratis',
      originalPrice: null,
      duration: '30 menit',
      questions: '25 soal',
      attempts: '1x percobaan',
      features: ['Soal pilihan ganda', 'Pembahasan singkat', 'Skor instant'],
      badge: null
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 'Rp 75.000',
      originalPrice: 'Rp 100.000',
      duration: '90 menit',
      questions: '100 soal',
      attempts: 'Unlimited',
      features: ['Soal pilihan ganda', 'Pembahasan lengkap', 'Analisis hasil detail', 'Sertifikat digital'],
      badge: 'BEST SELLER',
      popular: true
    },
    {
      id: 'ultimate',
      name: 'Ultimate Package',
      price: 'Rp 150.000',
      originalPrice: 'Rp 200.000',
      duration: '120 menit',
      questions: '200 soal',
      attempts: 'Unlimited',
      features: ['Semua fitur Premium', 'Soal case study', 'Video pembahasan', 'Konsultasi mentor', '1 bulan akses penuh'],
      badge: null
    }
  ];

  const mentors = [
    { 
      name: 'Dr. Ahmad Susanto, S.Farm., M.Si', 
      specialty: 'Farmakologi Klinik', 
      institution: 'Dosen Farmasi UNPAD',
      image: '/images/mentors/dr-ahmad.jpg' 
    },
    { 
      name: 'Dr. Sarah Indira, S.Farm., Apt.', 
      specialty: 'Farmasetika', 
      institution: 'Apoteker RS. Hasan Sadikin',
      image: '/images/mentors/dr-sarah.jpg' 
    },
    { 
      name: 'Dr. Budi Santoso, S.Farm., M.Si', 
      specialty: 'Farmasi Komunitas', 
      institution: 'Dosen Farmasi UGM',
      image: '/images/mentors/dr-budi.jpg' 
    },
    { 
      name: 'Dr. Sari Dewi, S.Farm., Apt.', 
      specialty: 'Farmasi Industri', 
      institution: 'Praktisi Farmasi',
      image: '/images/mentors/dr-sari.jpg' 
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Minimal */}
      <section className="bg-gray-50 pt-16 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Tryout UKOM
                  <span className="block text-blue-600">Terbaik di Indonesia</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Raih kelulusan lebih pasti dengan mentor ahli, kurikulum terarah, dan tryout berbasis kompetensi.
                </p>
              </div>

              {/* Simple Features */}
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Flexible</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Learning path</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Community</span>
                </div>
              </div>
            </div>

            {/* Right Content - Tim UKOM */}
            <div className="space-y-6">
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Tim UKOM</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {mentors.map((mentor, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <div className="relative w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full">
                        <img
                          src={mentor.image}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            const fallback = target.nextElementSibling as HTMLElement;
                            target.style.display = 'none';
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        {/* Fallback div - akan muncul jika gambar error */}
                        <div className="absolute inset-0 bg-blue-100 rounded-full items-center justify-center" style={{display: 'none'}}>
                          <User className="w-8 h-8 text-blue-500" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                        {mentor.name.split(',')[0]} {/* Tampilkan nama tanpa gelar */}
                      </h4>
                      <p className="text-xs text-blue-600 mb-1">{mentor.specialty}</p>
                      <p className="text-xs text-gray-500">{mentor.institution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selection */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pilih Program Tryout</h2>
            <p className="text-xl text-gray-600">Sesuaikan dengan bidang profesi Anda</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div 
                key={program.code}
                className={`bg-white border-2 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  
                  selectedProgram === program.code 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-gray-300'
                    
                }`
              }
                onClick={() => setSelectedProgram(program.code)}
              >
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{program.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{program.category}</p>
                    <p className="text-xs text-blue-600">{program.participants} peserta</p>
                  </div>
                  {selectedProgram === program.code && (
                    <div className="text-blue-600">
                      <CheckCircle className="w-5 h-5 mx-auto" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Selection - Course Card Style */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Packages.</h2>
            <div className="flex justify-end">
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Explore packages <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedPackage === pkg.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {/* Image Placeholder - Similar to course cards */}
                <div className="relative h-48 bg-gradient-to-r from-blue-500 to-indigo-600">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Target className="w-16 h-16 text-white opacity-60" />
                  </div>
                  
                  {pkg.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        {pkg.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{pkg.name}</h3>
                    <p className="text-sm text-gray-600">Colt steele</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{pkg.duration} • {pkg.questions}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Play className="w-4 h-4 mr-2" />
                      <span>{pkg.attempts}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {pkg.features.slice(0, 3).map((feature, idx) => (
                      <p key={idx} className="text-sm text-gray-600">• {feature}</p>
                    ))}
                  </div>

                  {/* Price and Rating */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">4.7</span>
                      <div className="flex ml-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      {pkg.originalPrice && (
                        <span className="text-sm text-gray-400 line-through mr-2">{pkg.originalPrice}</span>
                      )}
                      <span className="text-xl font-bold text-gray-900">{pkg.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Siap Memulai Tryout?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Bergabung dengan ribuan peserta lain yang sudah merasakan manfaatnya
          </p>
          <button 
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            disabled={!selectedProgram || !selectedPackage}
          >
            {!selectedProgram || !selectedPackage 
              ? 'Pilih Program & Paket Terlebih Dahulu' 
              : 'Mulai Tryout Sekarang'
            }
          </button>
        </div>
      </section>
    </div>
  );
}