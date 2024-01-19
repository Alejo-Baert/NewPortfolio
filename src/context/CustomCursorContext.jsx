import { createContext, useContext, useState, useEffect } from 'react'

const CustomCursorContext = createContext()

export function useCustomCursor() {
    return useContext(CustomCursorContext)
}

export default function CustomCursorProvider({ children }) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState('default')

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove)

        return () => window.removeEventListener("mousemove", mouseMove)
    }, [])

    const textEnter = () => setCursorVariant("text")
    const textLeave = () => setCursorVariant("default")

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            mixBlendMode: "difference",
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            mixBlendMode: "difference",
        }
    }

    const cursorState = {
        textEnter,
        textLeave,
        variants,
        cursorVariant,
    }

    return (
        <CustomCursorContext.Provider value={cursorState}>
            {children}
        </CustomCursorContext.Provider>
    )
}