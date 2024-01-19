import { imageProjects } from "../constants"
// import { arrowUrl } from "../assets"

import { styles } from "../styles"
import { useCustomCursor } from "../context/CustomCursorContext"

const Projects = () => {

  const { textEnter, textLeave } = useCustomCursor()

  return (
    <section className="min-h-screen flex items-center justify-center  min-[320px]:pt-20 sm:pt-0" id="projects">
      <div>
        <h1 className={styles.miniTitle}>Projects</h1>

        <div className="flex flex-col gap-12 lg:mx-16 mx-8">
          {imageProjects.map(project => (
            <a href={project.link} key={project.id} target="blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>

              <div className="relative group cursor-pointer">

                <div className="absolute top-0 lg:group-hover:bg-[rgb(34,34,34,0.6)] w-full h-full rounded-xl transition-all duration-300" />

                <div className="min-[320px]:hidden sm:block z-[9] flex items-center gap-4 xl:shadow-md absolute xl:bottom-10 xl:-left-10 bottom-0 -left-0 text-[--black] xl:backdrop-blur xl:bg-[rgb(250,250,250,0.8)] bg-[--white] xl:rounded-md rounded-bl-md rounded-tr-md font-bold xl:text-[24px] xl:px-10 xl:py-5 px-6 py-4">
                  <div className="flex gap-2 items-center">
                    <span>{project.titulo}</span>
                    <span className="font-normal lg:text-base text-[12px]">({project.año})</span>
                  </div>
                  {/* <img
                    src={arrowUrl}
                    alt="arrow"
                    className="xl:w-8 w-6 border border-[--black] bg-[--white] rounded-full p-1"
                    loading="lazy"
                  /> */}
                </div>

                <p className="min-[320px]:hidden sm:block z-[9] xl:shadow-md absolute xl:top-10 xl:-right-10 top-0 right-0 text-[--black] xl:backdrop-blur xl:bg-[rgb(250,250,250,0.8)] bg-[--white]  xl:rounded-md rounded-bl-md rounded-tr-md font-bold xl:text-[48px] text-[24px] xl:p-6 p-4">
                  {project.numero}
                </p>
                
                <img
                  src={project.img}
                  alt={project.titulo}
                  className="lg:max-w-[900px] w-full"
                  //  grayscale
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>

        {/* <div className="flex flex-col gap-12">
          {imageProjects.map(project => (
            <a href={project.link} key={project.id} target="blank" onMouseEnter={textEnter} onMouseLeave={textLeave}>

              <div className="cursor-pointer flex gap-8 items-center lg:mx-16 mx-8">
                <img
                  src={project.img}
                  alt={project.titulo}
                  className="lg:max-w-[700px] max-w-full grayscale"
                  loading="lazy"
                />
                <span className="text-[--white] uppercase text-[36px]">
                  <p>{project.numero}</p>
                  <h1>{project.titulo}</h1>
                </span>
              </div>

            </a>
          ))}
        </div> */}


      </div>
    </section>
  )
}

export default Projects