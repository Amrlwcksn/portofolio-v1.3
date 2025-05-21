'use client'
import FadeContent from "./components/FadeContent/FadeContent";
import Clock from "./components/clock";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Navbar */}

      {/* Headline */}

      <div className="px-8 py-20 md:px-40">
        <FadeContent>
          <Image
            src="/images/wicaksono.png"
            width={80} // kira-kira setara dengan w-20
            height={80} // supaya proporsional, bisa disesuaikan kalau gambarnya gak kotak
            className="rounded-4xl"
            alt="Ahmad Amirul Wicaksono"
            loading="lazy"
          />
        </FadeContent>
        <FadeContent>
          <h1 className="text-4xl md:text-5xl mt-5">Digital Product Wiz</h1>
          <h1 className="text-4xl md:text-5xl -mt-1">Making cool photos, </h1>
          <h1 className="text-4xl md:text-5xl -mt-1"> vids & websites happen.</h1>
          <p className="font-sans mt-3 text-neutral-500">
            Im Ahmad Amirul Wicaksono. <br />
            From code to camera — Blending tech & creativity for impact, <br />
          </p>
          <p className="font-sans text-neutral-500 text-xs">
            Mahasiswa di Universitas PGRI Semarang yang sedang menempuh pendidikan pada
            program studi Pendidikan Teknologi Informasi.
          </p>
          <Clock />
        </FadeContent>
      </div>

      {/* vidsfoto  */}
      <div className="px-8 py-10 mt-5 font-sans md:px-40">
        <FadeContent>
          <h1 className="font-medium">⭐Vids&photos</h1>
          <div>
            <Image
              src="/images/gambar8.jpg"
              alt="Vids&Photos 1"
              className="rounded-t-lg"
              loading="lazy"
              width={640} // Contoh width, sesuaikan ukuran asli gambar
              height={360} // Contoh height
            />
            <Image
              src="/images/gambar9.jpg"
              alt="Vids&Photos 2"
              className="mt-2 rounded-b-lg"
              loading="lazy"
              width={640}
              height={360}
            />
          </div>
          <div className="mt-5">
            <a
              href="/vidsphots"
              className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer"
            >
              More
            </a>
          </div>
        </FadeContent>
      </div>

      {/* web */}
      <div className="px-8 py-5 font-sans md:px-40">
        <FadeContent>
          <h1 className="font-medium">⭐Web pages</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-2 justify-items-center">
            <Image
              src="/images/web1.png"
              alt="Web page 1"
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              loading="lazy"
              width={224} // lg:w-56 = 14rem * 16px = 224px
              height={126} // misal proporsinya 16:9, sesuaikan
            />
            <Image
              src="/images/web2.png"
              alt="Web page 2"
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              loading="lazy"
              width={224}
              height={126}
            />
            <Image
              src="/images/web3.png"
              alt="Web page 3"
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              loading="lazy"
              width={224}
              height={126}
            />
            <Image
              src="/images/web4.png"
              alt="Web page 4"
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              loading="lazy"
              width={224}
              height={126}
            />
          </div>
          <div>
            <span className="text-xs text-gray-500 italic ">
              Tampilan ini merupakan prototipe website yang masih dalam tahap pengembangan.
              Fungsionalitas akhir mungkin berbeda dari versi final.
            </span>
          </div>
          <div className="flex justify-center ">
            <a
              href="https://curugsewu.vercel.app/"
              className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        </FadeContent>
      </div>

      {/* experience */}
      <div className="px-8 py-5 font-sans md:px-40 mt-15">
        <FadeContent>
          <h1 className="font-medium">Experience</h1>
          <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
            <h1 className="whitespace-nowrap">Freelance Vids & Photos</h1>
            <div className="flex-1 h-px bg-gray-400"></div>
            <h1 className="text-gray-600 italic whitespace-nowrap">2021 – Now</h1>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
            <h1 className="whitespace-nowrap">Frontend | Building as I learn</h1>
            <div className="flex-1 h-px bg-gray-400"></div>
            <h1 className="text-gray-600 italic whitespace-nowrap">2025 – Now</h1>
          </div>
        </FadeContent>
      </div>

      {/* komunitas  */}
      <div className="px-8 py-5 font-sans md:px-40 mt-15">
        <FadeContent>
          <h1 className="font-medium">Tech Events Ive Joined</h1>
          <div className="mt-3 flex justify-center">
            <Image
              src="/images/event1.jpg"
              alt="Google Developer Group Semarang"
              className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg"
              loading="lazy"
              width={224} // Sesuaikan
              height={126}
            />
          </div>
          <div className="mt-3">
            <h1 className="font-bold">
              Google Developer Group <span className="text-xs text-gray-500">semarang</span>
            </h1>
            <p className="text-neutral-500">
              adalah komunitas global berisi para pengembang (developer), desainer, dan tech
              enthusiast yang ingin belajar, berbagi, dan berkembang bersama lewat berbagai
              kegiatan seputar teknologi, khususnya yang berhubungan dengan ekosistem Google.
            </p>
          </div>
          <button
            onClick={() => window.open("https://gdg.community.dev/")}
            className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:cursor-pointer"
          >
            More
          </button>
        </FadeContent>
      </div>

      {/* hubungi saya */}
      <div className="px-8 py-5 font-sans md:px-40 mt-15">
        <FadeContent>
          <h1 className="font-medium">Hubungi saya</h1>
          <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
            <a
              href="mailto:amrlwcksn@gmail.com"
              className="font-medium underline hover:text-blue-400 whitespace-nowrap"
            >
              Email
            </a>
            <div className="flex-1 h-px bg-gray-400"></div>
            <h1 className="text-gray-600 italic whitespace-nowrap text-xs">
              amrlwcksn@gmail.com
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
            <a
              href="https://www.instagram.com/amirulwicaksono_/?igsh=MWtvNndhN29memxnbA%3D%3D#"
              className="font-medium underline hover:text-blue-400 whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </a>
            <div className="flex-1 h-px bg-gray-400"></div>
            <h1 className="text-gray-600 italic whitespace-nowrap text-xs">@amirulwicaksono_</h1>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6 my-4">
            <a
              href="https://wa.me/6287766422358"
              className="font-medium underline hover:text-blue-400 whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <div className="flex-1 h-px bg-gray-400"></div>
            <h1 className="text-gray-600 italic whitespace-nowrap text-xs">Business</h1>
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
