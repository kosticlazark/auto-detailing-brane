"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Fragment } from "react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {["first", "second"].map((duplicateId) => (
          <Fragment key={duplicateId}>
            {props.testimonials.map(({ text, image, name }) => (
              <div
                className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={`${duplicateId}-${name}-${text.slice(0, 24)}`}
              >
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};
