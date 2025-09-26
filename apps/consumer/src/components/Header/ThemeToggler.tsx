"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const DARK_MEDIA_QUERY = "(prefers-color-scheme: dark)";

const readStoredTheme = (): Theme | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "dark" || stored === "light" ? stored : null;
  } catch {
    return null;
  }
};

const resolvePreferredTheme = (): Theme => {
  const stored = readStoredTheme();
  if (stored) {
    return stored;
  }

  if (typeof window !== "undefined" && window.matchMedia(DARK_MEDIA_QUERY).matches) {
    return "dark";
  }

  return "light";
};

const applyThemeClass = (theme: Theme) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle("dark", theme === "dark");
};

const ThemeToggler = () => {
  const [theme, setTheme] = useState<Theme>(() => (typeof window === "undefined" ? "light" : resolvePreferredTheme()));

  useEffect(() => {
    setTheme((current) => {
      const preferred = resolvePreferredTheme();
      return current === preferred ? current : preferred;
    });
  }, []);

  useEffect(() => {
    applyThemeClass(theme);

    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, theme);
      } catch {
        // ignore storage failures
      }
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(DARK_MEDIA_QUERY);
    const listener = (event: MediaQueryListEvent) => {
      if (readStoredTheme()) {
        return;
      }

      setTheme(event.matches ? "dark" : "light");
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <button
      aria-label="theme toggler"
      onClick={toggleTheme}
      className="flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14"
    >
      <svg
        viewBox="0 0 23 23"
        className="w-5 h-5 stroke-current dark:hidden md:h-6 md:w-6"
        fill="none"
      >
        <path
          d="M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden w-5 h-5 dark:block md:h-6 md:w-6"
      >
        <mask id="path-1-inside-1_977:1934" fill="white">
          <path d="M12.5 18.75C15.9518 18.75 18.75 15.9518 18.75 12.5C18.75 9.04822 15.9518 6.25 12.5 6.25C9.04822 6.25 6.25 9.04822 6.25 12.5C6.25 15.9518 9.04822 18.75 12.5 18.75Z" />
        </mask>
        <path
          d="M12.5 4.75C16.7802 4.75 20.25 8.21979 20.25 12.5H23.25C23.25 6.55544 18.4446 1.75 12.5 1.75V4.75ZM20.25 12.5C20.25 16.7802 16.7802 20.25 12.5 20.25V23.25C18.4446 23.25 23.25 18.4446 23.25 12.5H20.25ZM12.5 20.25C8.21979 20.25 4.75 16.7802 4.75 12.5H1.75C1.75 18.4446 6.55544 23.25 12.5 23.25V20.25ZM4.75 12.5C4.75 8.21979 8.21979 4.75 12.5 4.75V1.75C6.55544 1.75 1.75 6.55544 1.75 12.5H4.75Z"
          fill="white"
          mask="url(#path-1-inside-1_977:1934)"
        />
        <path
          d="M12.5 2V5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 20V23"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.92969 4.92969L7.04969 7.04969"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.9492 17.9492L20.0692 20.0692"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 12.5H5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12.5H23"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.92969 20.0692L7.04969 17.9492"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.9492 7.04969L20.0692 4.92969"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ThemeToggler;
