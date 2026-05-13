using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using StudentManagement.Application.DTOs;
using StudentManagement.Application.Interfaces;

namespace StudentManagement.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class StudentsController : ControllerBase
{
    private readonly IStudentService _service;

    public StudentsController(IStudentService service)
    {
        _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllStudents()
    {
        var students = await _service.GetAllStudentsAsync();

        return Ok(students);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetStudentById(int id)
    {
        var student = await _service.GetStudentByIdAsync(id);

        return Ok(student);
    }

    [HttpPost]
    public async Task<IActionResult> AddStudent(StudentCreateDto dto)
    {
        await _service.AddStudentAsync(dto);

        return Ok(new
        {
            message = "Student added successfully"
        });
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateStudent(
        int id,
        StudentUpdateDto dto)
    {
        await _service.UpdateStudentAsync(id, dto);

        return Ok(new
        {
            message = "Student updated successfully"
        });
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStudent(int id)
    {
        await _service.DeleteStudentAsync(id);

        return Ok(new
        {
            message = "Student deleted successfully"
        });
    }
}