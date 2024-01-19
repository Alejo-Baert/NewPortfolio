import { useCustomCursor } from "../context/CustomCursorContext"

import { styles } from "../styles"

const About = () => {

  const { textEnter, textLeave } = useCustomCursor()
  const { miniTitle, strokeEffect, notStroke } = styles

  return (
    <section className="mix-blend-difference min-[320px]:pt-20 sm:pt-0" id="about">
      <h1 className={miniTitle}>About me</h1>
      <div className={`${strokeEffect} flex flex-col items-center gap-16 lg:text-[48px] sm:text-[32px] text-[24px] w-full text-center px-4`}>

        <p
          className="lg:leading-[72px] leading-[36px]"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Hi! I’m <span className={notStroke}>Alejo Baert</span>,
          <br />
          a designer based in
          <br />
          <span className={notStroke}>Buenos Aires, Argentina</span>
        </p>

        <p
          className="lg:leading-[72px] leading-[36px]"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Passionate about
          <br />
          <span className={notStroke}>Web Development</span>
          <br />
          and {" "}
          <span className={notStroke}>UI Design</span>
        </p>

        <p
          className="lg:leading-[72px] leading-[36px]"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          I am an <span className={notStroke}>enthusiastic person</span>
          <br />
          who likes professional challenges
        </p>

      </div>
    </section>
  )
}

export default About