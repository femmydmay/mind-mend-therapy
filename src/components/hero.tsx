"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BorderBeam } from "./ui/border-beam";
import PulsatingButton from "./ui/pulsating-button";

const slides = [
  {
    image: "/pic1.jpg",
    title: "Your Mental Health Matters",
    subtitle: "Connect with licensed therapists and improve your well-being",
    cta: "Start Your Journey",
  },
  {
    image: "/pic2.jpg",
    title: "Personalized Care",
    subtitle: "Get matched with the right therapist for your unique needs",
    cta: "Find Your Match",
  },
  {
    image: "/pic3.jpg",
    title: "Anytime, Anywhere",
    subtitle: "Access therapy sessions from the comfort of your home",
    cta: "Explore Options",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    nextSlide();
  };

  const handlePrev = () => {
    setDirection(-1);
    prevSlide();
  };

  return (
    <div className="relative bg-gradient-to-b from-[#0A9EE5] to-[#ffffff] overflow-hidden">
      <BorderBeam />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative h-[400px] overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                width={1200}
                height={600}
                className="object-cover w-full h-full absolute top-0 left-0 rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
              <div className="relative z-10 text-white">
                <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-4">
                  {slides[currentSlide].title}
                </h1>
                <p className="mt-3 text-base sm:text-lg md:mt-5 md:text-xl">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="mt-5">
                  <PulsatingButton className="bg-[#0A9EE5] text-white hover:bg-[#087cc9] transition-all">
                    {slides[currentSlide].cta}
                  </PulsatingButton>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-[#0A9EE5]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 text-[#0A9EE5] hover:bg-white transition-all"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 text-[#0A9EE5] hover:bg-white transition-all"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
