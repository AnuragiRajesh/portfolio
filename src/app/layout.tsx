import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajesh Anuragi | Fullstack Developer",
  description:
    "Fullstack Developer and CS student — building responsive UIs, REST APIs, and automation tools. Currently studying Information Sciences at Azim Premji University.",
  keywords: ["Rajesh Anuragi", "Fullstack Developer", "React", "Node.js", "TypeScript", "Portfolio", "Bangalore"],
  openGraph: {
    title: "Rajesh Anuragi | Fullstack Developer",
    description: "Fullstack Developer and CS student based in Bangalore",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}
      suppressHydrationWarning
    >
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  );
}
