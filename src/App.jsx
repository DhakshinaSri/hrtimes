import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@/components/common-components/Navbar";
import ScrollToTop from "@/components/common-components/ScrollToTop";
import Footer from "@/components/common-components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import CommunityWelfare from "@/pages/CommunityWelfare";
import NewsandArticles from "@/pages/NewsandArticles";
import HRHub from "@/pages/HRHub";
import PartnerWithUs from "@/pages/PartnerWithUs";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/communitywelfare" element={<CommunityWelfare />} />
        <Route path="/newsandarticles" element={<NewsandArticles />} />
        <Route path="/hrhub" element={<HRHub />} />
        <Route path="/partnerwithus" element={<PartnerWithUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;