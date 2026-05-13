


import {
  FaTrash,
  FaEdit,
} from "react-icons/fa";

export default function StudentTable({
  students,
  onDelete,
  onEdit,
}) {

  return (
    <div
      className="rounded-3xl shadow-2xl overflow-hidden border border-yellow-300"
      style={{
        backgroundColor: "#dbeafe",
        backgroundImage:
          "radial-gradient(#d4af37 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >

      <table className="w-full backdrop-blur-md">

        <thead className="bg-gradient-to-r from-blue-900 to-blue-700 text-yellow-300">

          <tr>
            <th className="p-4 text-left font-bold tracking-wide">Name</th>
            <th className="p-4 text-left font-bold tracking-wide">Email</th>
            <th className="p-4 text-left font-bold tracking-wide">Age</th>
            <th className="p-4 text-left font-bold tracking-wide">Course</th>
            <th className="p-4 text-center font-bold tracking-wide">Actions</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student) => (

            <tr
              key={student.id}
              className="border-b border-blue-200 hover:bg-white/40 transition duration-300 text-blue-950"
            >
              <td className="p-4 font-medium">{student.name}</td>

              <td className="p-4">{student.email}</td>

              <td className="p-4">{student.age}</td>

              <td className="p-4">{student.course}</td>

              <td className="p-4 flex justify-center gap-3">

                <button
                  onClick={() => onEdit(student)}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-950 p-2 rounded-xl shadow-md transition duration-300"
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => onDelete(student.id)}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-2 rounded-xl shadow-md transition duration-300"
                >
                  <FaTrash />
                </button>

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}