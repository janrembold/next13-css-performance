import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSS Performance Playground",
  description:
    "Try out different CSS techniques and see how they affect performance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StyledComponentsRegistry>
  );
}
