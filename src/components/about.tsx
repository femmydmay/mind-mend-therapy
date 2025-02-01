"use client";

import { useEffect } from "react";
import { Globe, CreditCard, UserCheck, Lock } from "lucide-react"; // Using better icons from Lucide for visual clarity
import "aos/dist/aos.css";
import AOS from "aos";

export function AboutMind() {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center" data-aos="fade-up">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase dark:text-slate-50">
            Welcome to Mind-Mend
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Empowering Your Mental Health Journey
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto text-justify">
            At Mind-Mend, we believe that everyone deserves access to quality
            mental health care. Our platform connects you with licensed
            therapists and provides tools to support your well-being.
            <br />
            Mind-Mend provides a comprehensive range of mental health services
            tailored to meet your unique needs. Our team of experienced
            counselors specializes in delivering compassionate care through
            individual therapy, family therapy, couples therapy, and group
            therapy. These services address a wide array of mental health
            concerns, including anxiety, depression, stress management,
            relationship challenges, and more.
            <br />
            <strong>Individual Therapy:</strong> Our personalized therapy
            sessions focus on your specific challenges, fostering personal
            growth and emotional healing. Through one-on-one support and expert
            guidance, we help you navigate complexities of life with clarity and
            resilience.
          </p>

          <h2 className=" text-primary mt-4 text-2xl font-semibold tracking-wide uppercase dark:text-slate-50">
            OUR SERVICES
          </h2>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                title: "Individual Therapy Accessible Anywhere",
                description:
                  "Access therapy sessions from the comfort of your home or anywhere you feel comfortable.",
                icon: Globe, // Using Heroicon for better visual
              },
              {
                title: "Affordable Care, Insurance accepted ",
                description:
                  "We offer flexible pricing options and accept insurance to make mental health care accessible to everyone.",
                icon: CreditCard, // Using Heroicon for better visual
              },
              {
                title: "Group and family Therapy with Quick Matching",
                description:
                  "Our intelligent matching system connects you with the right therapist for your needs in no time.",
                icon: UserCheck, // Using Heroicon for better visual
              },
              {
                title: "Couples Therapy Secure & Confidential",
                description:
                  "Your privacy is our priority. All sessions and data are encrypted and confidential.",
                icon: Lock, // Using Heroicon for better visual
              },
            ].map((feature, index) => (
              <div
                className="relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white dark:bg-slate-50 dark:text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
