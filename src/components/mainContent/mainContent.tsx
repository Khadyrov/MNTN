import arrow from '../../icons/arrow.svg'
import './mainContent.scss'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'



const MainContent :React.FC = () => {
   const mainContentReff = useRef(null)
  
  useLayoutEffect(() => {
    gsap.context(() => {

      gsap
        .timeline()
        .fromTo('.mainContent__subtitle' ,
          {x: -40, opacity: 0, duration: 0.4}, {x: 0, opacity: 1}
        )
        .fromTo('.mainContent__title' ,
          {x: -40, opacity: 0, duration: 0.4}, {x: 0, opacity: 1},
        )
        .fromTo('.mainContent__footer' ,
          {x: -40, opacity: 0, duration: 0.4}, {x: 0, opacity: 1}
        )


    }, mainContentReff)
  })
  return (
    <section className="mainContent" ref={mainContentReff}>
      <h4 className="mainContent__subtitle">
        A HIKING GUIDE
      </h4>
      <h1 className="mainContent__title">
        Be Prepared For The Mountains And Beyond!
      </h1>
      <footer className="mainContent__footer">
        scroll down 
        <div className="animated-item">
          <img src={arrow} alt="arrow" />
        </div>
      </footer>
    </section>
  )
}

export default MainContent