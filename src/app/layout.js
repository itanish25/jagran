import { Sora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ThemeRegistry from "../../theme";

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

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K0DWED2ZPH"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K0DWED2ZPH');
          `}
        </Script>
      </body>
    </html>
  );
}
