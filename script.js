let btn = document.querySelector("#btn");
let light = document.querySelector("#light");
btn.addEventListener("click",()=>{
    // console.log("Button was clicked");
    toggleButton();
});
function toggleButton(){
    // console.log("Function is working");
    btn.classList.toggle("active");
    light.classList.toggle("on");
}