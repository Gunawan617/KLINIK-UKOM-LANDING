"use client";
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "Apa saja program Bimbel yang tersedia?",
    answer: "Kami menyediakan program Bimbel Bidan dan Perawat yang fokus pada kompetensi UKOM masing-masing.",
  },
  {
    question: "Berapa lama durasi program Bimbel?",
    answer: "Durasi tiap program bervariasi, biasanya antara 3 hingga 6 bulan, tergantung modul yang diambil.",
  },
  {
    question: "Apakah ada mentor berpengalaman?",
    answer: "Ya, setiap peserta dibimbing oleh mentor berpengalaman di bidang kesehatan dan UKOM.",
  },
  {
    question: "Bagaimana cara mendaftar Bimbel?",
    answer: "Pendaftaran dapat dilakukan melalui website kami atau klik tombol 'Hubungi Sekarang' untuk konsultasi via WhatsApp.",
  },
  {
    question: "Apakah materi tersedia secara online?",
    answer: "Sebagian materi tersedia online melalui platform kami, sedangkan praktik langsung dilakukan di kelas offline.",
  },
];

const BimbelFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Pertanyaan Seputar Bimbel UKOM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                  className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="text-gray-800">{item.question}</span>
                  <span
                    className={`text-blue-500 text-xl font-bold transform transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-${index}`}
                  className={`px-4 text-gray-600 border-t border-gray-200 overflow-hidden transition-[max-height] duration-300 ease-in-out`}
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    paddingTop: isOpen ? "0.75rem" : "0",
                    paddingBottom: isOpen ? "0.75rem" : "0",
                  }}
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BimbelFaq;
