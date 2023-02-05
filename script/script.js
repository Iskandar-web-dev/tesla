let door = document.querySelector(".dooorClick")
let car = document.querySelector(".carImg")
let firsw = document.querySelector('.firstWindow')

door.onclick = ()=> {
    
    car.classList.add('salon1')
    document.querySelector('.down1').classList.add('topt')
  
    document.querySelector('.score').classList.add('none')
    document.querySelector('.temp').classList.add('none')
    document.querySelector('.condition').classList.add('none')
    document.querySelector('.version').classList.add('none')
    document.querySelector('.type').classList.add('salonbtn')
    document.querySelector('.down2').classList.add('flex')
    document.querySelector('.btns').style.display = "block"
  
    
}
let colors = {
    black: "file:///C:/Users/hasan/Downloads/black.svg",
    white: "file:///C:/Users/hasan/Downloads/image%209.svg",
    grey: "file:///C:/Users/hasan/Downloads/image%2081240.svg"
}
let btnss = document.querySelectorAll('button[data-tesla]')
let img = document.querySelector('.carImg')

btnss.forEach(btn => {
    btn.onclick = () => {
        let key = btn.innerHTML
        img.style.backgroundImage = `url(${colors[key]})`
    }
})
