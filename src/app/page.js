"use client";

import Banner from "@/app/components/Banner/Banner";
import Navbar from "@/app/components/Navbar/Navbar";
import Section1 from "@/app/components/Sections/Section1/Section1";
import Section2 from "@/app/components/Sections/Section2/Section2";
import Section3 from "@/app/components/Sections/Section3/Section3";
import Section4 from "@/app/components/Sections/Section4/Section4";
import Section5 from "@/app/components/Sections/Section5/Section5";
import Footer from "@/app/components/Sections/Footer/Footer";

export default function Home() {

  return (
    <main>
      <Banner />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </main>
  );
}
