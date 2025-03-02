import { useEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoStar, IoStarHalf } from "react-icons/io5";
import LogoMarquee from "./LogoMarquee";
import SharedButton from "./SharedButton";
import DownloadApp from "./DownloadApp";

const Hero = () => {
  const inputFields = [
    {
      groupInput: [
        {
          label: "First name",
          placeholder: "First name",
        },
        {
          label: "Last name",
          placeholder: "Last name",
        },
      ],
    },
    {
      label: "Work email",
      placeholder: "Work email",
    },
    {
      groupInput: [
        {
          label: "Company name",
          placeholder: "Company name",
        },
        {
          label: "Job title",
          placeholder: "Job title",
        },
      ],
    },
  ];

  const [firstName, setFirstName] = useState("Jenny");
  const firstNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  const stars = [1, 2, 3, 4, "half"];

  const benefits = [
    {
      title: "Lorem ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Vestibulum ac diam.",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Curabitur aliquet.",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const additionalBenefits = [
    {
      title: "Lorem ipsum dolor.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      title: "Vestibulum ac diam.",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Curabitur aliquet.",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Phasellus feugiat.",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Aenean commodo.",
      description:
        "Nunc scelerisque viverra mauris in aliquam. Quisque id diam vel quam elementum pulvinar etiam.",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-16 !mt-4">
      <div className="w-full flex flex-col xl:flex-row justify-between items-start gap-10">
        <div className="xl:hidden w-full flex flex-col justify-center items-center">
          <p className="text-sm font-bold tracking-wide uppercase">
            LOREM: <br />
            Lorem ipsum dolor sit amet
          </p>
          <p className="sm:text-[42px] text-[36px] sm:leading-12 leading-10 py-3 font-canela">
            Lorem ipsum dolor,
            <br />
            consectetur <br className="md:hidden" />
            <span className="text-brand">adipiscing AI</span>
          </p>

          <div className="flex items-center gap-3 py-3">
            <img src="/logo/logo.svg" alt="Logo" className="w-6" />

            <div className="flex items-center text-sunset gap-1">
              {stars?.map((star, index) =>
                star === "half" ? (
                  <IoStarHalf key={index} size={20} />
                ) : (
                  <IoStar key={index} size={20} />
                )
              )}
            </div>

            <p className="font-semibold leading-4 !mt-1">4.5</p>
          </div>
        </div>
        {/* Input Fields */}
        <div className="w-full xl:max-w-[520px] flex flex-col gap-7 py-8 md:px-8 px-5 rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
          <p className="md:text-[2rem] text-2xl">Download the guide</p>

          <div className="flex flex-col gap-5">
            {inputFields.map((item, index) => (
              <div key={index}>
                {item.groupInput ? (
                  <div className="flex md:flex-row flex-col gap-5">
                    {item.groupInput.map((groupItem, idx) => (
                      <div
                        key={idx}
                        className="relative w-full group focus-within"
                      >
                        <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-focus-within:opacity-100 transition-default">
                          {groupItem.label}
                        </div>
                        <input
                          ref={
                            groupItem.label === "First name"
                              ? firstNameRef
                              : null
                          }
                          placeholder={groupItem.placeholder}
                          value={
                            groupItem.label === "First name" ? firstName : ""
                          }
                          onChange={(e) =>
                            groupItem.label === "First name"
                              ? setFirstName(e.target.value)
                              : null
                          }
                          className="w-full h-14 pl-4 border border-offWhite rounded-lg outline-none bg-offWhite focus:bg-transparent focus:border-[#5551FF] focus:placeholder:text-white transition-default"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="relative w-full group focus-within">
                    <div className="absolute left-[14px] top-[-8px] bg-white px-1 text-[12px] text-[#5551FF] opacity-0 group-focus-within:opacity-100 transition-default">
                      {item.label}
                    </div>
                    <input
                      placeholder={item.placeholder}
                      className="w-full h-14 pl-4 border border-offWhite rounded-lg outline-none bg-offWhite focus:bg-transparent focus:border-[#5551FF] focus:placeholder:text-white transition-default"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-gray text-left text-[13px]">
            By completing and submitting this form, you agree that Writer may
            email or call you with product updates, educational resources, and
            other promotional information. To learn more about how Writer uses
            your information, see our
            <span className="!ml-1 text-brand font-medium">
              Privacy Policy.
            </span>
          </p>

          <SharedButton fullWidth={true} />
        </div>

        {/* Benefits */}
        <div className="w-full xl:max-w-[490px] flex flex-col text-left gap-4">
          <div className="xl:block hidden">
            <p className="text-sm font-semibold tracking-wide uppercase">
              LOREM: <br />
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-[42px] leading-11 font-canela pt-4 pb-5">
              Lorem ipsum dolor,
              <br />
              consectetur <span className="text-brand">generative AI</span>
            </p>

            <div className="flex items-center gap-3 py-3">
              <img src="/logo/logo.svg" alt="Logo" className="w-6" />

              <div className="flex items-center text-sunset gap-1">
                {stars?.map((star, index) =>
                  star === "half" ? (
                    <IoStarHalf key={index} size={20} />
                  ) : (
                    <IoStar key={index} size={20} />
                  )
                )}
              </div>

              <p className="font-semibold leading-4 !mt-1">4.5</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {benefits?.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-start">
                  <FaCheck size={20} className="text-brand !mt-1" />
                </div>

                <p>
                  <span className="font-semibold !mr-1">{item.title}</span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Additional Benefits */}
      <div className="w-full flex flex-col xl:flex-row justify-between">
        <div className="w-full max-w-[540px] flex flex-col text-start gap-5">
          {additionalBenefits?.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-9 h-9 flex items-start">
                <FaCheck size={20} className="text-brand !mt-1" />
              </div>

              <p>
                <span className="font-semibold !mr-1">{item.title}</span>
                {item.description}
              </p>
            </div>
          ))}

          <SharedButton />
        </div>
        <DownloadApp />
      </div>
    </div>
  );
};

export default Hero;
