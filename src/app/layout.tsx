import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Gopinath",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </head>
      <body className="antialiased text-base">
        {children}
      </body>
    </html>
  );
}
