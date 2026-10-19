import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: `${site.name} · ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "pt_BR",
    type: "website",
  },
};

const RootLayout = ({ children }: LayoutProps<"/">) => (
  <html lang="pt-BR" className={cn("h-full antialiased font-sans", inter.variable, cormorant.variable)}>
    <body className="min-h-full flex flex-col">{children}</body>
  </html>
);

export default RootLayout;
