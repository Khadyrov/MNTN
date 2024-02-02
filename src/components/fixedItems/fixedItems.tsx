import './fixedItems.scss';
import instagramIcon from '../../icons/instagram.svg';
import twitterIcon from '../../icons//twitter.svg';
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const FixedItems: React.FC = () => {

  const fixedItemsRef = useRef(null)
  
  useLayoutEffect(() => {
    gsap.context(() => {

      gsap
        .timeline()
        .fromTo('.followUs__text' ,
          {x: -20, opacity: 0, duration: 0.5}, {x: 0, opacity: 1}
        )
        .fromTo('.instagramIcon' ,
          {x: -20, opacity: 0, duration: 0.4}, {x: 0, opacity: 1},
        )
        .fromTo('.twitterIcon' ,
          {x: -20, opacity: 0, duration: 0.4}, {x: 0, opacity: 1}
        );

      gsap
        .timeline()
        .fromTo('.start' ,
          {y: -30, opacity: 0,duration: 0.4 }, {y: 0, opacity: 1}
        )
        .fromTo('.one' ,
          {y: -30, opacity: 0,duration: 0.4 }, {y: 0, opacity: 1}
        )
        .fromTo('.two' ,
          {y: -30, opacity: 0,duration: 0.4 }, {y: 0, opacity: 1}
        )
        .fromTo('.three' ,
          {y: -30, opacity: 0,duration: 0.4 }, {y: 0, opacity: 1}
        )



    }, fixedItemsRef)
  })
  return (

    <div className="fixedItems"  ref={fixedItemsRef}>

      <div className="followUs">
        <div className="followUs--transform">
          <div className="followUs__text"> Follow Us</div>
          <div className="followUs__icons">
          <a className="followUs__icon" href='#'>
            <img className='followUs__icon__img instagramIcon' src={instagramIcon} alt="icon"  />
          </a>
          <a className="followUs__icon" href='#'>
            <img className='followUs__icon__img twitterIcon ' src={twitterIcon} alt="icon" />
          </a>
          
        </div>
        </div>
      </div>

      <div className="slider">
        <a className="slider__items start borderLine">Start</a>
        <a className="slider__items one">01</a>
        <a className="slider__items two">02</a>
        <a className="slider__items three">03</a>
      </div>

    </div>

  )
}

export default FixedItems