"use client";

import { useEffect } from "react";
import { Globe, CreditCard, UserCheck, Lock } from "lucide-react";
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
          {/* Modern Blue Outline Box */}
          <div
            className="
              mx-auto
              max-w-5xl
              rounded-2xl
              border
              border-blue-500/60
              bg-white
              px-5
              py-8
              shadow-[0_0_25px_rgba(59,130,246,0.12)]
              transition-all
              duration-300
              hover:border-blue-500
              hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]
              dark:border-blue-400/50
              dark:bg-slate-950/40
              dark:hover:border-blue-400
            "
          >
            
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
  {/* Left Column */}
  <div className="flex flex-col justify-center text-center lg:text-left">
    <h2 className="text-base font-semibold uppercase tracking-wide text-primary dark:text-slate-50">
      Welcome to Mind-Mend
    </h2>

    <p className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
      Empowering Your Mental Health Journey
    </p>

    <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
      At Mind-Mend, we believe that everyone deserves access to quality mental
      health care. Our platform connects you with licensed therapists and
      provides tools to support your well-being.
    </p>
  </div>

  {/* Right Column */}
  <div className="flex flex-col justify-center text-left">
    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
      Mind-Mend provides a comprehensive range of mental health services
      tailored to meet your unique needs. Our team of experienced counselors
      specializes in delivering compassionate care through individual therapy,
      family therapy, couples therapy, and group therapy. These services
      address a wide array of mental health concerns, including anxiety,
      depression, stress management, relationship challenges, and more.
    </p>

    <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
      <strong className="font-semibold text-primary dark:text-slate-50">
        Individual Therapy:
      </strong>{" "}
      Our personalized therapy sessions focus on your specific challenges,
      fostering personal growth and emotional healing. Through one-on-one
      support and expert guidance, we help you navigate complexities of life
      with clarity and resilience.
    </p>
  </div>
</div>
</div>



          <h2 className="text-primary mt-8 text-2xl text-center font-semibold tracking-wide uppercase dark:text-slate-50">
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
                icon: Globe,
              },
              {
                title: "Affordable Care, Insurance accepted ",
                description:
                  "We offer flexible pricing options and accept insurance to make mental health care accessible to everyone.",
                icon: CreditCard,
              },
              {
                title: "Group and family Therapy with Quick Matching",
                description:
                  "Our intelligent matching system connects you with the right therapist for your needs in no time.",
                icon: UserCheck,
              },
              {
                title: "Couples Therapy Secure & Confidential",
                description:
                  "Your privacy is our priority. All sessions and data are encrypted and confidential.",
                icon: Lock,
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
