import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "@/components/BootstrapClient";
import "@/app/customTheme.css";

const libre = Libre_Franklin({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peter So",
  description: "Peter So's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="custom">
      <body className={libre.className}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
