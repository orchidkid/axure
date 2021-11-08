let tabHeaders = document.querySelectorAll(".tabs .tab__header > div");
let tabContents = document.querySelectorAll(".tabs .tab__content > div");

for(let i = 0; i < tabHeaders.length; i++){
  tabHeaders[i].addEventListener("click", function(){
    document.querySelector(".tabs .tab__header > .active").classList.remove("active");
  tabHeaders[i].classList.add("active");
  document.querySelector(".tabs .tab__content > .active").classList.remove("active");
  tabContents[i].classList.add("active");
  });
}