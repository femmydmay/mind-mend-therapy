"use client";
import ServiceComparison from "@/components/ServiceComparison";
// import { Stats } from "@/components/Stats";
import { AboutMind } from "@/components/about";
import { FAQ } from "@/components/faq";
// import { Features } from "@/components/features";
import { HeroSlider } from "@/components/hero";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-cyan-100/20 relative -z-0">
      <HeroSlider />
      <AboutMind />
      {/* <Stats /> */}
      <section className="min-h-screen relative bg-secondary/10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12 py-16">
          {/* Image Section */}
          <div className="relative h-80 w-full md:w-96 rounded-3xl overflow-hidden">
            <Image
              src="/images/register.svg"
              layout="fill"
              alt="Signup Image"
              className="object-contain rounded-3xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Sign Up
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Create your account and complete a brief questionnaire about your
              needs and preferences.
            </p>
            <article className="text-base text-gray-500 dark:text-gray-400">
              Getting started is simple and secure. Begin by signing up on our
              platform with just a few clicks. Provide your name, email address,
              and create a password to establish your account. We prioritize
              your privacy and ensure that all your information remains
              confidential.
            </article>
          </div>
        </div>
        <div className="grid place-content-center py-6">
          <ArrowDown color="black" size={70} />
        </div>
        {["match", "chat", "progress"].map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12 py-16"
          >
            {/* Image Section */}
            <div className="relative h-80 w-full md:w-96 rounded-3xl overflow-hidden">
              <Image
                src={`/images/${item}.svg`}
                layout="fill"
                alt="Image"
                className="object-contain rounded-full"
              />
            </div>
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                {item === "match"
                  ? "Get Matched"
                  : item === "chat"
                  ? "Begin Therapy"
                  : "Track Progress"}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {item === "match"
                  ? "Our system will match you with a licensed therapist best suited to your needs."
                  : item === "chat"
                  ? "Start your therapy journey with secure video sessions and messaging."
                  : "Monitor your progress and adjust therapy plan as needed."}
              </p>
              <article className="text-base text-gray-500 dark:text-gray-400">
                {item === "match"
                  ? "Our advanced system is designed to ensure you receive the best care possible. Once you have completed your profile and shared your needs, our platform uses this information to match you with a licensed therapist who is best suited to help."
                  : item === "chat"
                  ? "Embark on your path to improved well-being with the convenience and privacy of secure video sessions and messaging. Our platform ensures that connecting with your therapist is not only effective but also tailored to fit into your busy lifestyle."
                  : "Monitor your progress and adjust therapy plan as needed."}
              </article>
            </div>
          </div>
        ))}
        <div className="grid place-content-center py-6">
          <ArrowDown color="black" size={70} />
        </div>
      </section>
      <FAQ />
      <ServiceComparison />
    </main>
  );
}
