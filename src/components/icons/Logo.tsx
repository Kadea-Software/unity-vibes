import React from "react";

export const Logo = (props: React.HTMLAttributes<SVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      data-name="Calque 1"
      viewBox="0 0 566.93 566.93"
    >
      <defs>
        <linearGradient
          id="a"
          x1="270.81"
          x2="270.81"
          y1="555.96"
          y2="12.81"
          data-name="Dégradé sans nom 7"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff5e3a"></stop>
          <stop offset="0.5" stopColor="#fd4956"></stop>
          <stop offset="1" stopColor="#fc2878"></stop>
        </linearGradient>
        <linearGradient
          id="b"
          x1="289.95"
          x2="289.95"
          y1="555.96"
          y2="12.81"
          data-name="Dégradé sans nom 7"
          xlinkHref="#a"
        ></linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M58.66 306.53c0 25.31 7.6 44.87 22.82 58.68 15.21 13.81 36.88 20.71 65.01 20.71s49.79-6.9 65.01-20.71c15.21-13.81 22.82-33.36 22.82-58.68V166.55H309l68.65 148.8c3.06 6.39 6.13 13.23 9.2 20.52 3.07 7.28 6 14.26 8.82 20.9 2.81 6.65 5.11 12.27 6.9 16.88h3.07c1.78-4.35 4.03-9.78 6.71-16.3 2.69-6.52 5.62-13.42 8.83-20.71 3.19-7.29 6.32-14.25 9.4-20.9l77.48-176.23c-48.12-76.14-133.02-126.7-229.74-126.7-107.77 0-200.87 62.77-244.75 153.74h25.09v139.98z"
      ></path>
      <path
        fill="url(#b)"
        d="M435.56 430.02h-65.97l-76.98-161.24v40.44c0 25.57-5.31 47.75-15.91 66.54-10.62 18.79-26.66 33.31-48.14 43.53-21.48 10.23-48.84 15.34-82.07 15.34s-60.28-5.11-81.88-15.34c-13.78-6.52-25.3-14.8-34.61-24.81 42.24 95.14 137.52 161.49 248.32 161.49 149.99 0 271.58-121.59 271.58-271.58 0-25.3-3.47-49.79-9.95-73.03l-104.4 218.67z"
      ></path>
    </svg>
  );
};
