"use client";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import React, { forwardRef } from "react";

const buttonVariances = cva(["p-4 inline-block rounded font-bold"], {
  variants: {
    intent: {
      primary:
        "bg-blue-500 hover:bg-blue-700 focus:border focus:border-black active:bg-blue-700 disabled:bg-blue-300 text-white",
      secondary: "border-blue-700 text-blue-700",
      disabled: "border-gray-500 text-gray-500 cursor-not-allowed",
      danger: "border-red-500 text-white",
      success: "border-green-500 text-white",
    },
    size: {
      small: "text-xs",
      medium: "text-base",
      large: "text-xl",
    },
  },
  compoundVariants: [
    {
      intent: ["primary", "secondary", "disabled", "danger", "success"],
      size: "medium",
    },
  ],
  defaultVariants: {
    intent: "primary",
  },
});

type Variances = VariantProps<typeof buttonVariances>;
type ButtonBase = React.ButtonHTMLAttributes<HTMLButtonElement>;
type Ref = HTMLButtonElement;

export interface ButtonProps extends ButtonBase, Variances {
  loading?: boolean;
  as?: any;
  leftIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(function Button(
  { intent, size, children, loading, as, leftIcon, ...props },
  ref
) {
  const renderContent = (children: React.ReactNode) => {
    if (loading) {
      return (
        <div className={"flex gap-2"}>
          <svg
            className={"fill-white animate-spin w-6 h-6"}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M18.364 5.63604L16.9497 7.05025C15.683 5.7835 13.933 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12H21C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604Z"></path>
          </svg>
          Loading...
        </div>
      );
    }

    if (leftIcon) {
      return (
        <>
          <div className={"flex gap-2"}>
            <svg
              className={"fill-white w-6 h-6"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.0001 19.1643L18.2072 12.9572L16.793 11.543L12.0001 16.3359L7.20718 11.543L5.79297 12.9572L12.0001 19.1643ZM12.0001 13.5144L18.2072 7.30728L16.793 5.89307L12.0001 10.686L7.20718 5.89307L5.79297 7.30728L12.0001 13.5144Z"></path>
            </svg>
            {children}
          </div>
        </>
      );
    }

    return children;
  };

  const Component = as || "button";

  return (
    <Component
      ref={ref}
      className={twMerge(buttonVariances({ intent, size }))}
      {...props}
    >
      {renderContent(children)}
    </Component>
  );
});

Button.displayName = "Button";
