import type { Metadata } from "next";
import TopHeader from "@/components/common/TopHeader";
import Footer from "@/components/common/Footer";
import "../styles/root.scss";

export const metadata: Metadata = {
  title: "XBorg",
  description: "Empowering players & fans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
