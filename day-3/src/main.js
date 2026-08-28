import gsap from 'gsap'

// ✅ 1st 



/* gsap.to('.box',{
  x:700,
  duration:1.5,
  stagger:{
    each:0.1,
    from:'center'
  }
}) */
  
// ✅ 2nd 

// gsap.from('h1 span',{
//   yPercent:100,
//   // xPercent:100,
//   // y:100,
//   opacity:0,
//   duration:1,
//   delay:0.5,
//   ease:'expo.out',
//   stagger:{
//     each:0.06,
//     from:'center'
//   }
// })
// // ✅ 2nd Timeline
// const tl = gsap.timeline()
// tl.to('.box1',{
//   x:700,
//   duration:1
// }).to('.box2',{
//   x:700,
//   duration:1.5,
//   stagger:{
//     each:0.1,
//     from:'center'
//   }
// }).to('.box3',{
//   x:700,
//   duration:1.5,
//   stagger:{
//     each:0.1,
//     from:'center'
//   },
// },"<").to('.box4',{
//   x:700,
//   duration:1.5,
//   stagger:{
//     each:0.1,
//     from:'center'
//   }
// }) 

let count = 0;
const loaderCounter = document.querySelector('.loaderCounter h1')
const interval = setInterval(()=>{
  count++;
  loaderCounter.innerHTML=`${count}%`;

  if(count === 100){
     clearTimeout(interval)
     landingAnimation()
  }

},20)

function landingAnimation(){
  const tl = gsap.timeline()
  tl.to('.loaderCounter',{
    opacity:0,
    duration:1.6,
    ease:'power3.out'
  }).to(".loading",{
    yPercent:-100,
    duration:1,
    ease:'expo.out'
  },"-=0.9").from('.background img',{
    scale:1.2,
    duration:1.2,
    ease:"expo.out"
  },'-=0.6').from('.heading h1',{
    yPercent:200,
    duration:1.6,
    ease:'expo.inOut',
    stagger:{
      each:0.6,
      from:'center'

    }
  },"-=0.7").from('.subHeading h2',{
     yPercent:200,
    duration:1.2,
    ease:'expo.inOut'

  },'-=0.6')

}


