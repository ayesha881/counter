let inc = document.querySelector(".Increase");
let dec = document.querySelector(".Decrease");
let reset = document.querySelector(".Reset");
let no=0;
inc.addEventListener("click",()=>{
    let count = document.querySelector(".count");
    no++;
    count.innerText=no;
})
dec.addEventListener("click",()=>{
    let count = document.querySelector(".count");
    no--;
    count.innerText=no;
})
reset.addEventListener("click",()=>{
    let count = document.querySelector(".count");
    no=0;
    count.innerText=no;
})


