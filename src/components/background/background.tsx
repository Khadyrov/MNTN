import mountain from './images/mountain.png'
import cloud  from './images/cloud.png'
import human  from './images/human.png'
import './background.scss'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'



const Background = () => {
  gsap.registerPlugin(ScrollTrigger)
  
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: '.bg',
        start: "top top",
        end: "bottom ",
        scrub: 2,
      }
    })

    tl.fromTo(
      '.bg__image--cloud', 
      {y: 0, duration: 5},
      {yPercent: 20, duration: 5},
      0
    )
    
    tl.fromTo(
      '.bg__image--mountain', 
      {y: 0, duration: 5},
      {yPercent: 30, duration: 5},
      0
    )
    tl.fromTo(
      '.bg__image--human', 
      {y: 0, duration: 5},
      {yPercent: 40, duration: 5},
      0
    )
      
  }, [])




  
  return (
    <div className="bg">

      <img className="bg__image bg__image--cloud" src={cloud} alt="Cloud" />
      <img className="bg__image bg__image--mountain" src={mountain} alt="mountain" />
      <img className="bg__image bg__image--human" src={human} alt="human" />
    
    </div>
  )
}

export default Background