import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";
import CardShowing from "./Pages/CardShowing/CardShowing";
import FullPage from "./Pages/CardShowing/FullPage";
import Home from "./Pages/Home/Home";
import Preloader from "./Pages/Preloader";
import ScrollToTop from "./Pages/ScrollToTop";
import TopicPage from "./Pages/TopicPage/TopicPage";

const App = () => {
  const [loading, setLoading] = useState(true);
  window.onload = () => {
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topic/:id" element={<TopicPage />} />
            <Route path="/cetagory/:id" element={<CardShowing />} />
            <Route path="/fullpage/:id" element={<FullPage />} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
