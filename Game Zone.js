const cursor=document.querySelector(".cursor")
const holes=[...document.querySelectorAll(".hole")]
const scoreEl=document.querySelector('#score')
const sound=new Audio("smash.mp3")
const start= document.getElementById('start')
const pause=document.getElementById('stop')
const musicoff=document.getElementById('musc_btn')



let score=0

function run(){
    const i= Math.floor(Math.random() * holes.length)
    const hole=holes[i]
    let timer=null

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src='mole.png'

    img.addEventListener('click',()=>{
        score+=2
        sound.play()
        scoreEl.textContent=`score:+ ${score}`
        img.src='mole-whacked.png'
        clearTimeout(timer)
        setTimeout(()=>{
            hole.removeChild(img)
        run()

        },500)

    })

    hole.appendChild(img)
    

    timer =setTimeout(()=>{
        hole.removeChild(img)
        run()
    },1200)
    
    
}
run()




window.addEventListener('mouseover' ,e =>{
    cursor.style.top =e.pageY+'px'
    cursor.style.left=e.pageX + 'px'
    
})

window.addEventListener('mousedown' ,()=>{
    cursor.classList.add('active')
})

window.addEventListener('mouseup',()=>{
    cursor.classList.remove('active')
})