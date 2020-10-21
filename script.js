const container = document.getElementById("container")
const bird = document.getElementById("bird")
const pillarUp = document.getElementById("pillarUp")
const pillarDown = document.getElementById("pillarDown")
let timer;
const pillarHeightObj = {
    '34rem': '5rem',
    '30rem': '9rem',
    '25rem': '14rem',
    '20rem': '19rem',
    '15rem': '24rem',
    '10rem': '29rem',
    '5rem' : '34rem'
}
const objKeys = Object.keys(pillarHeightObj)
const objValues = Object.values(pillarHeightObj)

setTimeout(() => {
    bird.style.marginTop = "110%"
        
}, 500);

document.addEventListener("click", flyMobile)

function flyMobile(){
    clearTimeout(timer)
        bird.style.marginTop = "0rem"
       timer = setTimeout(()=>{
           bird.style.marginTop = "110%"
        },400)
}

pillarUp.addEventListener('animationiteration', changeHole)

function changeHole(){
    let topHeight = objKeys[Math.floor(Math.random() * objKeys.length)]
    let index = objKeys.indexOf(topHeight)
    pillarUp.style.height = topHeight
    pillarDown.style.height = objValues[index]    
}
   
document.addEventListener("keydown", fly)

function fly(e){
    if(e.keyCode === 38){
        clearTimeout(timer)
        bird.style.marginTop = "0rem"
       timer = setTimeout(()=>{
           bird.style.marginTop = "110%"
        },400)
        
    }
    
}

setInterval(() => {
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("margin-top"))
    let containerHeight = parseInt(window.getComputedStyle(container).getPropertyValue("height"))
    let pillarUpHeight = parseInt(window.getComputedStyle(pillarUp).getPropertyValue("height"))
    let pillarUp_BirdDistance = parseInt(window.getComputedStyle(pillarUp).getPropertyValue("margin-left"))
    let pillarDown_BirdDistance = parseInt(window.getComputedStyle(pillarDown).getPropertyValue("margin-left"))
    let pillarDownHeight = parseInt(window.getComputedStyle(pillarDown).getPropertyValue("height"))

    if(screen.width <= 500){
        if(birdTop === 0 || birdTop >= 380){
            endGame()   
        }
        else if(birdTop <= pillarUpHeight && pillarUp_BirdDistance >= 30 && pillarUp_BirdDistance <= 56){
            endGame()
        }
        else if(birdTop >= containerHeight - (pillarDownHeight + 20) && pillarDown_BirdDistance >= 24 && pillarDown_BirdDistance <= 56 ){
            endGame()
        }


    }
    else{
        if(birdTop === 0 || birdTop >= 476){
            endGame()   
        }
        else if(birdTop <= pillarUpHeight && pillarUp_BirdDistance >= 30 && pillarUp_BirdDistance <= 70){
           endGame()
        }
        else if(birdTop >= containerHeight - (pillarDownHeight + 20) && pillarDown_BirdDistance >= 30 && pillarDown_BirdDistance <= 70 ){
            endGame()
        }

    }
 
}, 10);

function endGame(){
    alert("over")
    bird.style.marginTop = '50%'
    bird.style.marginLeft = '5rem'
    pillarUp.style.marginLeft = '100%'
    pillarDown.style.marginLeft = '100%'
    setTimeout(() => {
        bird.style.marginTop = "110%"
            
    }, 500);

}