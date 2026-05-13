using Microsoft.AspNetCore.Mvc;
using StudentManagement.Application.DTOs;
using StudentManagement.Application.Interfaces;

namespace StudentManagement.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IJwtService _jwtService;

    public AuthController(IJwtService jwtService)
    {
        _jwtService = jwtService;
    }

    [HttpPost("login")]
    public IActionResult Login(LoginDto dto)
    {
        if (
            dto.Username != "admin"
            || dto.Password != "admin123"
        )
        {
            return Unauthorized(new
            {
                message = "Invalid username or password"
            });
        }

        var token = _jwtService.GenerateToken(dto.Username);

        return Ok(new
        {
            token = token
        });
    }
}