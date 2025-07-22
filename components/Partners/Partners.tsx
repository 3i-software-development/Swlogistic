// components/PartnerCarousel.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const partners = [
  { src: '/images/partner1.png', alt: 'Partner 1' },
  { src: '/images/partner2.png', alt: 'Partner 2' },
  { src: '/images/partner3.png', alt: 'Partner 3' },
  { src: '/images/partner4.png', alt: 'Partner 4' },
  { src: '/images/partner5.png', alt: 'Partner 5' },
];

export default function PartnerCarousel() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-4xl font-semibold text-blue-600 mb-2">PARTNERS</h2>
      <div className="w-24 h-1 bg-gray-300 mx-auto mb-8" />

      <div className="max-w-6xl mx-auto px-4">
      <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <SwiperSlide key={i}>
              <img
                src={`/images/partner${i}.png`}
                alt={`Partner ${i}`}
                className="w-full h-32 object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
