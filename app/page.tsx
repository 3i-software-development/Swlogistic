"use client";

import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import OurServices from "@/components/Services/OurService";
import { motion } from "framer-motion";
import NewsHome from "@/components/News/NewsHome";
import Partners from "@/components/Partners/Partners";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow">
        {/* Video Section */}
        <section className="w-full">
          <div className="relative w-full">
            <video
              className="w-full h-auto object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            >
              <source src="/videos/introvid.mp4" type="video/mp4" />
              <source src="/videos/introvid.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <img
              src="/images/gioithieuhome.jpg"
              alt="Intro banner"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-10 px-4 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 m-14">
            {/* Hình ảnh bên trái */}
            <div className="w-full md:w-1/2 flex justify-center m-14">
              <img
                src="/images/parislogistics.jpg"
                alt="Global Logistics"
                className="w-full max-w-7xl object-contain"
              />
            </div>

            {/* Nội dung bên phải */}
            <div className="w-full md:w-1/2 text-justify">
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
                PARIS LOGISTICS
              </h2>
              <p className="text-black leading-relaxed text-xl leading-loose tracking-wide">
                Offering logistics services to help customers focus on their core business is the mission of a logistics service provider.
                To achieve that mission, we started our own trucking fleet and expanded to warehousing service.
                With the ongoing investments in both human and financial capital, we are progressively meeting our customers’ diverse logistics demands...
                <br/>
                Offering logistics services to help customers focus on their core business is the mission of a logistics service provider.
                To achieve that mission, we started our own trucking fleet and expanded to warehousing service.
                With the ongoing investments in both human and financial capital, we are progressively meeting our customers’ diverse logistics demands...
                
              </p>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <OurServices />
        <NewsHome />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}
