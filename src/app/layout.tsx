import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SJ Draft",
  description: "Test fontów",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`dark`}>
      <body>
        {children}
      </body>
    </html>

  );
}
