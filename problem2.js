const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

function highestPaid(employees) {
    return employees.reduce((highest, employee) => {
        return employee.salary > highest.salary ? employee : highest;
    });
}

function destructuringToSwap(employees) {
    if (employees.length < 2) return employees;
    const [first, second, ...rest] = employees;
    return [second, first, ...rest];
}

console.log(highestPaid(employees)); 
console.log(destructuringToSwap(employees));