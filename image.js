let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () =>{
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft += 300;
});
backBtn.addEventListener("click", () =>{
   scrollContainer.style.scrollBehavior = "smooth";
   scrollContainer.scrollLeft -= 300;
});
