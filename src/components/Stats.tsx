import React from "react";

export const Stats = () => {
  return (
    <section className="h-screen grid place-content-center bg-gray-50 dark:bg-slate-900 px-6 sm:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          <p className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white text-center sm:text-left">
            Revolutionizing Mental Health Support, Anytime, Anywhere.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid divide-y-2 divide-gray-300 dark:divide-slate-600 text-center md:text-left">
          <div className="py-6">
            <p className="text-3xl font-bold text-primary dark:text-cyan-400">
              500,000+
            </p>
            <span className="text-lg text-gray-600 dark:text-gray-400">
              Therapy sessions delivered globally
            </span>
          </div>
          <div className="py-6">
            <p className="text-3xl font-bold text-primary dark:text-cyan-400">
              20,000+
            </p>
            <span className="text-lg text-gray-600 dark:text-gray-400">
              Certified professionals available for support
            </span>
          </div>
          <div className="py-6">
            <p className="text-3xl font-bold text-primary dark:text-cyan-400">
              1 Million+
            </p>
            <span className="text-lg text-gray-600 dark:text-gray-400">
              Lives transformed through therapy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
