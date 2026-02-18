import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative bg-[#f4f6fb] text-black pt-8  overflow-hidden">

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* LOGO */}
          <div className="flex items-center gap-3">
         
            <span className="text-lg font-semibold tracking-wide">
              Peter Rezik
            </span>
           
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com"
              className="hover:text-indigo-400 transition"
            >
              <BsGithub />
            </a>

            <a
              href="https://linkedin.com"
              className="hover:text-indigo-400 transition"
            >
              <BsLinkedin />
            </a>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 my-6" />

        {/* BOTTOM */}
        <p className="text-center text-sm text-gray-400 tracking-wide">
          © {new Date().getFullYear()} Peter Rezik — All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}
