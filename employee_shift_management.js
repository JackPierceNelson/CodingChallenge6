// Task 1: Create an Employees Array of Employee Objects
const employees = [
    {name: "John", shifts:[{day: "Monday", hours: 8}, {day: "Wednesday", hours: 6}]},
    {name: "Sara", shifts:[{day: "Tuesday", hours: 5}, {day: "Thursday", hours: 7}]},
    {name: "David", shifts:[{day: "Monday", hours: 8}]},
    {name: "Emily", shifts:[{day: "Friday", hours: 8}]}
];

// Task 2: Create a Function to Display Employee Shift Details

function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`);
    console.log("Shifts");
    // iterate through the shifts to log the pay and hours worked
    employee.shifts.forEach(shift => {console.log(`${shift.day}:${shift.hours} hours`);});
}
// Example usage
employees.forEach(displayEmployeeShifts);

// Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    // Check if the employee exists
    const employee = employees.find(emp => emp.name === employeeName);
    if (!employee) {
        console.log(`Error: Employee Name: ${employeeName} not found`);
        return;
    }
    // Check if the employee already has a shift on a given day
    const existingShift = employee.shifts.find(shift => shift.day === day);
    if (existingShift) {
        console.log(`Error: ${employeeName} already has a shift on ${day}`);
        return;
    }
    // Add a new shift to the employee's shifts array
    employee.shifts.push({day, hours});
    console.log(`Shift on ${day} for ${hours} assigned to ${employeeName}`);
}
// Assign shift to new employee Jack
assignShift("Jack", "Monday", 8);
// Assign shift to exsisting employee Emily
assignShift("Emily", "Monday", 8);

// Task 4: Create a Function to Calculate Total Hours Worked

function calculateTotalHours(employeeName) {
    // find the employee by name
    const employee = employees.find(emp => emp.name === employeeName);
    // check if the employee exists
    if (!employee) {
        console.log(`Error: ${employeeName} not found`);
        return null;
    }
    // calculate total hours
    const totalHours = employee.shifts.reduce((sum, shift) => sum + shift.hours, 0);
    console.log(`${employeeName} has worked a total of ${totalHours} this week`);
    return totalHours;
}
const totalHoursForEmily = calculateTotalHours("Emily");

// Task 5: Create a Function to List Employees with Free Days

function listAvailableEmployees(day) {
    // Created a new array containing only the employees who do not have a shift on that particular day
    const availableEmployees = employees.filter(employee => !employee.shifts.some(shift => shift.day === day));
    // If no employees are available, log an error message
    if (availableEmployees.length === 0) {
        console.log(`No employees found on ${day}`);
    }
    else {
        // Keep checking employees who do not have a matching shift
        console.log(`Employee available on ${day}`);
        availableEmployees.forEach(employee => console.log(`${employee.name}`));
    }
    // the function returns the array of availableEmployees on that particular day
    return availableEmployees;
}
// list employees that are available on Monday
listAvailableEmployees("Monday");