using StudentManagement.Application.DTOs;
using StudentManagement.Application.Interfaces;
using StudentManagement.Domain.Entities;

namespace StudentManagement.Application.Services;

public class StudentService : IStudentService
{
    private readonly IStudentRepository _repository;

    public StudentService(IStudentRepository repository)
    {
        _repository = repository;
    }

    public async Task<List<StudentResponseDto>> GetAllStudentsAsync()
    {
        var students = await _repository.GetAllAsync();

        return students.Select(student => new StudentResponseDto
        {
            Id = student.Id,
            Name = student.Name,
            Email = student.Email,
            Age = student.Age,
            Course = student.Course,
            CreatedDate = student.CreatedDate
        }).ToList();
    }

    public async Task<StudentResponseDto> GetStudentByIdAsync(int id)
    {
        var student = await _repository.GetByIdAsync(id);

        if (student == null)
        {
            throw new Exception("Student not found");
        }

        return new StudentResponseDto
        {
            Id = student.Id,
            Name = student.Name,
            Email = student.Email,
            Age = student.Age,
            Course = student.Course,
            CreatedDate = student.CreatedDate
        };
    }

    public async Task AddStudentAsync(StudentCreateDto dto)
    {
        var student = new Student
        {
            Name = dto.Name,
            Email = dto.Email,
            Age = dto.Age,
            Course = dto.Course,
            CreatedDate = DateTime.UtcNow
        };

        await _repository.AddAsync(student);
    }

    public async Task UpdateStudentAsync(int id, StudentUpdateDto dto)
    {
        var student = await _repository.GetByIdAsync(id);

        if (student == null)
        {
            throw new Exception("Student not found");
        }

        student.Name = dto.Name;
        student.Email = dto.Email;
        student.Age = dto.Age;
        student.Course = dto.Course;

        await _repository.UpdateAsync(student);
    }

    public async Task DeleteStudentAsync(int id)
    {
        var student = await _repository.GetByIdAsync(id);

        if (student == null)
        {
            throw new Exception("Student not found");
        }

        await _repository.DeleteAsync(student);
    }
}