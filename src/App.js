import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

import Navbar from "./Components/Navbar/Navbar";
import CardShowing from "./Pages/CardShowing/CardShowing";
import Error from "./Pages/Error";
import Home from "./Pages/Home/Home";
import TopicPage from "./Pages/TopicPage/TopicPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/1" element={<TopicPage />} />
        <Route path="/cetagory/:id" element={<CardShowing />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
