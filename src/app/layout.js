import { Inter, Raleway } from "next/font/google";
import "~/assets/css/bootstrap.min.css";
import "~/assets/css/app.css";
import "~/assets/css/main.css";
import "~/assets/css/react-adjustment.css";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "Panzatify || Panafrican WhatsApp business marketing automation platform.",
  description: "Panafrican WhatsApp business marketing automation platform.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/favicon.ico?v=4"],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
