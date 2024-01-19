import { arrowTop } from "../assets"

const Footer = () => {
    return (
        <footer className="text-[--white] text-center pb-16 lg:text-base lg:text-[12px] text-[10px] relative">

            <a href="#top">
                <div className='absolute bottom-5 right-10 lg:transition-all border lg:hover:bg-gray-400 rounded-full p-2'>
                    <img
                        src={arrowTop}
                        className="w-[20px]"
                        alt="arrowTop"
                    />
                </div>
            </a>

            <p className="opacity-75">© Copyright 2023 - <span className="font-bold">Alejo Baert</span> | All rights reserved</p>
        </footer>
    )
}

export default Footer