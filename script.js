
const navBar = document.getElementsByClassName("Navbar")[0]

let pages = document.getElementsByClassName("Pages")[0]

let navbar = document.getElementsByClassName("Navbar")[0]

let about = document.getElementsByClassName("Header")[0]
let projects = document.getElementsByClassName("Projects")[0]
let skills = document.getElementsByClassName("Skills")[0]
let contact = document.getElementsByClassName("Contact")[0]

let pagesArray = [about,projects,skills]

let aboutLink = document.getElementsByClassName("current")[0]
let projectsLink = document.getElementsByClassName("projects_link")[0]
let skillsLink = document.getElementsByClassName("skills_link")[0]
let contactLink = document.getElementsByClassName("contact_link")[0]

let linksArray = [aboutLink,projectsLink,skillsLink,contactLink]

let aboutBound = document.getElementsByClassName("Header")[0].getBoundingClientRect()
let projectsBound = document.getElementsByClassName("Projects")[0].getBoundingClientRect()
let skillsBound = document.getElementsByClassName("Skills")[0].getBoundingClientRect()

let boundsArray = [aboutBound,projectsBound,skillsBound]


let contactCloseButton = document.getElementsByClassName("close_contact")[0]

contactLink.addEventListener("click",toggleContactPage)
contactCloseButton.addEventListener("click",toggleContactPage)

let links = document.getElementsByClassName("links")[0]


function toggleContactPage(){

    if (contact.style.visibility === "hidden" || contact.style.visibility === "") {
        contact.style.opacity = 1;
        contact.style.visibility = "visible";
    } else {
        contact.style.opacity = 0;
        contact.style.visibility = "hidden";
    }

    // togglePointerEvents()

    contactLink.classList.toggle("focus")

}

// function togglePointerEvents(){

//     linksArray.forEach(link => {
        
//         if(link.style.pointerEvents === "none" || link.style.pointerEvents === ""){
//             link.removeProperty("pointer-events")
//         } else {
//             link.style.pointerEvents = "none"
//         }
//     });
// }



// pagesArray.forEach(page => page.addEventListener("wheel",focusLink(page)))

// function focusLink(page){

//     if(isInView(page)){
//         if(page.className == "Header"){
//             aboutLink.classList.toggle("focus")
//         }else
//         if(page.className == "Projects"){
//             projectsLink.classList.toggle("focus")
//         }else
//         if(page.className == "Skills"){
//             skillsLink.classList.toggle("focus")
//         }
//     }
// }



// function isInView(page){

//     let bottom = window.innerHeight - 50 || document.documentElement.clientHeight - 50

//     console.log(page.className + page.getBoundingClientRect().bottom)
//     console.log(bottom)

//     return (bottom % page.getBoundingClientRect().bottom) == 0;

// }



// pages.addEventListener("wheel",checkScrollDirection)

// function checkScrollDirection(event) {
//     if (checkScrollDirectionIsUp(event)) {
//         console.log('UP');
//     } else {
//         console.log('Down');
//     }
// }
  
// function checkScrollDirectionIsUp(event) {
//     if (event.wheelDelta) {
//         return event.wheelDelta > 0;
//     }
//     return event.deltaY < 0;
// }











