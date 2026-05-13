import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../services/studentService";

export default function Dashboard() {

  const [students, setStudents] = useState([]);

  const [loading, setLoading] = useState(true);

  const [editingStudent, setEditingStudent] =
    useState(null);

  const loadStudents = async () => {

    try {

      const response = await getStudents();

      setStudents(response.data);

    } catch (error) {

      toast.error("Failed to load students");

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    loadStudents();

  }, []);

  const handleAddStudent = async (data) => {

    try {

      await addStudent(data);

      toast.success("Student added");

      loadStudents();

    } catch (error) {

      toast.error("Failed to add student");
    }
  };

  const handleUpdateStudent = async (
    id,
    data
  ) => {

    try {

      await updateStudent(id, data);

      toast.success("Student updated");

      setEditingStudent(null);

      loadStudents();

    } catch (error) {

      toast.error("Failed to update student");
    }
  };

  const handleDeleteStudent = async (id) => {

    try {

      await deleteStudent(id);

      toast.success("Student deleted");

      loadStudents();

    } catch (error) {

      toast.error("Failed to delete student");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto p-6">

        <StudentForm
          onAddStudent={handleAddStudent}
          editingStudent={editingStudent}
          onUpdateStudent={handleUpdateStudent}
        />

        {loading ? (

          <Loader />

        ) : (

          <StudentTable
            students={students}
            onDelete={handleDeleteStudent}
            onEdit={setEditingStudent}
          />
        )}

      </div>

    </div>
  );
}