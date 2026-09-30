"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Clock, Lock } from "lucide-react";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const features = [
  {
    name: "Expert Therapists",
    description:
      "Connect with licensed and experienced mental health professionals.",
    icon: Heart,
  },
  {
    name: "Group Sessions",
    description: "Join supportive group therapy sessions on various topics.",
    icon: Users,
  },
  {
    name: "Flexible Scheduling",
    description: "Book sessions at times that work best for you.",
    icon: Clock,
  },
  {
    name: "Secure & Confidential",
    description: "Your privacy and data security are our top priorities.",
    icon: Lock,
  },
];

export function Features() {
  return (
    <div className="bg-primary-color/10 py-12 dark:bg-slate-900 rounded-b-[-50rem] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center" data-aos="fade-up">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            A better way to improve mental health
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-700 dark:text-gray-300 lg:mx-auto">
            Discover the tools and support you need to enhance your mental
            well-being.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{
                  borderRadius: ["16px", "50px", "16px", "50px"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative"
              >
                <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors dark:border-primary/10 dark:hover:border-primary/30 shadow-lg">
                  <CardHeader>
                    {/* Use the icon as a React component */}
                    <feature.icon className="h-8 w-8 text-primary dark:text-accent" />
                    <CardTitle className="mt-4 text-slate-900 dark:text-white">
                      {feature.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* SVG Wave Animation at the bottom */}
      <div className="relative overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          fill="currentColor"
        >
          <motion.path
            animate={{ d: "M0,320L1440,128L1440,320Z" }}
            transition={{
              repeat: Infinity,
              duration: 5,
              repeatType: "reverse",
            }}
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
