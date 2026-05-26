"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

const contactHref =
  "mailto:sales@fleetdecks.in?subject=FleetDecks%20sales%20demo&body=Hi%20FleetDecks%2C%20I%27d%20like%20to%20see%20how%20this%20can%20work%20for%20my%20car%20rental%20business.";

const painPoints = [
  "Bookings start on WhatsApp, continue on calls, and vanish into spreadsheets.",
  "Drivers, cars, payments, deposits, and customer IDs all need separate follow-ups.",
  "Small teams lose hours every day just keeping everyone updated.",
];

const features = [
  {
    title: "AI booking assistant",
    body: "Capture leads from WhatsApp, app, and web, answer availability questions, and hand hot enquiries to your team.",
  },
  {
    title: "One fleet command desk",
    body: "Track booking status, vehicle readiness, handovers, returns, deposits, and upcoming trips from a single dashboard.",
  },
  {
    title: "White-label by design",
    body: "Launch with your brand, your customer touchpoints, and workflows that feel owned by your rental business.",
  },
  {
    title: "Built for Indian operators",
    body: "Designed around lean teams, high WhatsApp volume, document checks, security deposits, and city-to-city demand.",
  },
];

const steps = [
  "Connect your fleet, booking rules, and customer channels.",
  "Let FleetDecks qualify enquiries and organize trips in one place.",
  "Run daily operations with fewer calls, cleaner handoffs, and faster closures.",
];

const testimonials = [
  "Placeholder testimonial from a self-drive rental operator.",
  "Placeholder testimonial from an airport pickup partner.",
  "Placeholder testimonial from a city fleet manager.",
];

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

