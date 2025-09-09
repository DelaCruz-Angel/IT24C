//step 1
let name = "Angel Dela Cruz";
let course = "Bachelor of Science in Information Technology";
let YearLevel = "2nd year";


console.log("Name: " +name + "\nCourse: " +course + "\nYear Level: " +YearLevel);

//step 2

let HoursofSleep = 8;
let HoursStudied = 5;

console.log("Hours of Sleep: " +HoursofSleep + "\nHours Studied: " +HoursStudied);

//step 3
let studyMessage = "";
if (HoursStudied >= 5) {
    studyMessage = "Great! You studied enough today.";
}else {
    studyMessage = "You need to study more.";
}
console.log(studyMessage);

//step 4
let text = "List of my Subjects this semester:\n";
let subjects = ["OOP", "Event Driven Programming", "Networking", "Web Development", "Database Systems"];
console.log("List of my Subjects this semester:");
for (let i = 0; i < subjects.length; i++) {
    console.log(("-") + subjects[i]);
}

//step 5
function studentSummary() {
    return 'Student Summary: \nName: ' + name + '\nCourse: ' + course + '\nYear Level: ' + YearLevel + '\n' + '\nHours of Sleep: ' + HoursofSleep   + '\nHours Studied: ' + HoursStudied + '\n' + studyMessage  + '\n' + text + "Subjects:\n " + subjects.join('\n ') + '\n' + "My name is " + name  + ", a" + " " + YearLevel + " " + "from" + " " + course;


}

console.log(studentSummary());