"use client";

import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Button } from "./ui/button";

const faqs = [
  {
    question: "How does mind-mind work?",
    answer:
      "mind-mind connects you with licensed therapists through our secure platform. After signing up, you'll be matched with a therapist based on your needs and preferences. You can then schedule video sessions, message your therapist, and access various mental health resources.",
  },
  {
    question: "Is mind-mind right for me?",
    answer:
      "mind-mind is designed to help individuals dealing with a wide range of mental health issues, including anxiety, depression, stress, relationship problems, and more. However, it's not a substitute for emergency services. If you're in crisis, please call your local emergency number immediately.",
  },
  {
    question: "How much does mind-mind cost?",
    answer:
      "We offer various subscription plans to suit different needs and budgets. Plans start at $60 per week for unlimited messaging and one video session. You can cancel your subscription at any time.",
  },
  {
    question: "Are the therapists on mind-mind qualified?",
    answer:
      "Yes, all therapists on mind-mind are licensed, trained, experienced, and accredited psychologists (PhD / PsyD), licensed marriage and family therapists (LMFT), clinical social workers (LCSW), or professional counselors (LPC). They are certified by their respective state's board.",
  },
  {
    question: "Is mind-mind confidential?",
    answer:
      "Absolutely. Your privacy is of utmost importance to us. All communications between you and your therapist are protected by strict federal and state laws. We use bank-grade encryption to ensure your information remains secure and confidential.",
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (value: string) => {
    setOpenItems((prevItems) =>
      prevItems.includes(value)
        ? prevItems.filter((item) => item !== value)
        : [...prevItems, value]
    );
  };

  // Initialize AOS on mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation will happen only once
    });
  }, []);

  return (
    <section className="min-h-screen relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase dark:text-slate-50">
            FAQ
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl leading-tight font-extrabold tracking-tight text-gray-900 dark:text-white">
            Frequently Asked Questions
          </p>
        </div>
        <div className="w-full">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="accordion-trigger"
                onClick={() => toggleItem(faq.question)}
              >
                <h3>{faq.question}</h3>
              </div>
              {openItems.includes(faq.question) && (
                <div className="accordion-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <Button className="bg-cyan-800 rounded-tl-2xl mx-auto rounded-br-2xl text-white px-6 py-3 shadow-lg hover:bg-cyan-700 transition-all">
          Get Started
        </Button>
      </div>
    </section>
  );
}
