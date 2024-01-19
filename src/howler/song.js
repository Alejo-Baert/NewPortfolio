import { Howl } from 'howler'
import { useState, useEffect } from 'react'

const sound = new Howl({
    src: ['./audios/loopTheme.mp3'],
    loop: true,
    onload:true
})

export const useSound = () => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isActive) sound.play()
        else sound.pause()

        return () => {
            sound.stop()
        }
        
    }, [isActive])

    const toggleSound = () => {
        setIsActive((prev) => !prev)
    }

/*     const toggleSound = (newState) => {
        setIsActive(newState);
    }
     */

    return {
        toggleSound,
        isActive,
    }
}
