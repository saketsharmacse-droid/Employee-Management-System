// localStorage.clear()
    const employees = [
        {
        "id": 1,
        "name": "Rahul",
        "email": "e@e.com",
        "password": "123",
        "taskNumber": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Design Login Page",
            "taskDescription": "Create a responsive login page for the employee management system.",
            "taskDate": "2026-08-15",
            "category": "Design"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Build Dashboard UI",
            "taskDescription": "Create the main dashboard layout with employee statistics and task cards.",
            "taskDate": "2026-08-17",
            "category": "Development"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Create Navbar",
            "taskDescription": "Develop a responsive navigation bar for the application.",
            "taskDate": "2026-08-12",
            "category": "Development"
            },
            {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Fix Mobile Layout",
            "taskDescription": "Fix alignment and spacing issues on mobile devices.",
            "taskDate": "2026-08-10",
            "category": "Bug Fix"
            }
        ]
        },
        {
        "id": 2,
        "name": "Amit",
        "email": "employee2@example.com",
        "password": "123",
        "taskNumber": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Develop REST API",
            "taskDescription": "Create REST APIs for employee and task management.",
            "taskDate": "2026-08-16",
            "category": "Backend"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Connect Database",
            "taskDescription": "Connect the application with the MySQL database.",
            "taskDate": "2026-08-18",
            "category": "Database"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Setup Authentication",
            "taskDescription": "Implement basic authentication for employees and admin.",
            "taskDate": "2026-08-11",
            "category": "Backend"
            },
            {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "API Documentation",
            "taskDescription": "Prepare documentation for all available APIs.",
            "taskDate": "2026-08-09",
            "category": "Documentation"
            },
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Implement JWT",
            "taskDescription": "Add JWT based authentication to secure API endpoints.",
            "taskDate": "2026-08-20",
            "category": "Security"
            }
        ]
        },
        {
        "id": 3,
        "name": "Rohit",
        "email": "employee3@example.com",
        "password": "123",
        "taskNumber": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Create Employee Form",
            "taskDescription": "Build a form for adding new employees to the system.",
            "taskDate": "2026-08-15",
            "category": "Development"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Add Form Validation",
            "taskDescription": "Add validation for employee registration fields.",
            "taskDate": "2026-08-16",
            "category": "Development"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Create Employee Table",
            "taskDescription": "Display employee records in a responsive table.",
            "taskDate": "2026-08-12",
            "category": "UI"
            }
        ]
        },
        {
        "id": 4,
        "name": "Aditya",
        "email": "employee4@example.com",
        "password": "123",
        "taskNumber": {
            "active": 3,
            "newTask": 2,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Write Unit Tests",
            "taskDescription": "Write unit tests for the employee management modules.",
            "taskDate": "2026-08-19",
            "category": "Testing"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Test Login Flow",
            "taskDescription": "Test login and logout functionality with different users.",
            "taskDate": "2026-08-17",
            "category": "Testing"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Test Dashboard",
            "taskDescription": "Verify that dashboard components display correctly.",
            "taskDate": "2026-08-13",
            "category": "Testing"
            },
            {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Fix Authentication Bug",
            "taskDescription": "Investigate and fix an authentication issue in the application.",
            "taskDate": "2026-08-08",
            "category": "Bug Fix"
            },
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Performance Testing",
            "taskDescription": "Check application performance under multiple requests.",
            "taskDate": "2026-08-21",
            "category": "Testing"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Test Employee API",
            "taskDescription": "Test all employee related API endpoints.",
            "taskDate": "2026-08-14",
            "category": "API"
            }
        ]
        },
        {
        "id": 5,
        "name": "Arjun",
        "email": "employee5@example.com",
        "password": "123",
        "taskNumber": {
            "active": 3,
            "newTask": 3,
            "completed": 2,
            "failed": 1
        },
        "tasks": [
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Create Landing Page",
            "taskDescription": "Design and develop the landing page for the application.",
            "taskDate": "2026-08-16",
            "category": "Design"
            },
            {
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false,
            "taskTitle": "Add Dark Mode",
            "taskDescription": "Implement dark mode functionality across the application.",
            "taskDate": "2026-08-18",
            "category": "Frontend"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Create Footer",
            "taskDescription": "Create a responsive footer with useful navigation links.",
            "taskDate": "2026-08-11",
            "category": "UI"
            },
            {
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false,
            "taskTitle": "Optimize CSS",
            "taskDescription": "Clean up unused CSS and improve component styling.",
            "taskDate": "2026-08-10",
            "category": "Frontend"
            },
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Create Profile Page",
            "taskDescription": "Develop an employee profile page showing personal and task information.",
            "taskDate": "2026-08-22",
            "category": "Frontend"
            },
            {
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true,
            "taskTitle": "Fix Responsive Issues",
            "taskDescription": "Fix layout problems on tablet and mobile screen sizes.",
            "taskDate": "2026-08-07",
            "category": "Bug Fix"
            },
            {
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false,
            "taskTitle": "Implement Search",
            "taskDescription": "Add search functionality for employees and tasks.",
            "taskDate": "2026-08-23",
            "category": "Development"
            }
        ]
        }
    ]



const admin = [
    {
        name: "Saket",
        id: 1,
        email: "admin@example.com",
        password: "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}