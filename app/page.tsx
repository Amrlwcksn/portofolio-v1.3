'use client'
import FadeContent from "./components/FadeContent/FadeContent";
import Clock from "./components/clock"


export default function Home() {
  return (
    <>
    {/* Navbar */}

    {/* Headline */}

    <div className="px-8 py-20 md:px-40">
      <FadeContent>
      <img src="/images/wicaksono.png" className="w-20 h-full rounded-4xl" alt="" />
      </FadeContent>
      <FadeContent>
      <h1 className="text-4xl md:text-5xl mt-5">Digital Product Wiz</h1>
      <h1 className="text-4xl md:text-5xl -mt-1">Making cool photos, </h1>
      <h1 className="text-4xl md:text-5xl -mt-1"> vids & websites happen.</h1>
      <p className="font-sans mt-3 text-neutral-500">I'm Ahmad Amirul Wicaksono. <br />
      From code to camera — Blending tech & creativity for impact, <br />
      </p>
      <p className="font-sans text-neutral-500 text-xs">
      Mahasiswa 
      di 
      Universitas 
      PGRI 
      Semarang 
      yang 
      sedang 
      menempuh

      pendidikan 
      pada 
      program 
      studi 
      Pendidikan 
      Teknologi 
      Informasi.
      </p>
      <Clock></Clock>
      </FadeContent>

    </div>

    {/* vidsfoto  */}
    <div className="px-8 py-10 mt-5 font-sans md:px-40">
    <FadeContent>
      <h1 className="font-medium">⭐Vids&photos</h1>
      <div>
        <img src="/images/gambar8.jpg" alt="" className="rounded-t-lg" />
        <img src="/images/gambar9.jpg" className="mt-2 rounded-b-lg" alt="" />
      </div>
      <div className="mt-5">
        <a href="/vidsphots" className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer">More</a>
      </div>
      </FadeContent>
    </div>

    {/* web */}
    <div className="px-8 py-5 font-sans md:px-40">
    <FadeContent>
      <h1 className="font-medium">⭐Web pages</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-2 justify-items-center">
        <img src="/images/web1.png" alt="" className="w-40 md:w-48 lg:w-56 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" />
        <img src="/images/web2.png" alt="" className="w-40 md:w-48 lg:w-56 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" />
        <img src="/images/web3.png" alt="" className="w-40 md:w-48 lg:w-56 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" />
        <img src="/images/web4.png" alt="" className="w-40 md:w-48 lg:w-56 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg" />
      </div>
      <div>
        <span className="text-xs text-gray-500 italic ">
        Tampilan ini merupakan prototipe website yang masih dalam tahap pengembangan. Fungsionalitas akhir mungkin berbeda dari versi final.
        </span>
      </div>
      <div className="flex justify-center ">
        <a href="https://curugsewu.vercel.app/" className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer">View</a>
      </div>
      </FadeContent>
    </div>

    {/* experience */}
    <div className="px-8 py-5 font-sans md:px-40 mt-15">
    <FadeContent>
      <h1 className="font-medium">
      Experience
      </h1>
      <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
        <h1 className="whitespace-nowrap">
          Freelance Vids & Photos
        </h1>

        {/* Garis horizontal */}
        <div className="flex-1 h-px bg-gray-400"></div>

        <h1 className=" text-gray-600 italic whitespace-nowrap">
          2021 – Now
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
        <h1 className="whitespace-nowrap">
          Frontend | Building as I learn
        </h1>

        {/* Garis horizontal */}
        <div className="flex-1 h-px bg-gray-400"></div>

        <h1 className=" text-gray-600 italic whitespace-nowrap">
          2025 – Now
        </h1>
      </div>
      </FadeContent>
    </div>

    {/* komunitas  */}
    <div className="px-8 py-5 font-sans md:px-40 mt-15">
    <FadeContent>
      <h1 className="font-medium">
      Tech Events I've Joined
      </h1>
      <div className="mt-3 flex justify-center">
        <img src="/images/event1.jpg" className=" w-70 h-full md:w-48 lg:w-56 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg" alt="" />
      </div>
      <div className="mt-3">
        <h1 className="font-bold">
          Google Developer Gorup <span className="text-xs text-gray-500">semarang</span>
        </h1>
        <p className="text-neutral-500">
        adalah komunitas global berisi para pengembang (developer), desainer, dan tech enthusiast yang ingin belajar, berbagi, dan berkembang bersama lewat berbagai kegiatan seputar teknologi, khususnya yang berhubungan dengan ekosistem Google.
        </p>
      </div>
      <button  onClick={() => window.open('https://gdg.community.dev/')} className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer">More</button>
      </FadeContent>
    </div>

    {/* hubungi saya */}
    <div className="px-8 py-5 font-sans md:px-40 mt-15">
    <FadeContent>
      <h1 className="font-medium">
        Hubungi saya
      </h1>
      <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
        <a href="mailto:amrlwcksn@gmail.com" className=" font-medium underline hover:text-blue-400 whitespace-nowrap">
          Email
        </a>
        <div className="flex-1 h-px bg-gray-400"></div>

        <h1 className=" text-gray-600 italic whitespace-nowrap text-xs">
          amrlwcksn@gmail.com
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
        <a href="https://www.instagram.com/amirulwicaksono_/?igsh=MWtvNndhN29memxnbA%3D%3D#" className=" font-medium underline hover:text-blue-400 whitespace-nowrap">
          instagram
        </a>
        <div className="flex-1 h-px bg-gray-400"></div>

        <h1 className=" text-gray-600 italic whitespace-nowrap text-xs">
          @amirulwicaksono_
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
        <a href="https://wa.me/6287766422358" className="font-medium underline hover:text-blue-400 whitespace-nowrap">
        WhatsApp
        </a>

        <div className="flex-1 h-px bg-gray-400"></div>

        <h1 className=" text-gray-600 italic whitespace-nowrap text-xs">
          Business
        </h1>
      </div>
      </FadeContent>
    </div>

    {/* footer */}
    <div className="px-8 py-5 font-sans md:px-40 mt-13">
      <h1 className="font-medium text-center text-gray-600 text-xs">
      © 2025 Ahmad Amirul Wicaksono. All rights reserved.
      </h1>
    </div>

    </>
  );
}
