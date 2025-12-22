import "~/styles/globals.css";
import { Toaster } from "sonner";
import { type Metadata } from "next";
import { TRPCProvider } from "./components/Provider";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Kinga!!!",
  description: "2026年幕開けに必須なアプリ!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <TRPCProvider>
          {children}
          <Toaster position="bottom-center" richColors/>
          <Footer />
        </TRPCProvider>
      </body>
    </html>
  );
}