
using Serilog;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using StudentManagement.Application.Interfaces;
using StudentManagement.Application.Services;
using StudentManagement.Infrastructure.Data;
using StudentManagement.Infrastructure.Repositories;
using System.Text;
using Microsoft.OpenApi.Models;
using StudentManagement.API.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1",
        new OpenApiInfo
        {
            Title = "Student API",
            Version = "v1"
        });

    options.AddSecurityDefinition(
        "Bearer",
        new OpenApiSecurityScheme
        {
            Name = "Authorization",
            Type = SecuritySchemeType.Http,
            Scheme = "bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Description = "Enter JWT Token"
        });

    options.AddSecurityRequirement(
        new OpenApiSecurityRequirement
        {
            {
                new OpenApiSecurityScheme
                {
                    Reference =
                        new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        }
                },
                Array.Empty<string>()
            }
        });
});


// Database Configuration
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseMySql(
        builder.Configuration.GetConnectionString("DefaultConnection"),
        ServerVersion.AutoDetect(
            builder.Configuration.GetConnectionString("DefaultConnection"))
    );
});


// Dependency Injection
builder.Services.AddScoped<IStudentRepository, StudentRepository>();

builder.Services.AddScoped<IStudentService, StudentService>();

builder.Services.AddScoped<IJwtService, JwtService>();


// JWT Authentication Configuration
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters =
            new TokenValidationParameters
            {
                ValidateIssuer = false,
                ValidateAudience = false,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,

                IssuerSigningKey =
                    new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(
                            builder.Configuration["Jwt:Key"]!
                        )
                    )
            };
    });


// CORS Configuration
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy
                .WithOrigins(
                    "http://localhost:5173",
                    "http://localhost:5174"
                )
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});


// Serilog Configuration
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

builder.Host.UseSerilog();

var app = builder.Build();


// Global Exception Middleware
app.UseMiddleware<ExceptionMiddleware>();


// Swagger
app.UseSwagger();

app.UseSwaggerUI();


// HTTPS
app.UseHttpsRedirection();


// CORS
app.UseCors("AllowReactApp");


// Authentication & Authorization
app.UseAuthentication();

app.UseAuthorization();


// Map Controllers
app.MapControllers();

app.Run();