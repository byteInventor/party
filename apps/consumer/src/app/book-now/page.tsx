"use client";

import { useState } from "react";

const BookNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    schoolFamily: "",
    numKids: "",
    dietary: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Booking submitted!");
  };

  return (
    <section
      id="book-now"
      className="overflow-hidden py-26 md:py-20 lg:py-48"
    >
      {/* Top Right SVG */}
      <div className="pointer-events-none absolute top-0 right-0 z-[-1] opacity-50 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25_217)" />
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25_217)"
          />
          <circle
            cx="76.9997"
            cy="288"
            r="34"
            fill="url(#paint2_radial_25_217)"
          />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25_217)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25_217)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25_217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25_217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25_217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25_217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#00a63d" stopOpacity="0" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25_217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#00a63d" stopOpacity="0" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25_217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25_217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25_217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25_217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Bottom Left SVG */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-[-1] opacity-50 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25_218)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#paint1_linear_25_218)"
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25_218)"
          />
          <path
            d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
            stroke="url(#paint3_linear_25_218)"
          />
          <circle
            opacity="0.8"
            cx="214.505"
            cy="60.5054"
            r="49.7205"
            transform="rotate(-13.421 214.505 60.5054)"
            stroke="url(#paint4_linear_25_218)"
          />
          <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25_218)" />
          <defs>
            <linearGradient
              id="paint0_linear_25_218"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" stopOpacity="0" />
              <stop offset="1" stopColor="#00a63d" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25_218"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" stopOpacity="0" />
              <stop offset="1" stopColor="#00a63d" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25_218"
              x1="125.389"
              y1="69.2405"
              x2="125.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" stopOpacity="0" />
              <stop offset="1" stopColor="#00a63d" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_25_218"
              x1="93.8507"
              y1="67.2674"
              x2="89.9278"
              y2="210.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" stopOpacity="0" />
              <stop offset="1" stopColor="#00a63d" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25_218"
              x1="214.505"
              y1="10.2849"
              x2="212.684"
              y2="99.5816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint5_radial_25_218"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Top Left Decorative SVG */}
      <div className="pointer-events-none absolute top-0 left-0 z-[-1] opacity-50 lg:opacity-100">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 150C30 200 70 250 150 250C230 250 270 200 270 150C270 100 230 50 150 50C70 50 30 100 30 150Z"
            stroke="url(#paint0_linear_25_219)"
            strokeWidth="10"
            strokeOpacity="0.5"
          />
          <circle
            cx="150"
            cy="150"
            r="80"
            fill="url(#paint1_radial_25_219)"
            fillOpacity="0.3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25_219"
              x1="30"
              y1="150"
              x2="270"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25_219"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(150 150) rotate(90) scale(80)"
            >
              <stop stopColor="#00a63d" stopOpacity="0.5" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Bottom Right Decorative SVG */}
      <div className="pointer-events-none absolute right-0 bottom-0 z-[-1] opacity-50 lg:opacity-100">
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 140C40 190 80 240 140 240C200 240 240 190 240 140C240 90 200 40 140 40C80 40 40 90 40 140Z"
            stroke="url(#paint0_linear_25_220)"
            strokeWidth="8"
            strokeOpacity="0.6"
          />
          <circle
            cx="140"
            cy="140"
            r="60"
            fill="url(#paint1_radial_25_220)"
            fillOpacity="0.4"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25_220"
              x1="40"
              y1="140"
              x2="240"
              y2="140"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00a63d" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25_220"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(140 140) rotate(90) scale(60)"
            >
              <stop stopColor="#00a63d" stopOpacity="0.6" />
              <stop offset="1" stopColor="#00a63d" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* Main Content */}
      <div className="container flex items-center justify-center min-h-[60vh] py-8 md:py-0">
          <div className="w-full px-2 lg:w-12/12 xl:w-12/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h1 className="mb-8 text-center text-3xl leading-tight font-bold text-black dark:text-white">
                Secure Your Spot
              </h1>
              <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-md space-y-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-sm border border-gray-300 bg-gray-100 px-6 py-3 text-base text-gray-600 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-blue-500 dark:focus:shadow-none"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-sm border border-gray-300 bg-gray-100 px-6 py-3 text-base text-gray-600 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-blue-500 dark:focus:shadow-none"
                />
                <input
                  type="number"
                  name="numKids"
                  value={formData.numKids}
                  onChange={handleChange}
                  placeholder="#Kids"
                  required
                  className="w-full rounded-sm border border-gray-300 bg-gray-100 px-6 py-3 text-base text-gray-600 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-blue-500 dark:focus:shadow-none"
                />
                <div className="relative">
                  <select
                    name="schoolFamily"
                    value={formData.schoolFamily}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none rounded-sm border border-gray-300 bg-gray-100 px-6 py-3 pr-10 text-base text-gray-600 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-blue-500 dark:focus:shadow-none"
                  >
                    <option
                      value=""
                      disabled
                      hidden
                      style={{ color: "#9ca3af", opacity: 0.6 }}
                    >
                      Select for School/Family
                    </option>
                    <option value="School">School</option>
                    <option value="Family">Family</option>
                  </select>
                  <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                      <path
                        d="M7 10l5 5 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  placeholder="Dietary Needs"
                  className="w-full rounded-sm border border-gray-300 bg-gray-100 px-6 py-3 text-base text-gray-600 outline-none focus:border-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:focus:border-blue-500 dark:focus:shadow-none"
                />
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center rounded-sm bg-green-600 px-9 py-4 text-base font-medium text-white shadow-lg duration-300 hover:bg-green-800 dark:shadow-lg"
                >
                  Book Now
                </button>
                <div className="mt-8 flex w-full max-w-md items-center gap-3 rounded-md border border-yellow-200 bg-yellow-50 px-6 py-4 shadow-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl dark:border-yellow-700 dark:bg-yellow-900/30">
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M12 16v-4m0-4h.01"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-left text-base font-medium text-yellow-800 dark:text-yellow-100">
                    FAQ: What to Wear? Comfortable clothes & hats. Safety First!
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
    </section>
  );
};

export default BookNow;
