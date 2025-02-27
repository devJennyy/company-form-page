import { FaCheck, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full flex items-center py-5">
      <div className="w-[520px] flex flex-col gap-5 rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-8">
        <p className="text-[2rem]">Download the guide</p>

        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <div className="relative w-full group">
              <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                First name
              </div>
              <input
                placeholder="First name"
                className="w-full h-14 pl-4 border rounded-lg outline-none bg-offWhite hover:bg-transparent hover:border-[#5551FF] hover:placeholder:text-white transition-all duration-300 ease-out"
              />
            </div>
            <div className="relative w-full group">
              <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                Last name
              </div>
              <input
                placeholder="Last name"
                className="w-full h-14 pl-4 border rounded-lg outline-none bg-offWhite hover:bg-transparent hover:border-[#5551FF] hover:placeholder:text-white transition-all duration-300 ease-out"
              />
            </div>
          </div>
          <div className="relative w-full group">
            <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
              Work email
            </div>
            <input
              placeholder="Work email"
              className="w-full h-14 pl-4 border rounded-lg outline-none bg-offWhite hover:bg-transparent hover:border-[#5551FF] hover:placeholder:text-white transition-all duration-300 ease-out"
            />
          </div>
          <div className="flex gap-5">
            <div className="relative w-full group">
              <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                Company name
              </div>
              <input
                placeholder="Company name"
                className="w-full h-14 pl-4 border rounded-lg outline-none bg-offWhite hover:bg-transparent hover:border-[#5551FF] hover:placeholder:text-white transition-all duration-300 ease-out"
              />
            </div>
            <div className="relative w-full group">
              <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                Job title
              </div>
              <input
                placeholder="Job title"
                className="w-full h-14 pl-4 border rounded-lg outline-none bg-offWhite hover:bg-transparent hover:border-[#5551FF] hover:placeholder:text-white transition-all duration-300 ease-out"
              />
            </div>
          </div>
        </div>

        <p className="text-[#7A7A7C] text-left">
          By completing and submitting this form, you agree that Writer may
          email or call you with product updates, educational resources, and
          other promotional information. To learn more about how Writer uses
          your information, see our
          <span className="!ml-1 text-[#5551FF]">Privacy Policy.</span>
        </p>

        <button className="w-full py-4 bg-[#5551FF] rounded-full text-white font-semibold">
          Download
        </button>
      </div>

      <div className="w-[520px] flex flex-col text-left gap-4">
        <p className="text-sm font-semibold uppercase">
          LOREM: <br />
          Lorem ipsum dolor sit amet
        </p>
        <p className="text-4xl">
          Lorem ipsum dolor,
          <br />
          consectetur <span className="text-[#5551FF]">adipiscing AI</span>
        </p>

        <div className="flex items-center gap-3 py-2">
          <img src="/logo/logo.svg" alt="Logo" className="w-6" />
          <div className="flex justify-center items-center text-[#FF9D28]">
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStar size={20} />
            <FaRegStarHalfStroke size={20} />
          </div>
          <p className="font-semibold">4.5</p>
        </div>

        <div className="flex flex-col gap-5">
  <div className="flex items-start gap-4">
    <FaCheck size={26} className="text-[#5551FF]" />
    <p>
      <span className="font-semibold">Lorem ipsum dolor.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque egestas congue quisque.
    </p>
  </div>
  <div className="flex items-start gap-4">
    <FaCheck size={26} className="text-[#5551FF]" />
    <p>
      <span className="font-semibold">Vestibulum ac diam.</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus.
    </p>
  </div>
  <div className="flex items-start gap-4">
    <FaCheck size={26} className="text-[#5551FF]" />
    <p>
      <span className="font-semibold">Curabitur aliquet.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Hero;
