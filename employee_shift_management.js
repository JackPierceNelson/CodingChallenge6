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
    employee.shifts.forEach(shift => {console.log(`${shift.day}:${shift.hours} hours`);});
}
employees.forEach(displayEmployeeShifts);

// Task 3: Create a Function to Assign a New Shift

function assignShift(employeeName, day, hours) {
    const employee = employees.find(emp => emp.name === employeeName);
    if (!employee) {
        console.log(`Error: Employee Name: ${employeeName} not found`);
        return;
    }
    const existingShift = employee.shifts.find(shift => shift.day === day);
    if (existingShift) {
        console.log(`Error: ${employeeName} already has a shift on ${day}`);
        return;
    }
    employee.shifts.push({day, hours});
    console.log(`Shift on ${day} for ${hours} assigned to ${employeeName}`);
}
assignShift("Jack", "Monday", 8);
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