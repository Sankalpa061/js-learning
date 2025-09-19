const personalInfo = {
    name: "Sankalpa",
    age: 19,
    course: "CSIT",
    roll: 25,
    profession: "Student",
    religion: "Hindu",
    location: {
        country: "Nepal",
        city: "Pokhara",
        town: "Birauta",
    }
}
const contacts = {
    email: "sankalpa061@gmail.com",
    phone: "9745285003",
}
const about = {...personalInfo,...contacts}
// const about = Object.assign({},personalInfo,contacts)
// console.log(about);
const {location} = about
console.log(location.town)
// console.log(about.hasOwnProperty("gender"))

