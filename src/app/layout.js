import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ThemeRegistry from "../../theme";
import { GoogleAnalytics } from '@next/third-parties/google';

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Mata ki Chowki by Naveen Sharma",
  description: "Mata ki Chowki by Naveen Sharma",
  icons: {
    icon: "/favicon.png",       // default
    shortcut: "/favicon.png",   // optional
    apple: "/favicon.png",      // for iOS
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ThemeRegistry>{children}</ThemeRegistry>

        <GoogleAnalytics gaId="AW-11500608369" />
      </body>
    </html>
  );
}
