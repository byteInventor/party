"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FCFCFC] px-6 py-24 text-center dark:bg-black">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">404</p>
      <h1 className="mt-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
        Sorry, the page can’t be found
      </h1>
      <p className="mt-4 max-w-xl text-base text-body-color dark:text-body-color-dark">
        The page you were looking for appears to have been moved, deleted or does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white shadow-signUp transition hover:bg-white hover:text-primary"
      >
        Back to Homepage
      </Link>
    </main>
  );
}
