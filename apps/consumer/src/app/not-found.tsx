"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-[#FCFCFC] px-6 py-16 text-center dark:bg-black">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
      <h1 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">Page not found</h1>
      <p className="max-w-md text-base leading-relaxed text-body-color dark:text-body-color-dark">
        The page you are looking for doesn&apos;t exist or may have been moved. Double-check the URL or return to the homepage.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-primary"
      >
        Back to homepage
      </Link>
    </main>
  );
}
