import "./globals.css";
import {Bricolage_Grotesque} from "next/font/google";

export const metadata = {
  title: "Venture Consult",
  description: "Best Compliance Certification agency",
};

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.className} antialiased`}>{children}</body>
    </html>
  );
}
