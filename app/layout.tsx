import NavBar from "@/components/navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/hooks/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snap Space",
  description:
    "Snap Space is an innovative website that provides its users with the ability to search for images as well as generate their own personalized images. With its powerful search engine and user-friendly interface, Snap Space makes it easy to find the perfect image for any project and take it to the next level by allowing users to generate their own custom images.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="container mx-auto py-2 px-4">
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </section>
      </body>
    </html>
  );
}
