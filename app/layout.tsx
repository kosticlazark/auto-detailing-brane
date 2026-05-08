import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avto Detailing Brane — Premium Detailing Novo Mesto",
  description:
    "Branislav Javorski s.p. — profesionalno globinsko čiščenje, strojno poliranje in keramični premaz vozil v Novem mestu. Premium rezultati, 5.0 ★ na Googlu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body>{children}</body>
    </html>
  );
}
