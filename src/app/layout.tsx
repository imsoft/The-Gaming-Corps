import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "@/fonts/fonts";
import { Footer, Header } from "@/components";

export const metadata: Metadata = {
  title: "The Gaming Corps",
  description: "The Gaming Corps",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.className} bg-gradient-to-br from-[#062A52] to-[#040811]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
