import "./globals.css";
import { Saira, Jura, Yaldevi, Ojuju } from "next/font/google";
import NavProvider from "@/components/NavContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getString } from "../helpers/i18n";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const montserrat = Saira({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const ptSerif = Jura({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pt-serif",
});

export const metadata = {
  title: "Agiliza Seller",
  description: "Vende más, trabaja menos",
  colorScheme: "light only",
  openGraph: {
    title: "Agiliza Seller",
    description: "Vende más, trabaja menos",
    url: "https://agilizaSeller.com/",
    siteName: "Agiliza Seller",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${montserrat.variable}`}>
      <body>
        <NavProvider>
          <Theme>
            <Header />
            {children}
            <Footer />
          </Theme>
        </NavProvider>
      </body>
    </html>
  );
}
