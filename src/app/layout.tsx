import "~/styles/globals.css";
import { Toaster } from "sonner";
import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Kinga!!!",
  description: "2026年幕開けに必須なアプリ!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={geist.variable}>
      <body>
        {children}
        <Toaster position="bottom-center" richColors/>
      </body>
    </html>
  );
}
