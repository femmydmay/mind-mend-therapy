
"use client";

import React from "react";
import Image from "next/image";

export function PicGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-12 max-w-7xl mx-auto">
      {/* Text Section */}
      <div className="flex items-center justify-center">
        <div
          className="
            w-full
            rounded-2xl
            border
            border-blue-500/60
            bg-white
            p-6
            sm:p-8
            lg:p-10
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
          {/* Heading */}
          <div className="mb-6">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Mind-Mend
            </span>

            <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Our Purpose is to{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Save Lives
              </span>
            </h1>

            <div className="mt-4 h-1 w-16 rounded-full bg-blue-600" />
          </div>

          {/* Description */}
          <div className="space-y-5 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            <p>
              <strong className="font-semibold text-blue-600 dark:text-blue-400">
                Immediate Response:
              </strong>{" "}
              Quick intervention therapy helps identify warning signs of mental
              health crises, such as suicidal thoughts, self-harm tendencies,
              or severe anxiety, before they worsen.
            </p>

            <p>
              <strong className="font-semibold text-blue-600 dark:text-blue-400">
                Active Listening and Validation:
              </strong>{" "}
              Providing a safe space to express thoughts and emotions can
              reduce feelings of isolation and despair, which are important
              factors in preventing self-harm or suicide.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <button
              type="button"
              className="
                w-full
                sm:w-auto
                rounded-lg
                bg-blue-600
                px-6
                py-3
                text-sm
                font-semibold
                tracking-wide
                text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-blue-700
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2
                dark:focus:ring-offset-slate-950
              "
            >
              LET US HELP YOU — SEEK THERAPY TODAY
            </button>
          </div>
        </div>
      </div>

      {/* Pictures Section */}
      <div className="grid grid-cols-2 gap-4">
        <div className="group overflow-hidden rounded-xl border border-blue-100 shadow-md dark:border-blue-900/50">
          <Image
            src="/pic1.jpg"
            alt="Mental health support"
            width={600}
            height={500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="group overflow-hidden rounded-xl border border-blue-100 shadow-md dark:border-blue-900/50">
          <Image
            src="/pic2.jpg"
            alt="Mental health therapy"
            width={600}
            height={500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="group overflow-hidden rounded-xl border border-blue-100 shadow-md dark:border-blue-900/50">
          <Image
            src="/pic3.jpg"
            alt="Mental health care"
            width={600}
            height={500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="group overflow-hidden rounded-xl border border-blue-100 shadow-md dark:border-blue-900/50">
          <Image
            src="/pic5.jpg"
            alt="Mental health wellness"
            width={600}
            height={500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}




