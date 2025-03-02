import { additionalBenefits, benefits, stars } from "@/constants/heroData";
import { FaCheck } from "react-icons/fa6";
import { IoStar, IoStarHalf } from "react-icons/io5";
import SharedButton from "./SharedButton";

type VariantType = "primary" | "secondary" | "title";

interface Props {
  variant: VariantType;
}

const HeroCopy = ({ variant }: Props) => {
  return (
    <>
      {variant === "primary" && (
        <div className="w-full xl:max-w-[490px] flex flex-col text-left gap-4">
          <div className="xl:block hidden">
            <p className="text-sm font-bold tracking-wide uppercase">
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
                  <span className="font-bold !mr-1">{item.title}</span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {variant === "secondary" && (
        <div className="xl:w-1/2 w-full flex flex-col items-start gap-8">
          <p className="sm:text-[2rem] text-2xl font-semibold">See what's inside</p>
          <div className="flex flex-col gap-5 text-start">
            {additionalBenefits?.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-9 h-9 flex items-start">
                  <FaCheck size={20} className="text-brand !mt-1" />
                </div>

                <p>
                  <span className="font-bold !mr-1">{item.title}</span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <SharedButton />
        </div>
      )}

      {variant === "title" && (
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-sm font-bold tracking-wide uppercase">
            LOREM: <br />
            Lorem ipsum dolor sit amet
          </p>
          <p className="text-[38px] leading-11 font-canela pt-4 pb-5">
            Lorem ipsum dolor,
            <br />
            consectetur <br />
            <span className="text-brand">generative AI</span>
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
      )}
    </>
  );
};

export default HeroCopy;
