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

gsap.from('h1 span',{
  yPercent:100,
  // xPercent:100,
  // y:100,
  opacity:0,
  duration:1,
  delay:0.5,
  ease:'expo.out',
  stagger:{
    each:0.06,
    from:'center'
  }
})
// ✅ 2nd Timeline
const tl = gsap.timeline()
tl.to('.box1',{
  x:700,
  duration:1
}).to('.box2',{
  x:700,
  duration:1.5,
  stagger:{
    each:0.1,
    from:'center'
  }
}).to('.box3',{
  x:700,
  duration:1.5,
  stagger:{
    each:0.1,
    from:'center'
  },
},"<").to('.box4',{
  x:700,
  duration:1.5,
  stagger:{
    each:0.1,
    from:'center'
  }
}) 


