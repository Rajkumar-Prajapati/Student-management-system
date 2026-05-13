

# 1. Project Title

# Student Management System

# 2. Project Description

The Student Management System is a full-stack web application developed using ASP.NET Core Web API, React.js, Tailwind CSS, and MySQL. 

This project allows users to manage student records with features like authentication, adding students, updating student details, deleting
students, and viewing all student records through a modern responsive dashboard.


# 3. Features

- JWT Authentication
- Protected Dashboard
- Add Student
- Update Student
- Delete Student
- View All Students
- Responsive UI Design
- REST API Integration
- Swagger API Documentation



# 4. Technologies Used

## Backend
- ASP.NET Core Web API
- Entity Framework Core
- MySQL
- JWT Authentication
- Serilog
- Swagger

## Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- React Hot Toast


# 5. Setup Steps

## Backend Setup

### Step 1
Open backend solution in Visual Studio 2022.

### Step 2
Configure MySQL database in `appsettings.json`.

### Step 3
Run migration commands:


powershell
Add-Migration InitialCreate
Update-Database


# step 4
Run backend project using:
Swagger URL:

https://localhost:7030/swagger


### FRONTEND SETUP

# Step 1
onpen frontend project in vs code.

# Step 2
Install dependencies:
npm install

# Step 3
Run frontend:
npm run dev

Frontend URL:

http://localhost:5173

# LOGIN CREDENTIALS
Username: admin
Password: admin123

# API ENDPOINTS
POST/api/auth/login

# Student APIs
GET /api/students
POST /api/students
PUT /api/students/{id}
DELETE /api/students/{id}


# Screenshots

## Login Page
![Login Page](screenshots/LoginPage.png)

## Dashboard
![Dashboard](screenshots/Dashboard.png)

## SwaggerAPI
![SwaggerAPI](screenshots/SwaggerApi.png)

8. Future Improvements
1.User Registration System
2.Role-Based Authentication
3.Search Functionality
4.Pagination
5.Docker Deployment
6.Unit Testing
7.Refresh Token Authentication
8.Dark Mode UI

