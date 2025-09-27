import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 1000,
            once: true,
        });
        AOS.refresh;
    }, []);

    return (
        <div className="App">
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default App;
