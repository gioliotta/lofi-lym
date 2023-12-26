import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Lofi Lym",
  description: "Lofi lovers, this is your place",  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        id="root"
        className="bg-[#000] font-sans w-full min-h-screen flex flex-col justify-between items-center py-4"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
