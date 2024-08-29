import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "clerk-auth",
  description: "A Next.js template with Clerk authentication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen antialiased bg-background text-foreground",
            font.className
          )}
        >
          <Toaster richColors theme="light" />
          <Navbar />
          {children}
        </body>
      </html>
    </Providers>
  );
}
