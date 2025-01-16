
import ServiceComparison from "@/components/ServiceComparison";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/faq";

import Hero from "@/components/hero";
import {
  
  ArrowDown,
  
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-cyan-100/20 relative -z-0">
   
      <Hero />
      <Stats />
      <section className="min-h-screen relative bg-secondary/10">
        <div className="flex flex-wrap max-w-6xl mx-auto gap-12 py-16 ">
          {/* Image Section */}
          <div className="relative h-80 w-96 rounded-3xl overflow-hidden  ">
            <Image
              src={"/images/register.svg"}
              layout="fill"
              alt="Signup Image"
              className="object-contain rounded-3xl"
            />
          </div>
          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Sign Up
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300">
              Create your account and complete a brief questionnaire about your
              needs and preferences.
            </p>
            <article className="text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              numquam nulla eveniet eaque voluptatum iure tempore magnam nam
              iste repellat.
            </article>
          </div>
        </div>
        <div className="grid place-content-center">
          <ArrowDown color="black" size={70} />
        </div>
        <div className="flex flex-wrap max-w-6xl mx-auto gap-12 py-16">
          {/* Image Section */}
          <div className="relative h-80 w-96  rounded-3xl  overflow-hidden ">
            <Image
              src={"/images/match.svg"}
              layout="fill"
              alt="Signup Image"
              className="object-contain rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Get Matched
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our system will match you with a licensed therapist best suited to
              your needs.
            </p>
            <article className="text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              numquam nulla eveniet eaque voluptatum iure tempore magnam nam
              iste repellat.
            </article>
          </div>
        </div>
        <div className="grid place-content-center">
          <ArrowDown color="black" size={70} />
        </div>
        <div className="flex flex-wrap max-w-6xl mx-auto gap-12 py-16">
          {/* Image Section */}
          <div className="relative h-80 w-96  rounded-3xl  overflow-hidden ">
            <Image
              src={"/images/chat.svg"}
              layout="fill"
              alt="Signup Image"
              className="object-contain rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Begin Therapy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Start your therapy journey with secure video sessions and
              messaging.
            </p>
            <article className="text-base text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              numquam nulla eveniet eaque voluptatum iure tempore magnam nam
              iste repellat.
            </article>
          </div>
        </div>
        <div className="grid place-content-center">
          <ArrowDown color="black" size={70} />
        </div>
        <div className="flex flex-wrap max-w-6xl mx-auto gap-12 py-16">
          {/* Image Section */}
          <div className="relative h-80 w-96  rounded-3xl  overflow-hidden ">
            <Image
              src={"/images/progress.svg"}
              layout="fill"
              alt="Signup Image"
              className="object-contain rounded-full"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Track Progress
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Start your therapy journey with secure video sessions and
              messaging.
            </p>
            <article className="text-base text-gray-500 dark:text-gray-400">
              Monitor your progress and adjust therapy plan as needed.
            </article>
          </div>
        </div>
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 490"
          className="absolute bottom-0 left-0 w-full -z-10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-3" x1={0} x2={0} y1={1} y2={0}>
              <stop stopColor="rgba(243, 142.09, 62, 1)" offset="0%" />
              <stop stopColor="rgba(255, 179, 11, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 0.22 }}
            fill="url(#sw-gradient-3)"
            d="M0,196L120,236.8C240,278,480,359,720,326.7C960,294,1200,147,1440,98C1680,49,1920,98,2160,163.3C2400,229,2640,310,2880,326.7C3120,343,3360,294,3600,228.7C3840,163,4080,82,4320,81.7C4560,82,4800,163,5040,163.3C5280,163,5520,82,5760,81.7C6000,82,6240,163,6480,212.3C6720,261,6960,278,7200,253.2C7440,229,7680,163,7920,147C8160,131,8400,163,8640,212.3C8880,261,9120,327,9360,343C9600,359,9840,327,10080,269.5C10320,212,10560,131,10800,114.3C11040,98,11280,147,11520,147C11760,147,12000,98,12240,73.5C12480,49,12720,49,12960,106.2C13200,163,13440,278,13680,343C13920,408,14160,425,14400,416.5C14640,408,14880,376,15120,343C15360,310,15600,278,15840,285.8C16080,294,16320,343,16560,367.5C16800,392,17040,392,17160,392L17280,392L17280,490L17160,490C17040,490,16800,490,16560,490C16320,490,16080,490,15840,490C15600,490,15360,490,15120,490C14880,490,14640,490,14400,490C14160,490,13920,490,13680,490C13440,490,13200,490,12960,490C12720,490,12480,490,12240,490C12000,490,11760,490,11520,490C11280,490,11040,490,10800,490C10560,490,10320,490,10080,490C9840,490,9600,490,9360,490C9120,490,8880,490,8640,490C8400,490,8160,490,7920,490C7680,490,7440,490,7200,490C6960,490,6720,490,6480,490C6240,490,6000,490,5760,490C5520,490,5280,490,5040,490C4800,490,4560,490,4320,490C4080,490,3840,490,3600,490C3360,490,3120,490,2880,490C2640,490,2400,490,2160,490C1920,490,1680,490,1440,490C1200,490,960,490,720,490C480,490,240,490,120,490L0,490Z"
          />
        </svg>
      </section> 
      <ServiceComparison />
      <FAQ /> 
    </main>
  );
}
