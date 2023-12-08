import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/app/provider";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Unity Vibes",
  description: "By Kadea",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fontSans.variable)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
