function mergingObjects(student, course) {
    const studentWithCourse = { ...student, ...course };
    return studentWithCourse;
}

const student = { name: "Alice", age: 20 };
const course = { courseName: "Math", teacher: "Mr. Smith" };
console.log(mergingObjects(student, course))