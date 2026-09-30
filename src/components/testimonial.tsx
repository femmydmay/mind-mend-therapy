"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
// import ShineBorder from "./ui/shine-border";

const testimonials = [
  {
    quote:
      "mind-mind has been a game-changer for my mental health journey. The therapists are compassionate, and the platform is so easy to use. I've made significant progress in just a few months!",
    author: "Sarah K.",
    role: "Software Engineer",
    avatar: "/images/profile.jpg",
  },
  {
    quote:
      "As someone with a busy schedule, mind-mind's flexibility has been invaluable. I can connect with my therapist anytime, anywhere. It's truly revolutionized how I approach my mental well-being.",
    author: "Michael R.",
    role: "Marketing Executive",
    avatar: "/images/profile2.jpg",
  },
  {
    quote:
      "The quality of therapists on mind-mind is outstanding. I've found a perfect match for my needs, and the progress I've made has positively impacted every aspect of my life.",
    author: "Emily T.",
    role: "Teacher",
    avatar: "/images/profile3.jpg",
  },
];

export function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 10000); // Auto-advance every 10 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className=" py-20 relative ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-white sm:text-4xl mb-12">
          What Our Users Say
        </h2>
        <div className="relative">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-br-[60px]"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/10 rounded-tl-[60px]"></div>
              <div className="relative z-10">
                <Quote className="w-12 h-12 text-primary mb-6 mx-auto" />

                {/* Add motion here for fading and sliding */}
                <motion.blockquote
                  key={currentTestimonial} // Trigger animation on state change
                  className="text-xl text-gray-900 text-center mb-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonials[currentTestimonial].quote}
                </motion.blockquote>

                <div className="flex items-center justify-center">
                  <Avatar className="h-14 w-14 border-2 border-primary">
                    <AvatarImage
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].author}
                    />
                    <AvatarFallback>
                      {testimonials[currentTestimonial].author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4 text-left">
                    <p className="text-lg font-semibold text-gray-900">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md hover:bg-gray-100"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentTestimonial ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
