const header=document.querySelector("header");
const links=document.querySelectorAll("header ul li a");
// const list=document.querySelector(".ordonerlist")
const icons=document.querySelectorAll("header i");
const icons2=document.querySelector(".title i");
const title=document.querySelector("header h2");
const burger=document.querySelector(".menu");
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
    // if(window.scrollY>100){
        list.classList.toggle("navigation")
        
        links.classList.add("navig")
    // }
})

