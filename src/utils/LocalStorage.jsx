const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design Homepage",
                "taskDescription": "Create the initial design for the homepage.",
                "taskDate": "2024-12-05",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false
            },
            {
                "taskTitle": "Fix Bug #123",
                "taskDescription": "Resolve the login issue on the mobile app.",
                "taskDate": "2024-12-06",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true
            },
            {
                "taskTitle": "Team Meeting",
                "taskDescription": "Attend the weekly team sync-up meeting.",
                "taskDate": "2024-12-07",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Write unit tests for the new features.",
                "taskDate": "2024-12-08",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false
            },
            {
                "taskTitle": "Update Documentation",
                "taskDescription": "Update the project documentation.",
                "taskDate": "2024-12-09",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": true
            },
            {
                "taskTitle": "Client Feedback",
                "taskDescription": "Compile and analyze client feedback.",
                "taskDate": "2024-12-10",
                "category": "Management",
                "active": true,
                "newTask": true,
                "completed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Create Marketing Plan",
                "taskDescription": "Develop a marketing plan for Q1.",
                "taskDate": "2024-12-11",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false
            },
            {
                "taskTitle": "Design Logo",
                "taskDescription": "Design a logo for the new product.",
                "taskDate": "2024-12-12",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false
            },
            {
                "taskTitle": "Server Maintenance",
                "taskDescription": "Perform scheduled server maintenance.",
                "taskDate": "2024-12-13",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "User Research",
                "taskDescription": "Conduct user research for the new app.",
                "taskDate": "2024-12-14",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false
            },
            {
                "taskTitle": "Financial Report",
                "taskDescription": "Prepare the annual financial report.",
                "taskDate": "2024-12-15",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true
            },
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review code submissions from team members.",
                "taskDate": "2024-12-16",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Customer Support",
                "taskDescription": "Handle customer support tickets.",
                "taskDate": "2024-12-17",
                "category": "Support",
                "active": true,
                "newTask": true,
                "completed": false
            },
            {
                "taskTitle": "Team Lunch",
                "taskDescription": "Organize a team lunch for Friday.",
                "taskDate": "2024-12-18",
                "category": "Management",
                "active": false,
                "newTask": false,
                "completed": true
            },
            {
                "taskTitle": "Product Launch",
                "taskDescription": "Plan the product launch event.",
                "taskDate": "2024-12-19",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false
            }
        ]
    }
];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employeeData = localStorage.getItem('employees')
    const adminData = localStorage.getItem('admin')
    console.log(JSON.parse(employeeData));
    console.log(JSON.parse(adminData));
    
}