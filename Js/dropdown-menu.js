var nav = document.querySelector(".menu")
document.addEventListener("click",function(e){
    var onClickNav = e.target.closest(".close")
    var onClickbtnMenu = e.target.closest(".bars")
    if(onClickNav){
        nav.style.display = "none"
    }
    if(onClickbtnMenu){
       nav.style.display = "block"
    }
})