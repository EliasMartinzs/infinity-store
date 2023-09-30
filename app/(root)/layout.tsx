import Header from "@/components/Header";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ProviderRedux } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shipped",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProviderRedux>
      <html lang="en">
        <body className={inter.className}>
          <main>
            <Header />
            {children}
          </main>
        </body>
      </html>
    </ProviderRedux>
  );
}
