import { styles } from "../styles"
import { react, nextjs, figma, tailwind, javascript, dotAzul, dotRojo, angular } from '../assets'
import OptionCard from "./OptionCard"
// import { useCustomCursor } from "../context/CustomCursorContext"

const Knowledge = () => {

    // const { textEnter, textLeave } = useCustomCursor()

    const tools = [
        { id: 0, title: 'Angular', icon: angular, dot: dotRojo },
        { id: 1, title: 'React', icon: react, dot: dotAzul },
        { id: 2, title: 'NextJS', icon: nextjs, dot: dotRojo },
        { id: 3, title: 'Tailwind CSS', icon: tailwind, dot: dotAzul },
        { id: 4, title: 'Javascript', icon: javascript, dot: dotRojo },
        { id: 5, title: 'Figma', icon: figma, dot: dotAzul },
    ]

    return (
        <section className="min-h-screen flex items-center justify-center w-full my-8" id="knowledge">
            <div className="w-full">
                <h1 className={styles.miniTitle}>Knowledge</h1>
                <div className={`${styles.strokeEffect} border-t border-[rgb(250,250,250,0.3)] lg:mx-16 mx-4`}>
                    {tools.map(tool => (
                        <OptionCard
                            // textEnter={textEnter}
                            // textLeave={textLeave}
                            key={tool.id}
                            dotIcon={tool.dot}
                            title={tool.title}
                            icon={tool.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Knowledge