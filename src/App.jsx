import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage"; // Extracted from your current JSX
import ContactUs from "./components/ContactUs";
import Header from "./components/Header";
import Sample from "./components/Sample";
import Services from "./components/Services";
import AboutUsRouting from "./components/AboutUsRouting";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <SpeedInsights />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sample" element={<Sample />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/Aboutus" element={<AboutUsRouting />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
