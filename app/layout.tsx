import type { Metadata } from 'next'
import './globals.css'
import Header from "@/components/organisms/Header";
import Footer from "@/components//organisms/Footer";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: 'しんえこ',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className={`mb-auto pt-10`}>{children}</div>
        <Footer />
      
      </body>
    </html>
  )
}
