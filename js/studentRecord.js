//Score Card Report
let studentScore = window.prompt("Enter student score:")
let studentCourse = window.prompt("Enter your Subject")
let studentMatricNumber = window.prompt("Enter your Matric Number:")
studentScore = parseInt(studentScore)
switch(true){
    case (studentScore > 100):
        console.log("You cannot Score more than 100")
        break;
    case (studentScore >= 70):
        console.log(`You have A in ${studentCourse}`)
        break;
    case(studentScore >= 60):
        console.log(`You have B in ${studentCourse}`)
        break;
    case(studentScore >= 50):
        console.log(`You have C in ${studentCourse}`)
        break;
    case(studentScore >= 45):
        console.log(`You have D in ${studentCourse}`)
        break;
    case(studentScore >= 40):
        console.log(`You have E in ${studentCourse}`)
        break;
    case(studentScore >= 0):
        console.log(`You have F in ${studentCourse}`)
        break;
    default:
        console.log("You didn't register for this Course")
}