import "./globals.css";
import { Montserrat, PT_Serif, Saira, Jura, Yaldevi, Ojuju } from "next/font/google";
import NavProvider from "@/components/NavContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getString } from '../helpers/i18n'

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
  title: getString("TITLE"),
  description: getString("DESCRIPTION"),
  colorScheme: "light only",
  openGraph: {
    title: getString("TITLE"),
    description: getString("DESCRIPTION"),
    url: 'https://centroleonhebreo.com/',
    siteName: getString("TITLE"),
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${montserrat.variable}`}>
      <body>
        <NavProvider>
          <Header />
          {children}
          <Footer />
        </NavProvider>
      </body>
    </html>
  );
}
