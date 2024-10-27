import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import { metainfo } from "@/lib/const";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react"
import Providers from "@/components/providers/Providers";
import Dchach from "@/components/ui/overlays/Dchach";

const monsterrat = Montserrat({
  weight: ['100', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-monsterrat'
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {template: "Youssef Ifkiren | %s", default: metainfo.name},
    description: metainfo.description,
    metadataBase: new URL(`https://${metainfo.siteDomain}`),
    openGraph: {
      title: metainfo.name,
      siteName: metainfo.name,
      type: 'website',
      url: `https://${metainfo.siteDomain}`,
    },
    twitter: {
      creator: '@y0ssef_tlg',
      card: "summary_large_image",
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(monsterrat.variable, 'antialiased bg-stone-800 selection:bg-teal-400/90 selection:text-white')}
      >
        <Providers>
          <Dchach />
          <main className="mx-auto w-full max-w-[900px] pt-0 md:pt-12 p-4 text-indigo-200">
            {children}
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
