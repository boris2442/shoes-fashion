const header=document.querySelector("header");
const links=document.querySelectorAll("header ul li a");

const icons=document.querySelectorAll("header i");
const icons2=document.querySelector(".title i");
const title=document.querySelector("header h2");
const burger=document.querySelector(".menu");
const title2=document.querySelector("header ul")
window.addEventListener("scroll", ()=>{
   if(window.scrollY>250){
    header.style.background='var(--color1)'
    links.forEach(link =>
        link.style.color='var(--color2)'
    
    )
    
title.style.color='var(--color2)'
icons.forEach(icon=>
icon.style.color='var(--color2)'
)
   }else{
    header.style.background='var(--color2)'
    links.forEach(link =>
        link.style.color='var(--color4)'
    
    )
    title.style.color='var(--color3)'
    icons.forEach(icon=>
        icon.style.color='var(--color1)'
        )
        icons2.style.color="orange"
}

})

burger.addEventListener("click", () =>{
  
title2.classList.toggle("active")
      
       
  
})


window.addEventListener("scroll", ()=>{
    title2.classList.add("active2")
    title2.classList.remove("active")
})
// partie scroll reveal

const sr=ScrollReveal({
    duration:1500,
    origin:"top",
    distance:"30px",
    reset:true
})
sr.reveal(".copy, .first-section, .one, .boutique, .arrivage, .newsletter, .footer-text", {interval:200})

// partie destinee au typewriter

const titleh1=document.querySelector("h1")

const app=new Typewriter(titleh1, {
    loop:true,
    delay:20
})

.typeString("style & confort")
.pauseFor(2000)
.deleteAll()
.pauseFor(2000)
.start();


const sections=document.querySelectorAll("section");

const scrollActive=()=>{
    sections.forEach(section=>{
        let height=section.offsetHeight;
        let top=section.offsetTop;
        let id=section.getAttribute("id");
        let scrolls=window.scrollY;
        if(scrolls>=top - 400 + height){
            links.forEach(link=>{
             
                link.classList.remove("active-link")
            })
            let recuperationId=document.querySelector(`header ul li a[href*=${id}]`)
            recuperationId.classList.add("active-link")
        }
    })
}

window.addEventListener("scroll", scrollActive );

// chargement de la page

window.onload = function() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.loader').style.transition='5s ease-out'
  };
  
  