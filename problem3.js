function thirdEmployeeInfo(employees) {
    const thirdEmployee = employees[2];
    const thirdEmployeeName = thirdEmployee.name;
    const thirdEmployeeAge = thirdEmployee.age;
    const thirdEmployeeSalary = thirdEmployee.salary;
    const bonus = thirdEmployeeSalary * 0.10;

    return Employee; $
    {thirdEmployeeName} Age: $
    {thirdEmployeeAge} Salary: $
    {thirdEmployeeSalary}Bonus: $
    {bonus};
}

const employees = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(thirdEmployeeInfo(employees));