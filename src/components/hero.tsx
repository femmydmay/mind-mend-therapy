"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Wave from "./wave";
// import PulsatingButton from "./ui/pulsating-button";
import { Button } from "./ui/button";

const slides = [
  {
    title: "Your Mental Health Matters",
    subtitle: "Connect with licensed therapists and improve your well-being",
    cta: "Start Your Journey",
  },
  {
    title: "Personalized Care",
    subtitle: "Get matched with the right therapist for your unique needs",
    cta: "Find Your Match",
  },
  {
    title: "Anytime, Anywhere",
    subtitle: "Access therapy sessions from the comfort of your home",
    cta: "Explore Options",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
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
    <div className="relative bg-primary h-[80vh]">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden lg:px-8 flex items-center justify-center">
        <div className="relative w-full">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl">
                {slides[currentSlide].subtitle}
              </p>
              <Button className="bg-cyan-800 rounded-tl-2xl rounded-br-2xl   text-white px-6 py-3  shadow-lg hover:bg-cyan-700 transition-all">
                {slides[currentSlide].cta}
              </Button>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-cyan-700 rounded-full p-2 shadow-lg transition-all"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-cyan-700 rounded-full p-2 shadow-lg transition-all"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      <Wave />
    </div>
  );
};

export default Hero;
