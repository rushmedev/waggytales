"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/home-1.webp", alt: "Happy pet family at Waggy Tales" },
  { src: "/home-2.webp", alt: "Pets enjoying premium care at Waggy Tales" },
  { src: "/home-3.webp", alt: "Playful dogs in a warm home-stay setting" },
  { src: "/home-4.webp", alt: "Trusted pet care moments at Waggy Tales" },
];

export default function HeroSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="wt-hero-slideshow" aria-label="Hero gallery">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`wt-hero-slide ${index === activeIndex ? "is-active" : ""}`}
          aria-hidden={index === activeIndex ? undefined : true}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            width={1600}
            height={1142}
            className="wt-img-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <div className="wt-hero-dots" role="tablist" aria-label="Choose hero image">
        {slides.map((slide, index) => (
          <button
            key={`${slide.src}-dot`}
            type="button"
            className={`wt-hero-dot ${index === activeIndex ? "is-active" : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show image ${index + 1}`}
            aria-selected={index === activeIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}
