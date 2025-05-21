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
      <a href="/phots">
        <button className="hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white w-full sm:w-auto">
          Foto
        </button>
      </a>
      <a href="/vids">
        <button className="hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl hover:bg-blue-600 hover:text-white w-full sm:w-auto">
          Video
        </button>
      </a>
    </div>
    </div>

    <div className="px-8  md:px-40">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-5">
            <img src="../Images/gambar1.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="../Images/gambar2.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="../Images/gambar3.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="../Images/gambar4.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="../Images/gambar5.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="../Images/gambar6.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="../Images/gambar10.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="../Images/gambar11.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
        </div>
    </div>

    {/* footer */}
    <div className="px-8 py-5 font-sans md:px-60 mt-13">
      <h1 className="font-medium text-center text-gray-600 text-xs">
        © 2025 Ahmad Amirul Wicaksono. All rights reserved.
      </h1>
    </div>
    </>
 )
}

export default phots;