const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
] 

const h1 = (... props) => {
    return `<h1 class="${props[0]}">${props[1]}</h1>`
}

const section = (... props) => {
    return `<section class="bordered dashed ${props[0]}">${props[1]}</section>`
}

const aside = (... props) => {
    return `<aside class="${props[0]}">${props[1]}</aside>`
}

const student = (... props) => `
    <div id="student">
        ${h1(props[0], "xx-large passing")}
        ${section(props[1], "section--padded")}   
        ${aside(props[2], "pushRight")}
    </div>
`
const fstudent = (name, sectionContent, info) => `
    <div id="fstudent">
        ${h1(props[0], "xx-large failing")}
        ${section(props[1], "section--padded")}   
        ${aside(props[2], "pushRight")}
    </div>
`

// students.forEach(currentStudent => {
// const studentHTMLRepresentation = student(currentStudent.name, currentStudent.class, currentStudent.info)
// document.querySelector("#container").innerHTML += studentHTMLRepresentation
// })

// {<div class="student">
//     <h1 class="xx-large green">Student Name</h1>
//     <section class="bordered dashed section--padded">Student class</section>
//     <aside class="pushRight">Additional information</aside>
// </div> }

for (currentStudent of students) {
    let studentComponent = "student_class"
    if (currentStudent.score >= 60) {
        studentComponent = student(           
            currentStudent.name,
            currentStudent.class,
            currentStudent.info,
            currentStudent.score,
            ".passing")
    document.querySelector("#container").innerHTML += studentComponent        
    } else {
        studentComponent = fstudent(
            currentStudent.name,
            currentStudent.class,
            currentStudent.info,
            currentStudent.score,
            ".failing")
    }
    document.querySelector("#container").innerHTML += studentComponent
 }

//  WRITE GENERIC FUNCTION TO CREATE ELEMENT

const element = (... props) => {
    return `<${props[2]} class="${props[0]}">${props[1]}</${props[2]}>`
}











