// const cursorDot = document.querySelector(".cursor-dot");
// const cursorOutline = document.querySelector(".cursor-outline");
// const input = document.querySelector(".input");

// window.addEventListener("mousemove",function(e){
//     const posx = e.clientX;
//     const posy = e.clientY;
//     cursorDot.style.left = `${posx}px`;
//     cursorDot.style.top = `${posy}px`;

//     cursorOutline.style.left = `${posx}px`;
//     cursorOutline.style.top = `${posy}px`;

//     // cursorOutline.animate({
//     //     left:`${posx}px`,
//     //     top:`${posy}px`
//     // })
// })

// input.addEventListener("onmouseover",()=>{
//     console.log("h");
//     cursorDot.style.display = none;
//     cursorDot.style.display = none;

//     cursorOutline.style.left = none;
//     cursorOutline.style.top = none;
// })

var typed = new Typed('#element', {
    strings: ["Scriet Updates","University Updates","Pastyears Papers(PYQ)","contest Updates In Scriet","Study Materails"],
    typeSpeed: 50,
    loop : true,
    loopcount : Infinity,
  });