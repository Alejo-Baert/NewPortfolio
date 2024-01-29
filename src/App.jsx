import { useEffect, useRef, useState } from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'

import { About, Navbar, Hero, Knowledge, Projects, Contact, Footer } from './components'
import { heroBg, mainBg } from "./assets"

import { useCustomCursor } from './context/CustomCursorContext'

const App = () => {

  //ejemplo
  const [isContactVisible, setIsContactVisible] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  const contactRef = useRef()
  const { variants, cursorVariant } = useCustomCursor()

  useEffect(() => {
    if (window.innerWidth > 768){

      const handleScroll = () => {
        setScrollY(window.scrollY)
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  useEffect(() => {
    if (window.innerWidth > 768){

      if (contactRef.current) {
        setIsContactVisible(scrollY > contactRef.current.offsetTop)
      }
      
    }
  }, [scrollY])


  // lg:cursor-none

  return (
    <LazyMotion features={domAnimation}>
      <main className="font-hat min-w-[320px]">
        
        {/* <div className={`h-screen absolute w-full bg-center bg-[--black] bg-blend-overlay ${isClicked ? 'z-[300] overflow-y-hidden' : 'hidden'} `} style={{ backgroundImage: `url(${grain})` }}>
            <div className='flex flex-col justify-center items-center h-screen gap-8'>
              <img src={logoWhite} alt="logo" className='w-16' />
              <button
                className='text-white font-thin border hover:bg-gray-400 transition-colors duration-300 rounded-full px-8 py-1 cursor-pointer uppercase tracking-[5px]'
                onClick={() => {
                  setIsClicked(!isClicked)
                  toggleSound()
                }}
              >
                Start
              </button>
            </div>
          </div> */}

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 , transition: { duration: 0.5 } }}
          >
            {/* ${isActiveDarkMode ? 'bg-[--white]' : ''}   */}
            <div className={`mix-blend-difference h-full  fixed top-0 transition-all duration-1000`} />

            <div className='lg:block hidden'>
              <m.div
                className={`h-[32px] w-[32px] rounded-[50%] bg-[--white] fixed top-0 left-0 pointer-events-none z-[100]`}
                variants={variants}
                animate={cursorVariant}
                transition={{ type: 'tween', ease: "backOut" }}
              />
            </div>

            <div className={`min-h-screen sm:bg-local bg-fixed bg-center bg-no-repeat bg-cover`} id="top" style={{ backgroundImage: `url(${heroBg})` }}>
              <Navbar
                isContactVisible={isContactVisible}
                // isActiveDarkMode={isActiveDarkMode}
                // setIsActiveDarkMode={setIsActiveDarkMode}
                // isClicked={isClicked}
              />  
              <Hero m={m} />
            </div>

            <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover mix-blend-difference" style={{ backgroundImage: `url(${mainBg})` }}>
              <About />
              <Knowledge />
              <Projects />
              <Contact contactRef={contactRef} />
              <Footer />
            </div>
          </m.div>

      </main>
    </LazyMotion>

  )
}

export default App