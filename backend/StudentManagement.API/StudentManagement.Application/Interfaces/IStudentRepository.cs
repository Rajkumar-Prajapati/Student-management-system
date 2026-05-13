using StudentManagement.Domain.Entities;

namespace StudentManagement.Application.Interfaces;

public interface IStudentRepository
{
    Task<List<Student>> GetAllAsync();

    Task<Student> GetByIdAsync(int id);

    Task AddAsync(Student student);

    Task UpdateAsync(Student student);

    Task DeleteAsync(Student student);
}