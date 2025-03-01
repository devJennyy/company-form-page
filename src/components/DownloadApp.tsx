import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const DownloadApp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-35% 0px" });
  return (
    <div className="w-full flex justify-center items-center">
      <div ref={ref} className="relative w-[400px] h-[400px] overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-brand rounded-r-full z-0"></div>

        <div className="absolute left-0 top-0 w-1/2 h-full bg-transparent rounded-l-full z-0"></div>

        <motion.img
          src="/images/image.png"
          alt="image"
          initial={{ x: 250, y: 80, opacity: 0, rotate: 20 }}
          animate={
            isInView
              ? {
                  x: [60, -0],
                  y: [0, -10, 0],
                  rotate: [20, 0],
                  opacity: [0, 1],
                }
              : {}
          }
          transition={{
            duration: 1.0,
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-40 w-full h-full object-cover"
        />
      </div>

      <div className="absolute">
        <div className="relative !w-[267px] h-[267px]">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-transparent  rounded-r-full"></div>
          <div className="absolute left-0 top-0 w-1/2 h-full bg-primary rounded-l-full"></div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
