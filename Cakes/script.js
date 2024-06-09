let scrollContainer = document.querySelector(".gallery");
let BackButton = document.getElementById("backBTN");
let NextButton = document.getElementById("nextBTN");

scrollContainer.addEventListener("wheel" , (e)=>{
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior="auto";
})

NextButton.addEventListener("click", ()=>{
  scrollContainer.scrollLeft += 900;
  scrollContainer.style.scrollBehavior="smooth";
})

BackButton.addEventListener("click", ()=>{
  scrollContainer.scrollLeft -= 900;
})