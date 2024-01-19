import { styles } from "../styles"

// hover blanco en sólo en texto = w-fit

const OptionCard = ({ dotIcon, title, icon, textEnter, textLeave }) => {
    return (
        <div className="border-b border-[rgb(250,250,250,0.3)] lg:hover:bg-[rgb(34,34,34,0.5)] transition duration-150">
            <span
                className={`${styles.hoverNotStroke} flex justify-start items-center w-full lg:gap-8 gap-4 lg:text-[54px] text-[32px] p-4 py-6 transition-colors duration-300`}
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
            >
                <img
                    src={dotIcon}
                    className="lg:w-8 w-6"
                    alt="dot-icon"
                    loading="lazy"
                />

                <p>{title}</p>
                <img
                    src={icon}
                    className="lg:block hidden lg:w-12 lg:h-12 w-8 h-8"
                    alt={title}
                    loading="lazy"
                />
            </span>
        </div>
    )
}

export default OptionCard