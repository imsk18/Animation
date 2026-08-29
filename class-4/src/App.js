import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const reverse = document.querySelector('.reverse')
const restart = document.querySelector('.restart')
const seek = document.querySelector('.seek')

// const tl = gsap.timeline({paused:true});

// play.addEventListener("click",()=>{
//    tl.play()
// })
// pause.addEventListener("click",()=>{
//    tl.pause()
// })
// reverse.addEventListener("click",()=>{
//    tl.reverse()
// })
// restart.addEventListener("click",()=>{
//    tl.restart()
// })
// restart.addEventListener("click",()=>{
//    tl.seek(2)
// })



// tl.to(".box",{
//   y:700,
//   duration:3,
//   stagger:{
//     each:0.6,
//     from:"start"
//   }

// })

gsap.registerPlugin(ScrollTrigger)

gsap.set(".imgDiv",{
   scale:0.2
})
gsap.set(".content",{
   gap:"25rem"
})

const tl = gsap.timeline({
    scrollTrigger:{
      trigger:".page2",
      start:"top 25% ",
      end:"top -10%",
      scrub:true
   }
})


tl.to(".imgDiv",{
   scale:1,
   ease:"power4.Out",
  
}).to(".content",{
   gap:"2rem"
},"<")



