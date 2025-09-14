import { Sora } from "next/font/google";
import "./globals.css";

import ThemeRegistry from "../../theme";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Mata ki Chowki",
  description: "Mata ki Chowki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
