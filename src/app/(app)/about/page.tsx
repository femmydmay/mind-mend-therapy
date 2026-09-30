import { Logo } from "@/components/logo";
import { PicGrid } from "@/components/picgrid";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <div className="flex justify-center">
            <Logo width={150} height={75} />
          </div>

          <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            About Mind-Mend
          </span>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Empowering Your Mental Health Journey
          </h1>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-blue-600" />

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Accessible, compassionate, and professional mental health support
            designed around your individual needs.
          </p>
        </div>

        {/* Mission & Company Information */}
        <section
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
          {/* Mission Header */}
          <div className="border-b border-blue-100 px-6 py-7 sm:px-8 dark:border-blue-900/50">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Our Mission
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              Making Mental Health Care More Accessible
            </h2>

            <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Empowering mental health through accessible online therapy.
            </p>
          </div>

          {/* Company Information */}
          <dl className="divide-y divide-blue-100 dark:divide-blue-900/50">
            {/* Founded */}
            <div className="grid gap-2 px-6 py-5 sm:grid-cols-3 sm:gap-6 sm:px-8">
              <dt className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Founded
              </dt>

              <dd className="text-base font-medium text-slate-800 sm:col-span-2 dark:text-slate-200">
                2023
              </dd>
            </div>

            {/* Headquarters */}
            <div className="grid gap-2 bg-slate-50/70 px-6 py-5 sm:grid-cols-3 sm:gap-6 sm:px-8 dark:bg-slate-950/30">
              <dt className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Headquarters
              </dt>

              <dd className="text-base font-medium text-slate-800 sm:col-span-2 dark:text-slate-200">
                New Jersey
              </dd>
            </div>

            {/* Therapists */}
            <div className="grid gap-2 px-6 py-5 sm:grid-cols-3 sm:gap-6 sm:px-8">
              <dt className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Therapists
              </dt>

              <dd className="text-base font-medium text-slate-800 sm:col-span-2 dark:text-slate-200">
                50+ licensed professionals
              </dd>
            </div>

            {/* Specialties */}
            <div className="grid gap-2 bg-slate-50/70 px-6 py-5 sm:grid-cols-3 sm:gap-6 sm:px-8 dark:bg-slate-950/30">
              <dt className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                Specialties
              </dt>

              <dd className="text-base font-medium leading-relaxed text-slate-800 sm:col-span-2 dark:text-slate-200">
                Anxiety, Depression, Relationships, Stress, Trauma
              </dd>
            </div>
          </dl>
        </section>

        {/* Our Story */}
        <section
          className="
            mt-8
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
          <div className="border-b border-blue-100 px-6 py-7 sm:px-8 dark:border-blue-900/50">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Our Story
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
              A Simple Idea With a Powerful Purpose
            </h2>
          </div>

          <div className="px-6 py-7 sm:px-8">
            <p className="text-base leading-8 text-slate-600 dark:text-slate-300">
              mind-mend was founded with a simple yet powerful idea: to make
              quality mental health care accessible to everyone. Our team of
              dedicated professionals and innovative technology work together to
              break down barriers to mental health support. We believe that
              everyone deserves access to tools and resources that can improve
              their mental well-being, regardless of their location or
              circumstances.
            </p>
          </div>
        </section>
      </div>

      {/* Purpose / Image Section */}
      <div className="mx-auto mt-4 max-w-7xl">
        <PicGrid />
      </div>
    </main>
  );
}
