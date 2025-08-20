"use client";

import React, { useMemo, useState } from "react";

/* ================= Icons (SVG) ================= */
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

const ArrowRight = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
);

const WhatsAppIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M19.11 17.34c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.27-.8-.64-1.34-1.42-1.5-1.66-.16-.27-.02-.41.11-.55.11-.11.25-.27.36-.41.11-.14.16-.23.25-.39.09-.18.05-.32-.02-.46-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.46.07-.7.32-.25.27-.95.93-.95 2.27 0 1.34.98 2.63 1.11 2.81.14.18 1.93 2.95 4.67 4.02.65.27 1.16.43 1.56.55.65.2 1.23.18 1.7.11.52-.07 1.6-.66 1.82-1.3.23-.64.23-1.18.16-1.3-.05-.14-.23-.2-.5-.34z" />
    <path d="M26.62 5.38C23.84 2.6 20.12 1.06 16.16 1.06 8.62 1.06 2.42 7.26 2.42 14.8c0 2.4.64 4.75 1.86 6.83L2 30.94l9.5-2.23c1.99 1.09 4.24 1.67 6.65 1.67 7.54 0 13.74-6.2 13.74-13.74 0-3.96-1.54-7.68-4.32-10.46zm-10.46 23.1c-2.22 0-4.39-.59-6.29-1.71l-.45-.27-5.64 1.32 1.34-5.49-.29-.45c-1.16-1.9-1.78-4.09-1.78-6.33 0-6.71 5.46-12.17 12.17-12.17 3.25 0 6.31 1.26 8.61 3.56 2.31 2.31 3.58 5.37 3.58 8.61 0 6.71-5.46 12.17-12.17 12.17z" />
  </svg>
);

/* =============== Data =============== */
const WA_NUMBER = "6281295012668"; // TODO: ganti dengan nomor admin kamu

const bimbelPrograms = [
  {
    code: "BIDAN",
    name: "Bimbel Bidan",
    category: "Kesehatan",
    participants: "6,800+",
    image: "assets/major/Bidan.png",
    description: "Fokus pada kompetensi kebidanan: asuhan kehamilan, persalinan, nifas, neonatus, KB, dan gawat darurat maternal-neonatal.",
  },
  {
    code: "PERAWAT",
    name: "Bimbel Perawat",
    category: "Kesehatan",
    participants: "9,200+",
    image: "assets/major/Perawat.png",
    description: "Pendalaman keperawatan medikal-bedah, keperawatan gawat darurat, maternitas, anak, komunitas, dan manajemen keperawatan.",
  },
];

const packages = [
  {
    id: "reguler",
    name: "Reguler",
    price: "Rp 59.000",
    originalPrice: "Rp 89.000",
    duration: "60 menit/sesi",
    questions: "80–100 soal",
    attempts: "Unlimited",
    features: [
      "Kurikulum sesuai blueprint terbaru",
      "Bank soal & pembahasan lengkap",
      "E-rapor kemajuan belajar",
      "Grup diskusi & peer learning",
    ],
    badge: null,
    banner: "https://picsum.photos/seed/reguler/1200/600",
  },
  {
    id: "intensif",
    name: "Intensif",
    price: "Rp 99.000",
    originalPrice: "Rp 149.000",
    duration: "90 menit/sesi",
    questions: "150–200 soal",
    attempts: "Unlimited",
    features: [
      "Semua fitur Reguler",
      "Kelas live interaktif (Zoom)",
      "Tryout tematik per bab",
      "Coaching mingguan",
    ],
    badge: "BEST SELLER",
    banner: "https://picsum.photos/seed/intensif/1200/600",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: "Rp 179.000",
    originalPrice: "Rp 239.000",
    duration: "120 menit/sesi",
    questions: "300+ soal",
    attempts: "Unlimited",
    features: [
      "Semua fitur Intensif",
      "Bedah kasus komprehensif",
      "Simulasi CBT mirip real",
      "Pendampingan mentor privat",
      "Akses 1 bulan penuh",
    ],
    badge: null,
    banner: "https://picsum.photos/seed/ultimate/1200/600",
  },
];

const alumni = [
  {
    name: "Febri Tri Ayu Sari, S.Keb.",
    program: "Bidan",
    passed: "Lulus UKOM 2024",
    image: "assets/testimonial/Alumni Bidan/Bdn. Febri Tri Ayu Sari, S.Keb..jpeg",
  },
  {
    name: "Yudhi Kumala Sakti S.Kep.Ners.",
    program: "Perawat",
    passed: "Lulus UKOM 2024",
    image: "assets/testimonial/Alumni Perawat/Yudhi Kumala Sakti S.Kep.Ners..jpeg",
  },
  {
    name: "YUNANDA RIZKY MAHARANI, S. Tr. Keb.",
    program: "Bidan",
    passed: "Lulus UKOM 2025",
    image: "assets/testimonial/Alumni Bidan/YUNANDA RIZKY MAHARANI, S. Tr. Keb .jpeg",
  },
  {
    name: "Petrosina P Irmuply Amd.Kep.jpeg",
    program: "Perawat",
    passed: "Lulus UKOM 2025",
    image: "assets/testimonial/Alumni Perawat/Petrosina P Irmuply Amd.Kep.jpeg",
  },
];

