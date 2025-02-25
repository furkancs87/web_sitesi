import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component import
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Page import
import Home from "./pages/Home/Home.jsx";
import Homeslider from "./pages/Home/Homeslider.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/Services.jsx";
import Products from "./pages/Products/Products.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ContactForm from "./pages/Contact/ContactForm.jsx";
import Contactmap from "./pages/Contact/Contactmap.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";


function App() {
    //deneme son hali
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Homeslider />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
