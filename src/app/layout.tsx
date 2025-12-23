import "~/styles/globals.css";
import { Toaster } from "sonner";
import { type Metadata } from "next";
import { TRPCProvider } from "./components/Provider";

export const metadata: Metadata = {
  title: "Kinga!!!",
  description: "2026年幕開けに必須なアプリ!",
  // サイト全体の基本URL（絶対パスの補完に使われます）
  metadataBase: new URL("https://kinga-n43year.vercel.app"),
  openGraph: {
    title: "Kinga!!!",
    description: "2026年幕開けに必須なアプリ!",
    url: "https://kinga-n43year.vercel.app",
    siteName: "Kinga!!!",
    images: [
      {
        url: "/favicon.ico", 
        width: 1200,
        height: 630,
        alt: "Kinga!!! 2026年幕開けアプリ",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinga!!!",
    description: "2026年幕開けに必須なアプリ!",
    images: ["/favicon.ico"], 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-k-dark-white">
        <TRPCProvider>
          {children}
          <Toaster position="bottom-center" richColors/>
        </TRPCProvider>
      </body>
    </html>
  );
}