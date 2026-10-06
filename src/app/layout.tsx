import type { Metadata, Viewport } from "next";
import { Barlow, Fraunces } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

// Fraunces and Barlow stand in for TIS's licensed Mirador serif and PF DIN sans.
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"], style: ["normal", "italic"] });
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tulas International School | Best Boarding School in Dehradun",
  description:
    "CBSE-affiliated co-ed boarding and day school in Dehradun, Uttarakhand for boys and girls from Class 4 to 12.",
};

export const viewport: Viewport = {
  themeColor: "#b90124",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The head script adds the theme class before hydration, hence suppressHydrationWarning.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${barlow.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans">
        {/* "user" turns transform animations off for visitors who ask for reduced motion. */}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
