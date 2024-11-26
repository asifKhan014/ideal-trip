import Navbar from "../components/layouts/navbar/navbar";
import Footer from "../components/layouts/footer/footer";
export default function RootLayout({ children }) {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar />
      {children}
      <Footer />
      {/* <Footer /> */}
    </>
  );
}
