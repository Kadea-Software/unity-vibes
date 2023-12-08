"use client";

import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

export const Provider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute={"class"} enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};
