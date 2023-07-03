import "./globals.css";
import { Source_Sans_3, Source_Code_Pro } from "next/font/google";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-code",
});

export const metadata = {
  title: "BlockAGI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceCodePro.variable} ${sourceSans3.variable}`}>
        {children}
      </body>
    </html>
  );
}