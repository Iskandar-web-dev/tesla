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

    let close = document.querySelector('.type')

    close.onclick = () => {
        car.classList.remove('salon1')
        document.querySelector('.down1').classList.remove('topt')
        document.querySelector('.score').classList.remove('none')
        document.querySelector('.temp').classList.remove('none')
        document.querySelector('.condition').classList.remove('none')
        document.querySelector('.version').classList.remove('none')
        document.querySelector('.type').classList.remove('salonbtn')
        document.querySelector('.down2').classList.remove('flex')
        document.querySelector('.btns').style.display = "none"
      
    } 
    let colors = {
    black: "./assets/img/black.svg",
    white: "./assets/img/white.svg",
    grey: "./assets/img/grey.svg"
}
let btnss = document.querySelectorAll('button[data-tesla]')
let img = document.querySelector('.carImg')

btnss.forEach(btn => {
    btn.onclick = () => {
        let key = btn.innerHTML
        img.style.backgroundImage = `url(${colors[key]})`
    }
})
let scoreTxt = document.querySelector('.flash')
let scoreUP = document.querySelector('.score .up')
let scoreDown = document.querySelector('.score .down')
let zapas = document.querySelector('.zapas')

scoreUP.onclick = (event) => {
    let zapasTxtx = +zapas.innerHTML
    let scoreTxtx = +scoreTxt.innerHTML
    if (scoreTxtx >= 60) {
        scoreTxt.innerHTML = scoreTxtx + 20 
        zapas.innerHTML = zapasTxtx - 20
    } 
    if(scoreTxtx === 200) {
        scoreTxt.innerHTML = '22O'
    }
}
scoreDown.onclick = (event) => {
    let zapasTxtx = +zapas.innerHTML
    let scoreTxtx = +scoreTxt.innerHTML
    if (scoreTxtx = 220) {
        scoreTxt.innerHTML = scoreTxtx - 20
        // console.log('rerer');
        }
}
