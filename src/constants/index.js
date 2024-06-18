import argentina from '../assets/img/projects/argentina.png'
import firstportfolio from '../assets/img/projects/firstportfolio.png'
import lyriks from '../assets/img/projects/lyriks.png'
import milei from '../assets/img/projects/milei.png'
import pp1 from '../assets/img/projects/pp1.png'
import preciosabio from '../assets/img/projects/preciosabio.png'
import juncos from '../assets/img/projects/juncos.png'
import jump from '../assets/img/projects/jump.png'
import sochic from '../assets/img/projects/sochic.png'
import futbolapp1 from '../assets/img/projects/futbolapp1.png'
import resumidor from '../assets/img/projects/resumidor.png'
import futbolapp2 from '../assets/img/projects/futbolapp2.png'

import { linkedin, instagram, behance, github, dotAzul, dotRojo } from "../assets";

export const imageProjects = [
    { img: jump, titulo: 'Jump', año: '2024', numero: '#10', link: 'https://proyectojump.com/' },
    { img: juncos, titulo: 'Juncos', año: '2024', numero: '#9', link: 'https://juncosproducciones.com.ar/' },
    { img: preciosabio, titulo: 'Precio Sabio', año: '2023', numero: '#8', link: 'https://preciosabio.netlify.app/' },
    { img: resumidor, titulo: 'Resumidor IA', año: '2023', numero: '#7', link: 'https://ab-resumidor-ia.netlify.app/' },
    { img: futbolapp1, titulo: 'Futbol Argentino App', año: '2023', numero: '#6', link: 'https://futbol-argentino-app.vercel.app/' },
    // { id: 3, img: milei, titulo: 'Milei: Juego de Memoria', año: '2023', numero: '#6', link: 'https://mileimemoria.netlify.app/' },
    { img: firstportfolio, titulo: 'First Portfolio', año: '2022', numero: '#5', link: 'https://firstalejobaert.netlify.app/' },
    { img: lyriks, titulo: 'Lyriks', año: '2022', numero: '#4', link: 'https://lyriks-alejobaert.netlify.app/' },
    { img: argentina, titulo: 'Argentina', año: '2022', numero: '#3', link: 'https://argentina-website.netlify.app/' },
    { img: sochic, titulo: 'So Chic', año: '2021', numero: '#2', link: 'https://sochic.netlify.app/' },
    { img: pp1, titulo: 'PP1', año: '2020', numero: '#1', link: 'https://alejobaert.neocities.org/' },
]

export const options = [
    { id: 1, title: 'About', dot: dotAzul, id:"about" },
    { id: 2, title: 'Knowledge', dot: dotRojo, id:"knowledge" },
    { id: 3, title: 'Projects', dot: dotAzul, id:"projects" },
    { id: 4, title: 'Contact', dot: dotRojo, id:"contact" },
]

export const email = 'mailto:alejobaert@outlook.com?subject=SendMail&body=Description'

export const medias = [
    { id: 1, title: 'Linkedin', icon: linkedin, dot: dotAzul, position: 'left-0', link: 'https://www.linkedin.com/in/alejobaert/' },
    { id: 2, title: 'Instagram', icon: instagram, dot: dotRojo,  position: 'left-[82px]', link: 'https://www.instagram.com/aleebaert/' },
    { id: 3, title: 'Behance', icon: behance, dot: dotAzul, position: 'right-[82px]', link: 'https://www.behance.net/alejobaert' },
    { id: 4, title: 'Github', icon: github, dot: dotRojo, position: 'right-0', link: 'https://github.com/Alejo-Baert' },
]