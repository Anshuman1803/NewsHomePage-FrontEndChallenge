let HamButton = document.getElementById("HamMenu");
let NavBar = document.getElementById("NavBar");


HamButton.addEventListener('click', ()=>{
    HamButton.classList.toggle("fa-xmark");
    NavBar.classList.toggle("HIdeNav");
})