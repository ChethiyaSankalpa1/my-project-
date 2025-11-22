import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "J Tours - Explore Sri Lanka | Tour Packages & Travel Services",
  description: "Discover Sri Lanka with J Tours. Explore ancient temples, pristine beaches, wildlife safaris, and tea plantations. From 1-day tours to 21-day adventures. Contact for pricing. Your trusted Sri Lankan tour operator.",
  keywords: "Sri Lanka tours, Sri Lanka travel packages, Ella tours, Sigiriya tours, Kandy tours, Yala safari, Ceylon tours, Sri Lanka vacation, tour operator Sri Lanka, J Tours",
  openGraph: {
    title: "J Tours - Explore Sri Lanka",
    description: "Your trusted Sri Lankan tour operator offering customized tour packages from day tours to 21-day adventures",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
