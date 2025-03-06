import Navbar from "../components/layouts/navbar/navbar";
import Footer from "../components/layouts/footer/footer";
 import { AuthProvider } from "../context/AuthProvider";
export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      
      <Navbar />
      {children}
      <Footer />
      
    </AuthProvider>
  );
}