/* =============== Utils =============== */
const buildWaLink = (text: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

/* =============== Page =============== */
export default function BimbelPage() {
  const [selectedProgram, setSelectedProgram] = useState<string>(""); // BIDAN | PERAWAT
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const selectedProgramObj = useMemo(
    () => bimbelPrograms.find((p) => p.code === selectedProgram),
    [selectedProgram]
  );
  const selectedPackageObj = useMemo(
    () => packages.find((p) => p.id === selectedPackage),
    [selectedPackage]
  );

  const waMessage = useMemo(() => {
    const prog = selectedProgramObj ? selectedProgramObj.name : "(belum pilih program)";
    const pack = selectedPackageObj ? selectedPackageObj.name : "(belum pilih paket)";
    return `Halo Admin, saya mau daftar Bimbel.\nProgram: ${prog}\nPaket: ${pack}\nMohon info pendaftaran & jadwal 🙏`;
  }, [selectedProgramObj, selectedPackageObj]);

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Hero Section ===== */}
      <section className="bg-gray-50 pt-16 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Bimbel UKOM
                  <span className="block text-blue-600">Bidan & Perawat</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Program bimbingan belajar intensif untuk menyiapkan UKOM secara terarah:
                  materi fokus kompetensi, latihan soal melimpah, dan pendampingan mentor.
                </p>
              </div>
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Kurikulum sesuai blueprint</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Coaching & evaluasi</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Komunitas belajar</span>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={buildWaLink("Halo Admin, saya ingin konsultasi program Bimbel.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Konsultasi via WhatsApp
                </a>
                <a
                  href="#paket"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-5 py-3 rounded-lg font-semibold border border-blue-200 hover:bg-blue-50 transition"
                >
                  Lihat Paket <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right — Alumni (auto-fit images) */}
            <div className="space-y-6">
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Alumni</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {alumni.map((al, idx) => (
                  <div key={idx} className="text-center">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      {/* Avatar auto-fit: berapa pun ukuran gambar akan ngepas (object-cover) */}
                      <div className="relative w-16 h-16 mx-auto mb-3 overflow-hidden rounded-full bg-blue-100">
                        <img
                          src={al.image}
                          alt={al.name}
                          className="absolute inset-0 w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = "none";
                            const fallback = target.nextElementSibling as HTMLElement | null;
                            if (fallback) fallback.style.display = "flex";
                          }}
                        />
                        {/* fallback */}
                        <div className="absolute inset-0 hidden items-center justify-center">
                          <User className="w-8 h-8 text-blue-500" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm leading-tight mb-1">
                        {al.name}
                      </h4>
                      <p className="text-xs text-blue-600 mb-1">{al.program}</p>
                      <p className="text-xs text-gray-500">{al.passed}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Program Selection (Bidan & Perawat) ===== */}
  <section className="py-16">
  <div className="container mx-auto px-6 max-w-6xl">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Pilih Program Bimbel
      </h2>
      <p className="text-xl text-gray-600">
        Sesuaikan dengan profesi Anda
      </p>
    </div>

    {/* Grid Banner */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {bimbelPrograms.map((program) => (
        <div
          key={program.code}
          className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl border-2 ${
            selectedProgram === program.code
              ? "border-blue-500"
              : "border-gray-200 hover:border-gray-300"
          }`}
          onClick={() => setSelectedProgram(program.code)}
        >
          {/* Banner Image */}
          <img
            src={program.image}
            alt={program.name}
            className="w-full h-56 md:h-72 object-cover"
          />

          {/* Status Dipilih */}
            {selectedProgram === program.code && (
            <div className="p-4 bg-blue-50 text-blue-600 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Dipilih</span>
           <a
            href={`https://wa.me/${+6281295012668}?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang ${program.name}. ${program.description}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Hubungi Sekarang
          </a>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</section>




      {/* ===== Detail Bimbel (metode, materi, fasilitas, jadwal) ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detail Program Bimbel</h2>
            <p className="text-xl text-gray-600">
              Metode belajar efektif, materi fokus, dan pendampingan sampai paham
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-bold text-gray-900 mb-2">Metode Belajar</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Live class interaktif + rekaman</li>
                <li>• Video singkat & to-the-point</li>
                <li>• Latihan soal bertahap (mudah–sulit)</li>
                <li>• Coaching & review mingguan</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-bold text-gray-900 mb-2">Materi</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Sesuai blueprint terbaru</li>
                <li>• Bedah kasus klinis & tematik</li>
                <li>• Rangkuman konsep & tips cepat</li>
                <li>• Tryout mirip real (CBT)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-bold text-gray-900 mb-2">Fasilitas</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Dashboard progres & e-rapor</li>
                <li>• Grup diskusi dan tanya-jawab</li>
                <li>• Sertifikat kelulusan internal</li>
                <li>• Akses materi 24/7</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-bold text-gray-900 mb-2">Jadwal</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Reguler: 2–3x/minggu</li>
                <li>• Intensif: 4–5x/minggu</li>
                <li>• Ultimate: fleksibel + privat</li>
                <li>• Konsultasi: by appointment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Paket Bimbel ===== */}
      <section id="paket" className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Paket Bimbel</h2>
              <p className="text-gray-600">
                Pilih paket sesuai kebutuhan belajar kamu
              </p>
            </div>
            <a
              href={buildWaLink("Halo Admin, saya ingin konsultasi memilih paket Bimbel.")}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
            >
              Butuh saran? Chat Admin <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedPackage === pkg.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {/* Banner auto-fit: berapa pun ukuran gambar → ngepas */}
                <div className="relative h-48">
                  <img
                    src={pkg.banner}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
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
                    <p className="text-sm text-gray-600">
                      {selectedProgramObj ? selectedProgramObj.name : "Pilih program di atas"}
                    </p>
                  </div>

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

                  <div className="space-y-1">
                    {pkg.features.slice(0, 4).map((f, i) => (
                      <p key={i} className="text-sm text-gray-700">• {f}</p>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <span className="text-yellow-400 text-sm">4.8</span>
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

                  <a
                    href={buildWaLink(
                      `Halo Admin, saya mau daftar ${selectedProgramObj ? selectedProgramObj.name : "Program"} - Paket ${pkg.name}.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-2 w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Daftar via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Rekomendasi Kami (dinamis berdasar pilihan) ===== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rekomendasi dari Kami</h2>
            <p className="text-xl text-gray-600">
              Pilih paket yang paling pas untuk target kelulusan kamu
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-bold text-gray-900 mb-2">Baru Mulai / Dasar</h3>
              <p className="text-sm text-gray-700">
                Kalau kamu masih pemula atau baru memulai persiapan,
                <span className="font-semibold"> Reguler</span> sudah cukup untuk
                menguasai konsep inti dan latihan soal bertahap.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-bold text-gray-900 mb-2">Menjelang Ujian</h3>
              <p className="text-sm text-gray-700">
                Jika ujian sudah dekat, pilih
                <span className="font-semibold"> Intensif</span> agar ritme belajar lebih sering,
                ada coaching mingguan, dan tryout tematik per bab.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="font-bold text-gray-900 mb-2">Mau Maksimal</h3>
              <p className="text-sm text-gray-700">
                Untuk hasil paling optimal, ambil
                <span className="font-semibold"> Ultimate</span> — dapat bedah kasus komprehensif,
                simulasi CBT mirip real, dan pendampingan mentor privat.
              </p>
            </div>
          </div>

          {selectedProgramObj && (
            <div className="mt-8 bg-white rounded-lg p-6 border">
              <h4 className="font-bold text-gray-900 mb-2">
                Rekomendasi khusus: {selectedProgramObj.name}
              </h4>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                {selectedProgramObj.code === "BIDAN" ? (
                  <>
                    <li>Prioritaskan topik: asuhan persalinan, nifas, neonatus, dan KB.</li>
                    <li>Perbanyak drilling soal skenario gawat darurat maternal-neonatal.</li>
                    <li>Jadwalkan review rekaman kelas untuk penguatan konsep.</li>
                  </>
                ) : (
                  <>
                    <li>Fokus pada medikal-bedah, gawat darurat, anak, dan komunitas.</li>
                    <li>Latih interpretasi soal kasus (vital sign, lab, prioritas asuhan).</li>
                    <li>Gunakan tryout CBT untuk manajemen waktu dan strategi eliminasi.</li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 max-w-4xl text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Siap Bergabung di Bimbel?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Konsultasi gratis untuk bantu pilih program & paket terbaik
          </p>
          <a
            href={buildWaLink(waMessage)}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-3 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ${
              !selectedProgram || !selectedPackage
                ? "bg-white/90 text-blue-600 hover:bg-white"
                : "bg-white text-blue-600 hover:bg-gray-100"
            }`}
          >
            <WhatsAppIcon className="w-6 h-6" />
            { !selectedProgram || !selectedPackage
              ? "Chat Admin via WhatsApp"
              : "Daftar Sekarang via WhatsApp"
            }
          </a>
        </div>
      </section>

      {/* ===== Floating WhatsApp ===== */}
      <a
        href={buildWaLink("Halo Admin, saya ingin bertanya tentang Bimbel.")}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full p-4 transition"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
