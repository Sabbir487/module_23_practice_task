const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

// Function to calculate total monthly salary
function calculateTotalSalary(employees) {
    let totalMonthlySalary = 0; // Initialize total salary

    for (const employee of employees) {
        const currentSalary = (employee.experience * employee.increment) + employee.starting; // Calculate salary
        totalMonthlySalary += currentSalary; // Add to total
    }

    return totalMonthlySalary; // Return total salary
}

// Calculate and log the total monthly salary
const totalSalary = calculateTotalSalary(employees);
console.log("Total Monthly Salary:", totalSalary);
