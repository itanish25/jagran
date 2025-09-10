"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function MediaCarousel({ items }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{ width: "100%", height: '100vh' }}
    >
      {items.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={`slide-${index}`}
              style={{ width: "500px", height: "500px", borderRadius: "8px" }}
            />
          ) : (
            <video controls style={{ width: "100%", borderRadius: "8px" }}>
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
