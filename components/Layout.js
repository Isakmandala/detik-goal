import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}){
    return(
        <div className="bg-gradient-to-b from-green-600 to-green-900 min-h-screen text-white">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}