function ThemeToggle() {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = window.localStorage.getItem("fleetdecks-theme") as Theme | null;
    const initialTheme = storedTheme ?? (mediaQuery.matches ? "dark" : "light");

    applyTheme(initialTheme);

    const handleSystemChange = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem("fleetdecks-theme")) {
        return;
      }

      const nextTheme = event.matches ? "dark" : "light";
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemChange);

    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => {
        const nextTheme: Theme = document.documentElement.classList.contains("dark") ? "light" : "dark";

        window.localStorage.setItem("fleetdecks-theme", nextTheme);
        applyTheme(nextTheme);
      }}
      className="inline-grid h-10 w-10 place-items-center rounded-full border border-emerald-950/10 bg-white/75 text-emerald-950 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-500/50 dark:border-white/15 dark:bg-white/10 dark:text-emerald-100"
    >
      <svg
        className="h-5 w-5 dark:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
      <svg
        className="hidden h-5 w-5 dark:block"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    </button>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7f5ef] text-[#121611] transition-colors duration-500 dark:bg-[#07110d] dark:text-[#f5f2e8]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-18rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-emerald-300/35 blur-3xl dark:bg-emerald-400/15" />
        <div className="absolute bottom-0 right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-lime-200/35 blur-3xl dark:bg-lime-300/10" />
      </div>

      <header className="sticky top-0 z-30 border-b border-emerald-950/10 bg-[#f7f5ef]/80 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#07110d]/75">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Primary navigation">
          <a href="#top" className="flex items-center gap-3" aria-label="FleetDecks home">
            <img
              src="/fleetdecks-icon.svg"
              alt=""
              width="40"
              height="40"
              className="h-10 w-10 rounded-2xl shadow-[0_16px_40px_rgba(16,185,129,0.35)]"
            />
            <span className="text-lg font-black tracking-tight">FleetDecks</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-bold text-emerald-950/70 dark:text-emerald-50/70 md:flex">
            <a className="transition hover:text-emerald-600 dark:hover:text-emerald-300" href="#features">
              Features
            </a>
            <a className="transition hover:text-emerald-600 dark:hover:text-emerald-300" href="#how-it-works">
              How it works
            </a>
            <a className="transition hover:text-emerald-600 dark:hover:text-emerald-300" href="#proof">
              Customers
            </a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href={contactHref}
              className="hidden rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-emerald-950 shadow-[0_18px_45px_rgba(16,185,129,0.32)] transition hover:-translate-y-0.5 hover:bg-emerald-400 sm:inline-flex"
            >
              Contact Sales
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-8 inline-flex rounded-full border border-emerald-950/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-emerald-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-emerald-200">
              White-label SaaS for Indian car rentals
            </div>
            <h1 className="font-serif text-5xl font-black leading-[0.93] tracking-[-0.06em] text-[#121611] dark:text-[#f7f5ef] sm:text-6xl lg:text-7xl">
              One dashboard to run bookings, fleet, and WhatsApp demand.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-emerald-950/70 dark:text-emerald-50/70 sm:text-xl">
              FleetDecks helps small and mid-sized car rental operators replace scattered chats, calls, and sheets with a branded operating system built for daily rental chaos.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={contactHref}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-4 text-base font-black text-emerald-950 shadow-[0_26px_60px_rgba(16,185,129,0.35)] transition hover:-translate-y-1 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
              >
                Contact Sales
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-emerald-950/15 bg-white/65 px-7 py-4 text-base font-black text-emerald-950 transition hover:-translate-y-1 hover:border-emerald-500/60 dark:border-white/15 dark:bg-white/10 dark:text-emerald-50"
              >
                See the platform
              </a>
            </div>
            <dl className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center sm:text-left">
              {[
                ["3", "lead channels"],
                ["1", "operations desk"],
                ["0", "enterprise bloat"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl border border-emerald-950/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/10">
                  <dt className="font-serif text-3xl font-black text-emerald-600 dark:text-emerald-300">{value}</dt>
                  <dd className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-950/55 dark:text-emerald-50/55">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rotate-3 rounded-[3rem] bg-emerald-400/25 blur-2xl dark:bg-emerald-300/10" />
            <div className="relative overflow-hidden rounded-[2.4rem] border border-emerald-950/10 bg-[#0b1c15] p-4 text-emerald-50 shadow-[0_40px_90px_rgba(4,30,22,0.35)]">
              <div className="mb-4 flex items-center justify-between rounded-[1.7rem] bg-white/8 px-4 py-3">
                <span className="text-sm font-black">FleetDecks Live Desk</span>
                <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-black text-emerald-950">12 active trips</span>
              </div>
              <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  {[
                    ["WhatsApp lead", "Airport pickup, Innova, tomorrow 7 AM"],
                    ["Return due", "KA-05-MX-2210 inspection pending"],
                    ["Deposit", "UPI received, receipt auto-linked"],
                  ].map(([title, body]) => (
                    <div key={title} className="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-emerald-50/85">{body}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl bg-[#f7f5ef] p-5 text-[#121611]">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Today&apos;s flow</p>
                  <div className="mt-5 space-y-5">
                    {[
                      ["Lead qualified", "AI assistant checked city, dates, and car type."],
                      ["Car assigned", "Swift Dzire moved from available to blocked."],
                      ["Handover ready", "Driver, documents, and deposit checklist synced."],
                    ].map(([title, body], index) => (
                      <div key={title} className="flex gap-4">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500 font-black text-emerald-950">{index + 1}</span>
                        <div>
                          <h3 className="font-black">{title}</h3>
                          <p className="text-sm leading-6 text-emerald-950/65">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-emerald-950/10 bg-white/45 py-16 dark:border-white/10 dark:bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">The daily problem</p>
              <h2 className="mt-4 font-serif text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Rental operations should not depend on memory.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {painPoints.map((point) => (
                <article key={point} className="rounded-[2rem] border border-emerald-950/10 bg-[#f7f5ef] p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
                  <div className="mb-8 h-2 w-16 rounded-full bg-emerald-500" />
                  <p className="text-base font-bold leading-7 text-emerald-950/75 dark:text-emerald-50/75">{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">The FleetDecks answer</p>
            <h2 className="mt-4 font-serif text-4xl font-black tracking-[-0.05em] sm:text-5xl">
              Everything your team needs, without enterprise theater.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => (
              <article key={feature.title} className="group rounded-[2.2rem] border border-emerald-950/10 bg-white/60 p-7 transition hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/10">
                <span className="mb-8 inline-grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500 font-black text-emerald-950 shadow-[0_18px_45px_rgba(16,185,129,0.25)]">
                  0{index + 1}
                </span>
                <h3 className="text-2xl font-black tracking-[-0.03em]">{feature.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-emerald-950/68 dark:text-emerald-50/70">{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="bg-[#10251b] py-20 text-emerald-50 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-300">How it works</p>
                <h2 className="mt-4 font-serif text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                  Three steps from messy intake to controlled dispatch.
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {steps.map((step, index) => (
                  <article key={step} className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-6">
                    <span className="font-serif text-5xl font-black text-emerald-300">{index + 1}</span>
                    <p className="mt-7 text-base font-bold leading-7 text-emerald-50/80">{step}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">Trusted by operators</p>
              <h2 className="mt-4 font-serif text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                Ready for operator stories and partner logos.
              </h2>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Logo", "Logo", "Logo", "Logo"].map((logo, index) => (
                  <div key={`${logo}-${index}`} className="grid h-24 place-items-center rounded-3xl border border-dashed border-emerald-950/20 bg-white/50 text-sm font-black uppercase tracking-[0.25em] text-emerald-950/40 dark:border-white/20 dark:bg-white/10 dark:text-emerald-50/45">
                    {logo}
                  </div>
                ))}
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <blockquote key={testimonial} className="rounded-[2rem] border border-emerald-950/10 bg-white/65 p-6 dark:border-white/10 dark:bg-white/10">
                    <p className="text-base font-bold leading-7 text-emerald-950/72 dark:text-emerald-50/75">&ldquo;{testimonial}&rdquo;</p>
                    <footer className="mt-5 text-xs font-black uppercase tracking-[0.24em] text-emerald-600 dark:text-emerald-300">Coming soon</footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
          <div className="overflow-hidden rounded-[2.8rem] bg-emerald-500 px-6 py-12 text-emerald-950 shadow-[0_30px_90px_rgba(16,185,129,0.32)] sm:px-10 lg:px-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.28em]">Built for fast-moving rental desks</p>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                  Give every booking a clean path from enquiry to return.
                </h2>
              </div>
              <a
                href={contactHref}
                className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-8 py-4 text-base font-black text-emerald-50 transition hover:-translate-y-1 hover:bg-[#10251b] focus:outline-none focus:ring-4 focus:ring-emerald-950/30"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-emerald-950/10 px-5 py-8 text-sm text-emerald-950/60 dark:border-white/10 dark:text-emerald-50/60 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold">FleetDecks. White-label car rental operations.</p>
          <div className="flex gap-5 font-bold">
            <a className="hover:text-emerald-600 dark:hover:text-emerald-300" href={contactHref}>
              Contact
            </a>
            <a className="hover:text-emerald-600 dark:hover:text-emerald-300" href="#features">
              Features
            </a>
            <a className="hover:text-emerald-600 dark:hover:text-emerald-300" href="#how-it-works">
              Process
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
