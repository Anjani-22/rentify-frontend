import React, { createContext, useState, useEffect } from "react";
import axios from "../utils/api";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem("authToken");
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const { data } = await axios.get("/api/auth/user");
        setUser(data);
      }
    };
    checkLoggedIn();
  }, []);

  const register = async (userData) => {
    const { data } = await axios.post("/api/auth/register", userData);
    localStorage.setItem("authToken", data.token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    setUser(data);
  };

  const login = async (email, password) => {
    const { data } = await axios.post("/api/auth/login", { email, password });
    localStorage.setItem("authToken", data.token);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    setUser(data);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    delete axios.defaults.headers.common["Authorization"];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
