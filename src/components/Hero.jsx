import { useCustomCursor } from '../context/CustomCursorContext';
import { styles } from './../styles';

const Hero = ({m}) => {

  const { textEnter, textLeave } = useCustomCursor()

  /* const options = [
    { id: 1, title: 'About' },
    { id: 2, title: 'Knowledge' },
    { id: 3, title: 'Projects' },
    { id: 4, title: 'Contact' },
  ] */

  return (
    <section className="min-h-screen text-center flex flex-col justify-center items-center mix-blend-difference">
      <h1 className={styles.miniTitle}>ALEJO BAERT</h1>

      <div onMouseEnter={textEnter} onMouseLeave={textLeave}>
        <div className={`${styles.strokeEffect} flex flex-col gap-2 z-10 sm:text-[70px] text-[40px] min-[320px]:text-[45px]`}>
          <m.div
            className={`flex flex-col gap-2 ${styles.hoverNotStroke} transition-colors duration-300`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            <span>WEB</span>
            <span>DESIGNER</span>
          </m.div>

          <span className="stroke-white-not font-thin text-[--white]">&</span>

          <m.div
            className={`flex flex-col gap-2 ${styles.hoverNotStroke} transition-colors duration-300`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            <span>FULLSTACK</span>
            <span>DEVELOPER</span>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Hero