import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PropertyList from "./components/Property/PropertyList";
import PropertyDetail from "./components/Property/PropertyDetail";
import AddProperty from "./components/Property/AddProperty";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/properties" element={<PropertyList />} exact />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/add-property" element={<AddProperty />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
