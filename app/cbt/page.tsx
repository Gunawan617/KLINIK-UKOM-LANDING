"use client";
import { useState, useEffect } from "react";
import { bidanQuestions } from "../data_cbt/bidan";
import { perawatQuestions } from "../data_cbt/perawat";

// Tipe soal
type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
};

export default function CBTPage() {
  const [role, setRole] = useState<"bidan" | "perawat" | null>(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number | null }>({});
  const [flags, setFlags] = useState<{ [key: number]: boolean }>({});
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [reviewMode, setReviewMode] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  // Timer
  useEffect(() => {
    if (finished || !role) return;
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, finished, role]);

  const qlist: Question[] = role === "bidan" ? bidanQuestions : perawatQuestions;
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

  // Pilih profesi (awal)
  if (!role) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-50 to-green-50">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-800 text-center">Mini CBT Ukom</h1>
        <p className="text-gray-600 mb-8 text-center">Pilih profesi untuk memulai tes sesuai keahlian Anda</p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button
            onClick={() => setRole("bidan")}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transform hover:scale-105"
          >
            Bidan
          </button>
          <button
            onClick={() => setRole("perawat")}
            className="px-6 py-3 bg-green-500 text-white rounded-xl shadow-md hover:bg-green-600 transform hover:scale-105"
          >
            Perawat
          </button>
        </div>
      </div>
    );
  }

  // Mode Review Analisa
  if (finished && reviewMode) {
    const qq = qlist[reviewIndex];
    return (
      <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Analisa Soal</h1>

        <div className="p-4 border rounded-lg shadow bg-white">
          <h2 className="font-semibold mb-2">
            {reviewIndex + 1}. {qq.question}
          </h2>
          <p className="mb-1">
            Jawaban kamu:{" "}
            {answers[qq.id] !== undefined ? qq.options[answers[qq.id]!] : "Tidak dijawab"}
          </p>
          <p className="text-green-700 mb-2">
            Jawaban benar: {qq.options[qq.answer]}
          </p>
          {qq.explanation && (
            <div className="p-3 mt-2 bg-gray-50 border rounded whitespace-pre-line">
              {qq.explanation}
            </div>
          )}
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={() => setReviewIndex((prev) => Math.max(0, prev - 1))}
            disabled={reviewIndex === 0}
            className="px-3 py-1 bg-gray-400 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          {reviewIndex < qlist.length - 1 ? (
            <button
              onClick={() => setReviewIndex((prev) => Math.min(qlist.length - 1, prev + 1))}
              className="px-3 py-1 bg-blue-500 text-white rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => {
                setReviewMode(false);
                setRole(null);
                setCurrent(0);
                setAnswers({});
                setFlags({});
                setFinished(false);
                setTimeLeft(60);
              }}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              Selesai Review
            </button>
          )}
        </div>
      </div>
    );
  }

  // Mode Hasil
  if (finished) {
    const score = calcScore();
    const passed = score >= 5;
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-4">Hasil Ujian</h1>
        <p className="text-xl mb-6">
          Skor: {score} / {qlist.length}
        </p>
        {passed ? (
          <div className="mt-4 p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded shadow text-center">
            <h3 className="text-xl font-bold text-emerald-700 mb-2">🎉 Selamat! Kamu Lulus!</h3>
            <p className="text-emerald-600">Pertahankan prestasimu dan siap menghadapi ujian sebenarnya!</p>
              <a
              href="https://wa.me/+6281295012668?text=Halo%2C%20saya%20baru%20selesai%20CBT%20dan%20ingin%20persiapan%20UKOM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
            >
              Hubungi Mentor via WhatsApp
            </a>
          </div>
        ) : (
          <div className="mt-4 p-6 bg-rose-50 border-l-4 border-rose-500 rounded shadow text-center">
            <h3 className="text-xl font-bold text-rose-700 mb-2">Belum Lulus</h3>
            <p className="text-rose-600">Terus berlatih agar lebih siap menghadapi Ukom!</p>
             <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20baru%20selesai%20CBT%20dan%20ingin%20bimbingan%20lebih%20lanjut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold px-4 py-2 rounded-lg shadow"
          >
            Minta Bimbingan via WhatsApp
          </a>
          </div>
        )}
        <button
          onClick={() => {
            setReviewMode(true);
            setReviewIndex(0);
          }}
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Lihat Analisa Soal
        </button>
      </div>
    );
  }

  // Mode Soal CBT
  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="mb-4 text-right font-semibold text-red-600">
        Waktu tersisa: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, "0")}
      </div>
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
      <div className="flex justify-between mt-4">
        <button onClick={toggleFlag} className="px-3 py-1 bg-yellow-500 text-white rounded">
          {flags[q.id] ? "Batalkan Ragu" : "Tandai Ragu"}
        </button>
        {current < qlist.length - 1 ? (
          <button onClick={() => setCurrent(current + 1)} className="px-3 py-1 bg-blue-500 text-white rounded">
            Soal Berikutnya
          </button>
        ) : (
          <button onClick={() => setFinished(true)} className="px-3 py-1 bg-green-600 text-white rounded">
            Selesai
          </button>
        )}
      </div>
    </div>
  );
}