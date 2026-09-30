"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Logo as LogoV2 } from "@/components/logo";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle contact form submission logic here
    console.log("'Contact form submitted with:'", { name, email });
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="flex justify-center">
            <LogoV2 width={150} height={75} />
          </div>

          <span className="mt-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Mind-Mend
          </span>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Contact Us
          </h1>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            We&apos;re here to help. Get in touch with the Mind-Mend team.
          </p>
        </div>

        {/* Contact Card */}
        <Card
          className="
            overflow-hidden
            rounded-2xl
            border
            border-blue-500/50
            bg-white
            shadow-[0_0_30px_rgba(59,130,246,0.10)]
            transition-all
            duration-300
            hover:border-blue-500
            hover:shadow-[0_0_40px_rgba(59,130,246,0.16)]
            dark:border-blue-400/40
            dark:bg-slate-900/80
            dark:hover:border-blue-400
          "
        >
          <CardHeader className="border-b border-blue-100 px-6 py-7 sm:px-8 dark:border-blue-900/50">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Get Started
            </span>

            <CardTitle className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              Get in Touch with Mind-Mend
            </CardTitle>

            <CardDescription className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Fill out the form below and we will get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 py-8 sm:px-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Name
                </label>

                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="
                    h-12
                    rounded-lg
                    border-slate-200
                    bg-slate-50
                    px-4
                    text-slate-900
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                  "
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Email
                </label>

                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="
                    h-12
                    rounded-lg
                    border-slate-200
                    bg-slate-50
                    px-4
                    text-slate-900
                    transition-all
                    duration-200
                    placeholder:text-slate-400
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-500/20
                    dark:border-slate-700
                    dark:bg-slate-950
                    dark:text-white
                    dark:placeholder:text-slate-500
                  "
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-slate-700 dark:text-slate-200"
                >
                  Message
                </label>

                {/* <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                /> */}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="
                  h-12
                  w-full
                  rounded-lg
                  bg-blue-600
                  text-sm
                  font-semibold
                  tracking-wide
                  text-white
                  shadow-md
                  transition-all
                  duration-300
                  hover:bg-blue-700
                  hover:shadow-lg
                  focus:ring-2
                  focus:ring-blue-500
                  focus:ring-offset-2
                  dark:focus:ring-offset-slate-900
                "
              >
                Send Message
              </Button>
            </form>
          </CardContent>

          <CardFooter className="border-t border-blue-100 bg-slate-50/70 px-6 py-5 sm:px-8 dark:border-blue-900/50 dark:bg-slate-950/30">
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              We typically respond within 1-2 business days.
            </p>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
