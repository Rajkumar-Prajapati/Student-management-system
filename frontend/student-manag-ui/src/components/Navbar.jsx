

import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div
      className="px-8 py-4 flex justify-between items-center shadow-xl border-b border-yellow-300"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "radial-gradient(#d4af37 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >

      <h1 className="text-2xl font-extrabold text-blue-900 tracking-wide">
        Student Management
      </h1>

      <button
        onClick={handleLogout}
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-950 font-semibold px-5 py-2 rounded-xl shadow-md transition duration-300"
      >
        Logout
      </button>

    </div>
  );
}