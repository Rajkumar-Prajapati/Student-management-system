using StudentManagement.Application.DTOs;

namespace StudentManagement.Application.Interfaces;

public interface IStudentService
{
    Task<List<StudentResponseDto>> GetAllStudentsAsync();

    Task<StudentResponseDto> GetStudentByIdAsync(int id);

    Task AddStudentAsync(StudentCreateDto dto);

    Task UpdateStudentAsync(int id, StudentUpdateDto dto);

    Task DeleteStudentAsync(int id);
}