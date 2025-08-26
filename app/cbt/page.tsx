"use client";
import { useState, useEffect } from "react";
import { bidanQuestions } from "../data_cbt/bidan";
import { perawatQuestions } from "../data_cbt/perawat";

export default function CBTPage() {
  const [role, setRole] = useState<"bidan" | "perawat" | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});
  const [flags, setFlags] = useState<{ [key: number]: boolean }>({});
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60); // 1 menit = 60 detik

  // Timer useEffect
  useEffect(() => {
    if (finished || !role) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, finished, role]);

  const qlist = role === "bidan" ? bidanQuestions : perawatQuestions;
  const q = qlist[current];

  function handleAnswer(optIndex: number) {
    setAnswers({ ...answers, [q.id]: optIndex });
  }

  function toggleFlag() {
    setFlags({ ...flags, [q.id]: !flags[q.id] });
  }

  function calcScore() {
    let score = 0;
    qlist.forEach((q) => {
      if (answers[q.id] === q.answer) score++;
    });
    return score;
  }
// Tampilan awal pilih profesi (improved)
if (!role) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-50 to-green-50">
      {/* Judul */}
      <h1 className="text-4xl font-extrabold mb-2 text-gray-800 text-center">
        Mini CBT Ukom
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Pilih profesi untuk memulai tes sesuai keahlian Anda
      </p>

      {/* Pilihan profesi */}
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => setRole("bidan")}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 hover:scale-105 transform transition-all duration-200"
        >
          {/* Bisa tambahkan ikon kalau mau */}
          Bidan
        </button>
        <button
          onClick={() => setRole("perawat")}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 hover:scale-105 transform transition-all duration-200"
        >
          Perawat
        </button>
      </div>

      {/* Footer / catatan */}
      <p className="mt-12 text-sm text-gray-500 text-center max-w-xs">
        Pastikan memilih profesi yang sesuai untuk hasil tes yang akurat.
      </p>
    </div>
  );
}


  // Tampilan hasil
if (finished) {
  const score = calcScore();
  const passed = score >= 5;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Hasil Ujian</h1>
      <p className="text-xl">Skor: {score} / {qlist.length}</p>

      {passed ? (
        <div className="mt-4 p-4 bg-green-200 text-green-800 rounded text-center">
          🎉 Selamat! Kamu berhasil!
        </div>
      ) : (
     <div className="mt-6 p-6 bg-red-50 border-l-4 border-red-500 rounded shadow flex flex-col items-center text-center">
  <svg
    className="w-12 h-12 text-red-500 mb-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
  </svg>
  <h3 className="text-xl font-bold text-red-700 mb-2">Ups! Perlu Latihan Lagi</h3>
  <p className="text-red-600 mb-4">
    Sepertinya kamu perlu latihan lebih untuk mempersiapkan Ukom. 
    Jangan khawatir, mentor kami siap membantu!
  </p>
  <a
    href="https://wa.me/6281234567890?text=Halo%20Mentor,%20saya%20ingin%20mendaftar%20bimbel"
    target="_blank"
    className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors font-semibold"
  >
    Hubungi Mentor via WhatsApp
  </a>
</div>

      )}

      <button
        onClick={() => {
          setRole(null);
          setCurrent(0);
          setAnswers({});
          setFlags({});
          setFinished(false);
          setTimeLeft(60); // reset timer
        }}
        className="mt-6 px-4 py-2 bg-gray-500 text-white rounded"
      >
        Ulangi
      </button>
    </div>
  );


  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      {/* Timer */}
      <div className="mb-4 text-right font-semibold text-red-600">
        Waktu tersisa: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60).toString().padStart(2, "0")}
      </div>

      {/* Navigasi nomor soal */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {qlist.map((qq, i) => {
          const answered = answers[qq.id] !== undefined;
          const flagged = flags[qq.id];
          let bg = "bg-gray-200";
          if (flagged) bg = "bg-yellow-400";
          else if (answered) bg = "bg-green-400";
          return (
            <button
              key={qq.id}
              className={`w-10 h-10 rounded ${bg} flex items-center justify-center`}
              onClick={() => setCurrent(i)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* Soal */}
      <h2 className="text-lg font-semibold mb-2">
        {q.id}. {q.question}
      </h2>
      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <label key={i} className="block p-2 border rounded cursor-pointer">
            <input
              type="radio"
              name={`q-${q.id}`}
              value={i}
              checked={answers[q.id] === i}
              onChange={() => handleAnswer(i)}
              className="mr-2"
            />
            {opt}
          </label>
        ))}
      </div>

      {/* Kontrol */}
      <div className="flex justify-between mt-4">
        <button
          onClick={toggleFlag}
          className="px-3 py-1 bg-yellow-500 text-white rounded"
        >
          {flags[q.id] ? "Batalkan Ragu" : "Tandai Ragu"}
        </button>
        {current < qlist.length - 1 ? (
          <button
            onClick={() => setCurrent(current + 1)}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Soal Berikutnya
          </button>
        ) : (
          <button
            onClick={() => setFinished(true)}
            className="px-3 py-1 bg-green-600 text-white rounded"
          >
            Selesai
          </button>
        )}
      </div>
    </div>
  );
}