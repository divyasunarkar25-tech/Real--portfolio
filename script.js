// Mobile Menu

const menuBtn=document.getElementById("menu-btn");
const navbar=document.getElementById("navbar");

menuBtn.addEventListener("click",()=>{
navbar.classList.toggle("active");
});

// Close Menu

document.querySelectorAll(".navbar a").forEach(link=>{
link.addEventListener("click",()=>{
navbar.classList.remove("active");
});
});

// Active Navbar

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;
const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){
current=section.getAttribute("id");
}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){
link.classList.add("active");
}

});

});

// Reveal Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{threshold:.2});

document.querySelectorAll(".skill-card,.project-card,.education-card,.info-box,.contact-item").forEach(item=>{
observer.observe(item);
});

// Contact Form

const form=document.querySelector(".contact-form");

form.addEventListener("submit",e=>{

e.preventDefault();

alert("Thank You! Your message has been received.");

form.reset();

});