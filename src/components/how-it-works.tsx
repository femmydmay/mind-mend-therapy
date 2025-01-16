import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { User, Users, MessageSquare, BarChart } from "lucide-react"; // Importing icons from lucide-react

const steps = [
  {
    title: "Sign Up",
    description:
      "Create your account and complete a brief questionnaire about needs preferences.",
    icon: <User size={24} />,
  },
  {
    title: "Get Matched",
    description:
      "Our system will match you with a licensed therapist best suited to your needs.",
    icon: <Users size={24} />,
  },
  {
    title: "Begin Therapy",
    description:
      "Start your therapy journey with secure video sessions and messaging.",
    icon: <MessageSquare size={24} />,
  },
  {
    title: "Track Progress",
    description: "Monitor your progress and adjust therapy plan as needed.",
    icon: <BarChart size={24} />,
  },
];

export function HowItWorks() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase dark:text-slate-50">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Your Journey to Better Mental Health
          </p>
        </div>
        <div className="mt-10">
          <div className="flex flex-col space-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex items-center space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white text-2xl dark:bg-slate-50">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
