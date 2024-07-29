import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GridDataProvider } from '@/contexts/gridData';
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liberato Mota | Altar.io",
  description: "Random letters generator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-950`} >
        <Header />
        <GridDataProvider>
          {children}
        </GridDataProvider>
      </body>
    </html>
  );
}
