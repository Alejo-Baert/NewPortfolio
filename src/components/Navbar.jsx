import { useState } from "react";
import { logoBlack, hamburguer, emailIconWhite, SoundOn, mute, close } from "../assets";
// import { useCustomCursor } from "../context/CustomCursorContext";
import { styles } from "../styles";
import { useSound } from "../howler/song";
import { email, medias, options } from "../constants";

const Navbar = ({ isContactVisible }) => {

  const [isOpen, setIsOpen] = useState(false)
  const { toggleSound, isActive } = useSound()

  // bg-gradient-to-tr hover:from-[rgb(96,255,207,0.4)] hover:via-[rgb(34,34,34,0.6)] hover:to-[rgb(255,54,54,0.4)]
  // const { textEnter, textLeave } = useCustomCursor()

  return (
    <>
      <nav className="lg:flex hidden justify-center items-center">

        {/* Modo Oscuro */}

        {/* <div className="fixed top-5 left-10 z-10">
          <span onClick={() => setIsActiveDarkMode(!isActiveDarkMode)}>
            <div className={`bg-[--white] border border-black hover:bg-gray-400 transition-colors duration-300 rounded-full p-2 cursor-pointer`}>
              <img src={modeBlack} className="w-[20px]" alt="" />
            </div>
          </span>
        </div> */}

        <div className="fixed top-5 left-10 z-10">
          <span onClick={toggleSound}>
            <div className={`border hover:bg-gray-400 transition-colors duration-300 rounded-full p-2 cursor-pointer`}>
              <img src={isActive ? SoundOn : mute} className="w-[20px]" alt="" />
            </div>
          </span>
        </div>

        <div className={`z-10 fixed top-3 text-white transition-all ${isContactVisible ? 'translate-y-[-100px]' : 'translate-y-0'} backdrop-blur bg-[rgb(250,250,250,0.3)] rounded-full p-8 shadow-lg`}>
          <div className="relative w-[400px] flex items-center justify-center">

            {medias.map(media => (
              <a href={media.link} target="blank" key={media.id}>
                <div className={`${media.position} hover:bg-[--black] absolute top-[50%] translate-y-[-50%] flex justify-center items-center bg-[rgb(34,34,34,0.5)] transition-colors duration-300 rounded-full p-3 `}>
                  <img src={media.icon} alt={media.title} className="w-[26px]" />
                </div>
              </a>
            ))}

            <span className="bg-[--white] p-4 rounded-full absolute shadow-xl">
              <img
                src={logoBlack}
                alt="logo"
                className="w-10 h-10"
              />
            </span>

          </div>
        </div>

        <div className="fixed top-5 right-10 z-10">
          <a href={email} target="blank">
            <div className={`border hover:bg-gray-400 transition-colors duration-300 rounded-full p-2 cursor-pointer`}>
              <img src={emailIconWhite} className="w-[20px]" alt="" />
            </div>
          </a>
        </div>

        {/* <nav className="fixed top-0 w-full lg:px-16 px-8 py-4 text-white min-w-[320px] z-10">
        <div className="flex items-center justify-center gap-8">

          <span className="flex place-content-center items-center z-10 backdrop-blur-xl bg-[rgb(250,250,250,0.2)] p-4 rounded-full shadow-md" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            <img
              src={logoWhite}
              alt="logo"
              className="lg:w-10 lg:h-10 w-8 h-8"
            />
          </span>

          <div className="lg:flex hidden backdrop-blur-xl bg-[rgb(250,250,250,0.2)] rounded-full shadow-md" onMouseEnter={textEnter} onMouseLeave={textLeave}>
            {options.map(option => (
              <div key={option.id} className='px-6 py-3 rounded-full cursor-pointer font-semibold'>
                <span>{option.title}</span>
              </div>
            ))}
          </div>

          <div className="lg:hidden block backdrop-blur-xl bg-[rgb(250,250,250,0.2)] p-2 rounded-full shadow-md cursor-pointer">
            <img
              src={hamburguer}
              className="w-8"
              alt="hamburger"
            />
          </div>
        </div>
      </nav> */}

      </nav>

      <nav className="lg:hidden block fixed top-0 w-full lg:px-16 px-8 py-4 text-white min-w-[320px] z-10 bg-[rgb(34,34,34,0.4)] backdrop-blur-sm">
        <div className="flex items-center justify-between">

          <div className="z-10">
            <span onClick={toggleSound}>
              <div className={`border lg:hover:bg-gray-400 lg:transition-colors lg:duration-300 rounded-full p-2 cursor-pointer`}>
                <img src={isActive ? SoundOn : mute} className="w-[20px]" alt="" />
              </div>
            </span>
          </div>

          <span className="bg-[--white] border p-3 rounded-full shadow-md">
            <img
              src={logoBlack}
              alt="logo"
              className="w-8 h-8"
            />
          </span>

          <div className="z-10">
            <span onClick={() => setIsOpen(!isOpen)}>
              <div className={`border lg:hover:bg-gray-400 lg:transition-colors lg:duration-300 rounded-full p-2 cursor-pointer`}>
                <img src={hamburguer} className="w-[20px]" alt="" />
              </div>
            </span>
          </div>
          
        </div>
      </nav>

      <div className={`${isOpen ? 'translate-x-0' : 'translate-x-[100%]'} z-10 lg:hidden block fixed will-change-transform bg-[--black] h-[100dvh] w-screen transition-transform duration-700`}>
        <div className="z-10">
          <span onClick={() => setIsOpen(!isOpen)}>
            <div className={`fixed top-10 right-10 border lg:hover:bg-gray-400 lg:transition-colors lg:duration-300 rounded-full p-2 cursor-pointer`}>
              <img src={close} className="w-8" alt="" />
            </div>
          </span>
        </div>

        <div className="flex flex-col h-[100dvh] justify-center gap-8 px-8">
          {options.map(option => (
            <div className="flex items-center gap-8" key={option.id}>
              <img src={option.dot} className="w-8" alt="" />
              <a href={`#${option.id}`} className="no-underline">
                  <span
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${styles.strokeEffect} md:text-[72px] text-[32px]`}
                  >
                      {option.title}
                  </span>
                </a>
            </div>
          ))}
        </div>
        {/* {medias.map(media => (
          <div className="flex flex-col items-end justify-center gap-8 px-8" key={media.id}>
            <img src={media.icon} className="w-8" alt="" />
            <span className={`${styles.strokeEffect} text-[72px]`}>
              {media.title}
            </span>
          </div>
        ))} */}
      </div>
    </>
  )
}

export default Navbar