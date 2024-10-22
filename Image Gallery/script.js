let scrollConatiner = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollConatiner.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollConatiner.scrollLeft += evt.deltaY;
    scrollConatiner.computedStyleMap.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click", ()=>{
    scrollConatiner.computedStyleMap.scrollBehaviour = "smooth";
    scrollConatiner.scrollLeft += 900;
});

backBtn.addEventListener("click", ()=>{
    scrollConatiner.computedStyleMap.scrollBehaviour = "smooth";
    scrollConatiner.scrollLeft -= 900;
});

