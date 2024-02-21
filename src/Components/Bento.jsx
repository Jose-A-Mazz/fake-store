import {
  motion,
  useAnimate,
  stagger,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function Bento({ itemsByCategory }) {
  const [scope, animate] = useAnimate();
  const bentoGridElement = useRef();
  const isInview = useInView(scope, { once: true, amount: "all" });

  useEffect(() => {
    animate(
      ".bento-grid div",
      { scale: [0, 1], opacity: [0, 1] },
      {
        delay: stagger(0.1, { ease: "easeIn" }),
      }
    );
  }, [isInview]);

  return (
    <>
      <motion.section
        transition={{ type: "spring", duration: "5s" }}
        className="bento-section"
      >
        <motion.div className="bento-grid" ref={scope}>
          {isInview ? (
            itemsByCategory.map((item, index) => {
              return (
                <motion.div
                  whileHover={{
                    y: -3,
                    boxShadow: "2px 1px 7px 1px rgba(0,0,0,0.2)",
                  }}
                  className={`bento-${item.category.slice(0, 3)}`}
                ></motion.div>
              );
            })
          ) : (
            <div></div>
          )}
        </motion.div>
      </motion.section>
    </>
  );
}
