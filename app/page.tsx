import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import WhatAppFloating from './components/FloatingWhatsApp/FloatingWhatsApp';;
import { BookPrev } from './components/PrevBuku';
import { BimbelPrev } from './components/PrevBimbel';

export default function Home() {
  return (
    <main>
      <Banner />
      {/* <Companies /> */}
      <BimbelPrev />
      <Courses />
      <BookPrev />
      <Mentor />
      <Testimonials />
      {/* <Newsletter /> */}
      <WhatAppFloating />
    </main>
  )
}
