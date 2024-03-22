import "./globals.css";
import { Saira, Jura, Yaldevi, Ojuju } from "next/font/google";
import NavProvider from "@/components/NavContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getString } from "../helpers/i18n";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Script from "next/script";

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
      <Script id="tawk" type="text/javascript">
        {`      
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/65fd52fb1ec1082f04da180f/1hpiooa9d';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
      `}
      </Script>
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
