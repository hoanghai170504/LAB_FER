import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage";
import OrchidsContainer from "./components/OrchidsContainer";
import DetailPage from "./components/DetailPage";
import ContactPage from "./components/ContactPage";
import BlogPage from "./components/BlogPage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-gray-50">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<OrchidsContainer />} />
              <Route path="/shop/:id" element={<DetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/user" element={<UserPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
