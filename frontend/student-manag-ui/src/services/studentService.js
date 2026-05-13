import API from "../api/axios";

export const getStudents = async () => {
  return await API.get("/students");
};

export const getStudentById = async (id) => {
  return await API.get(`/students/${id}`);
};

export const addStudent = async (data) => {
  return await API.post("/students", data);
};

export const updateStudent = async (id, data) => {
  return await API.put(`/students/${id}`, data);
};

export const deleteStudent = async (id) => {
  return await API.delete(`/students/${id}`);
};