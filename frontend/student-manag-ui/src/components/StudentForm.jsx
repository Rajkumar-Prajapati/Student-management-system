


import { useState } from "react";

export default function StudentForm({
  onAddStudent,
  editingStudent,
  onUpdateStudent,
}) {

  const [formData, setFormData] = useState({
    name: editingStudent?.name || "",
    email: editingStudent?.email || "",
    age: editingStudent?.age || "",
    course: editingStudent?.course || "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editingStudent) {

      onUpdateStudent(editingStudent.id, formData);

    } else {

      onAddStudent(formData);
    }

    setFormData({
      name: "",
      email: "",
      age: "",
      course: "",
    });
  };

  return (
    <div
      className="p-6 rounded-3xl shadow-2xl mb-8 border border-yellow-300"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "radial-gradient(#d4af37 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >

      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl">

        <h2 className="text-3xl font-extrabold text-blue-900 mb-6 tracking-wide">
          {editingStudent ? "Update Student" : "Add Student"}
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              placeholder="Student Name"
              className="border border-blue-200 bg-blue-50 text-blue-950 placeholder-blue-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border border-blue-200 bg-blue-50 text-blue-950 placeholder-blue-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              className="border border-blue-200 bg-blue-50 text-blue-950 placeholder-blue-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.age}
              onChange={handleChange}
            />

            <input
              type="text"
              name="course"
              placeholder="Course"
              className="border border-blue-200 bg-blue-50 text-blue-950 placeholder-blue-400 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={formData.course}
              onChange={handleChange}
            />

          </div>

          <button
            className="mt-6 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-950 font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300"
          >
            {editingStudent ? "Update Student" : "Add Student"}
          </button>

        </form>

      </div>

    </div>
  );
}