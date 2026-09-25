import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Animation = ({children}) => {
  const container = useRef();
  useGSAP(()=>{
    gsap.to(container.current,{
      x:700,
      duration:1
    },{scope:container})

  })

  return (
    <div ref={container}>{children}</div>
  )
}

export default Animation