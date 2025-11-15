import type { Metadata } from "next";
import data from "@/content/data.json";

export const metadata: Metadata = {
  title: data.site.title,
  description: data.site.description,
  openGraph: {
    title: data.site.title,
    description: data.site.description,
    type: "website",
    siteName: data.site.author,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
