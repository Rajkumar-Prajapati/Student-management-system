

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import toast from "react-hot-toast";

export default function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await loginUser(formData);

      localStorage.setItem(
        "token",
        response.data.token
      );

      toast.success("Login successful");

      navigate("/dashboard");

    } catch (error) {

      toast.error("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "radial-gradient(#d4af37 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >

      <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md border border-yellow-400">

        <h1 className="text-3xl font-extrabold text-center mb-6 text-blue-900">
          Student Management
        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full mb-4 p-3 border border-blue-200 rounded-xl bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border border-blue-200 rounded-xl bg-blue-50 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={handleChange}
          />

          <button
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-950 font-semibold p-3 rounded-xl transition duration-300 shadow-md"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}