
let name = "Angel Dela Cruz";
let course = "Bachelor of Science in Information Technology";
let YearLevel = "2nd year";


console.log("Name: " +name + "\nCourse: " +course + "\nYear Level: " +YearLevel);

//step 2

let HoursofSleep = 8;
let HoursStudied = 5;

console.log("Hours of Sleep: " +HoursofSleep + "\nHours Studied: " +HoursStudied);

//step 3
if (HoursStudied >= 5) {
    console.log("Great! You studied enough today.");
}else {
    console.log("You need to study more.");
}

//step 4
let subjects = ["OOP", "Event Driven Programming", "Networking", "Web Development", "Database Systems"];
console.log("List of my Subjects this semester:");
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}
