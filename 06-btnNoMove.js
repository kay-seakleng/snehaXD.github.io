const btn = document.getElementById("btnNo")
btn.addEventListener("mouseover", function(){
    const btnRect = btn.getBoundingClientRect();

    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const randomX = Math.floor(Math.random() * maxX)
    const randomY = Math.floor(Math.random() * maxY)

    btn.style.left = randomX+"px"
    btn.style.top = randomY+"px"
})

btnYes.onclick = ()=>{
    document.getElementById("pic1").classList.add("d-none")
    document.getElementById("pic2").classList.remove("d-none")

    document.getElementById("btnNo").classList.add("d-none")
    document.getElementById("Marry").classList.remove("d-none")
    document.getElementById("btnYes").classList.add("d-none")


}