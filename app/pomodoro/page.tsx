import Link from "next/link"
import FadeContent from "../components/FadeContent/FadeContent"

import PomodoroTimer from "./Pomodoro"


const pomodoro = ()=>{
    return(
        <>
        <FadeContent>
        <nav className="py-4 sticky top-0 z-50 bg-white shadow-sm">
            <div className="md:px-60 px-8 ">
            {/* Logo */}
            <div className="font-bold text-gray-800 text-2xl">
                <a href="/" className="text-5xl hover:cursor-pointer">Portofolio</a>
                <p className="text-xs text-gray-500 font-sans">Craafting digital experience</p> 
            </div>
            </div>
        </nav>


        <div className="px-8 mt-20 md:px-60">
            <PomodoroTimer></PomodoroTimer>
        </div>

        <div className="px-8 py-10 font-sans md:px-60 mt-13">
            <h1 className="font-medium text-center text-gray-600 text-xs">
            © 2025 Ahmad Amirul Wicaksono. All rights reserved.
            </h1>
        </div>
        </FadeContent>


        </>
    )

}

export default pomodoro;