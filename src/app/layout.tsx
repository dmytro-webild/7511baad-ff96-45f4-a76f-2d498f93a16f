import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'Your Name | Web Developer Portfolio',
  description: 'Professional portfolio of a web developer specializing in modern, interactive, and high-performance web solutions. Explore my projects and expertise.',
  keywords: ["web developer, portfolio, frontend, backend, fullstack, react, nextjs, javascript, software engineer, web design"],
  openGraph: {
    "title": "Your Name | Web Developer Portfolio",
    "description": "Professional portfolio of a web developer specializing in modern, interactive, and high-performance web solutions.",
    "url": "https://yourportfolio.com",
    "siteName": "Your Name Portfolio",
    "images": [
      {
        "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/a-web-developer-working-on-a-sleek-futur-1774455443927-7453eb11.png",
        "alt": "Web developer working on a futuristic code editor"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Your Name | Web Developer Portfolio",
    "description": "Professional portfolio of a web developer specializing in modern, interactive, and high-performance web solutions.",
    "images": [
      "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BRcZ7hpF157LZvHyszLGxBwWjh/a-web-developer-working-on-a-sleek-futur-1774455443927-7453eb11.png"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
