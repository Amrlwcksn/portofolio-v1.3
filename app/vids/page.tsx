'use clinet'
import FadeContent from "../components/FadeContent/FadeContent";
import Link from "next/link";

const phots =()=>{
 return(
    <>
    <nav className="py-4 sticky top-0 z-50 bg-white shadow-sm">
      <FadeContent>

        <div className="md:px-60 px-8 ">
          {/* Logo */}
          <div className="font-bold text-gray-800 text-2xl">
            <a href="/" className="text-5xl hover:cursor-pointer">Portofolio</a>
            <p className="text-xs text-gray-500 font-sans">Craafting digital experience</p> 
          </div>
        </div>
        </FadeContent>
    </nav>

    <div className="px-8 mt-10 flex justify-center md:px-40 font-sans">
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-x-6 border-2 border-zinc-300 hover:transition-all duration-300 p-2 rounded-3xl w-full max-w-fit mx-auto">
      <Link href="/phots">
        <button className="hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white w-full sm:w-auto">
          Foto
        </button>
      </Link>
      <Link href="/video">
        <button className="hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white w-full sm:w-auto">
          Video
        </button>
      </Link>
    </div>
    </div>

    <div className="px-8  md:px-40">
      <div className="font-sans text-center mt-10">
        <a href="https://www.instagram.com/amirulwicaksono_/?igsh=MWtvNndhN29memxnbA%3D%3D#" className="underline hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:text-blue-600 w-full sm:w-auto">See on Instagram</a>
      </div>
    </div>

    {/* footer */}
    <div className="fixed bottom-0 left-0 w-full px-8 py-5 font-sans md:px-60 bg-white shadow-md">
      <h1 className="font-medium text-center text-gray-600 text-xs">
        © 2025 Ahmad Amirul Wicaksono. All rights reserved.
      </h1>
    </div>
    </>
 )
}

export default phots;