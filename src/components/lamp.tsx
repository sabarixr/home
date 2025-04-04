"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import styles from "../styles/Home.module.css"

export const LampContainer = ({
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bgMainColor w-full z-0",className)}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">

          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className="lg:top-[35vh] sm:top-[35vh] md:top-[25vh] absolute right-1/2 lg:h-[30vh] sm:h-[30vh] md:h-[40vh] max-w-[50vw] bg-gradient-conic from-yellow-500 via-transparent to-transparent lg:[--conic-position:from_70deg_at_center_top] md:[--conic-position:from_40deg_at_center_top] sm:[--conic-position:from_70deg_at_center_top]"
          >
            <div className="absolute lg:w-40 sm:w-[8.5vw] h-[100%] left-0 bg-bgMainColor  bottom-0 [mask-image:linear-gradient(to_right,white,transparent)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,}}
            className="absolute lg:top-[35vh] sm:top-[35vh] md:top-[25vh] left-1/2 lg:h-[30vh] sm:h-[30vh] md:h-[40vh] max-w-[50vw] bg-gradient-conic from-transparent via-transparent to-yellow-500 md:[--conic-position:from_320deg_at_center_top] lg:[--conic-position:from_290deg_at_center_top] sm:[--conic-position:from_290deg_at_center_top]"
          >
            <div className="absolute lg:w-40 sm:w-[8rans.5vw] h-[100%] right-0 bg-bgMainColor bottom-0 [mask-image:linear-gradient(to_left,white,transparent)]" />
          </motion.div>

        <div className="absolute lg:top-[55vh] md:top-[50vh] sm:top-[50vh] lg:h-[18vh] md:h-[40vh] sm:h-[30vh] w-full scale-x-150 bg-bgMainColor lg:blur-2xl md:blur-xl sm:blur-2xl"></div>

        <div className="absolute inset-auto z-50 h-36 w-[23.33vw] -translate-y-1/2 rounded-full bg--500 opacity-50 blur-3xl"></div>
        
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute z-30 h-[7.5vw] w-64 -translate-y-[6rem] sm:top-[40vh] rounded-full bg-yellow-400 blur-2xl lg:top-[45vh] max-w-[64vw]"
        ></motion.div>
        
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 lg:h-0.5 sm:h-[0.25rem] w-[25vw] bg-yellow-400 lg:top-[35vh] sm:top-[35vh] md:top-[25vh] max-w-[50vw]"
        ></motion.div>
        <div className="absolute inset-auto z-40 lg:h-[35vh] sm:h-[35vh] md:h-[25vh] w-full top-[0vh] bg-bgMainColor "></div>
      
      </div>

      <div className="absolute z-50 top-[66vh] w-[20vw] h-[4.3vh]">
      </div>
    </div>
  );
};
export default LampContainer; 