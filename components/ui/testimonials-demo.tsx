"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  type Testimonial,
  TestimonialsColumn,
} from "@/components/ui/testimonials-columns-1";

function fillToNine(items: Testimonial[]): Testimonial[] {
  if (items.length === 0) {
    return [];
  }

  const result = [...items];
  let index = 0;

  while (result.length < 9) {
    result.push(items[index % items.length]);
    index += 1;
  }

  return result.slice(0, 9);
}

const Testimonials = () => {
  const [googleTestimonials, setGoogleTestimonials] = useState<Testimonial[]>(
    [],
  );

  useEffect(() => {
    let isMounted = true;

    async function loadGoogleReviews() {
      try {
        const response = await fetch("/api/google-reviews", {
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as {
          testimonials?: Testimonial[];
        };
        const items = fillToNine(data.testimonials ?? []);

        if (isMounted) {
          setGoogleTestimonials(items);
        }
      } catch {
        if (isMounted) {
          setGoogleTestimonials([]);
        }
      }
    }

    void loadGoogleReviews();

    return () => {
      isMounted = false;
    };
  }, []);

  const firstColumn = googleTestimonials.slice(0, 3);
  const secondColumn = googleTestimonials.slice(3, 6);
  const thirdColumn = googleTestimonials.slice(6, 9);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Mnenja strank</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            Resnične ocene, brez spodbude.
          </h2>
          <p className="text-center mt-5 opacity-75">
            Preveri, kaj o storitvi povedo naše stranke.
          </p>
        </motion.div>

        {googleTestimonials.length > 0 ? (
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn
              testimonials={secondColumn}
              className="hidden md:block"
              duration={19}
            />
            <TestimonialsColumn
              testimonials={thirdColumn}
              className="hidden lg:block"
              duration={17}
            />
          </div>
        ) : (
          <div className="mt-10 border rounded-2xl p-6 text-center text-muted-foreground">
            Trenutno nema dostupnih Google recenzija sa ocenom 5.
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
