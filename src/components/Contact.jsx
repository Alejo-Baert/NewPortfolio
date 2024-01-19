import OptionCard from "./OptionCard"
import { emailIcon } from "../assets"

import { styles } from "../styles"
import { useCustomCursor } from "../context/CustomCursorContext"
import { email, medias } from "../constants"

const Contact = ({ contactRef }) => {

  const { textEnter, textLeave } = useCustomCursor()

  return (
    <section className="min-h-screen flex items-center justify-center" ref={contactRef} id="contact">
      <div className="w-full">
        <h1 className={styles.miniTitle}>Contact</h1>
        <div className={`border-t border-[rgb(250,250,250,0.3)] lg:mx-16 mx-4`}>
          {medias.map(media => (
            <a
              href={media.link}
              key={media.id}
              target="blank"
              className={`${styles.strokeEffect}`}
            >
              <OptionCard
                textEnter={textEnter}
                textLeave={textLeave}
                dotIcon={media.dot}
                title={media.title}
                icon={media.icon}
              />
            </a>
          ))}
        </div>

        <div className="flex sm:flex-row flex-col justify-center sm:gap-8 gap-4 mt-8 text-[--white] lg:text-[18px] text-base">
          <div className="flex flex-col items-center gap-4">
            <p>Contact me by <span className="font-bold">Email</span></p>
            <a href={email}>
              <span
                className="font-semibold flex gap-2 lg:text-[18px] text-[14px] lg:px-4 lg:py-2 px-2 py-1 shadow-md bg-[--white] hover:bg-[rgb(250,250,250,0.9)] transition-colors text-[--black] rounded-md"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                <img src={emailIcon} className="w-6" alt="email" />
                alejobaert@outlook.com
              </span>
            </a>
          </div>
          {/* <div className="flex flex-col items-center gap-2">
            <span>CV</span>
            <span className="font-semibold flex gap-2 lg:text-[18px] text-[14px] lg:px-4 lg:py-2 px-2 py-1 shadow-md bg-[--white] hover:bg-[rgb(250,250,250,0.9)] transition-colors text-[--black] rounded-md">
              <img src={download} className="w-6" alt="download" />
              Download
            </span>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Contact