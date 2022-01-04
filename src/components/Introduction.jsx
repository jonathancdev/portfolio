import React, { useEffect } from "react";
import { scrollTo } from "../utils/scrollTo";
import Icon from "./Icon";
import { motion, useAnimation } from "framer-motion";
import {
  helloVariants,
  myNameVariants,
  jonathanVariants,
  webVariants,
  buttonVariants,
} from "../utils/variants";

export default function Introduction({ updateActiveLink }) {
  const helloControls = useAnimation();
  const myNameControls = useAnimation();
  const jonathanControls = useAnimation();
  const webControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    startSequence();
  }, []);

  const startSequence = async () => {
    await helloControls.start("start");
    jonathanControls.start("appear");
    await myNameControls.start("appear");
    await webControls.start("appear");
    buttonControls.start("appear");
  };

  const handleClick = (section) => {
    scrollTo(section);
    updateActiveLink(section);
  };
  return (
    <section id="home" className="introduction">
      <div className="introduction__content">
        <div className="introduction__heading">
          <motion.h1
            variants={helloVariants}
            initial="initial"
            animate={helloControls}
            className="introduction__heading--primary"
          >
            Hello!
          </motion.h1>
          <motion.h1
            variants={myNameVariants}
            initial="initial"
            animate={myNameControls}
            className="introduction__heading--primary"
          >
            My name is{" "}
            <motion.span
              variants={jonathanVariants}
              initial="initial"
              animate={jonathanControls}
            >
              Jonathan C
            </motion.span>
            .
          </motion.h1>
          <motion.h1
            variants={webVariants}
            initial="initial"
            animate={webControls}
            className="introduction__heading--primary"
          >
            I'm a web developer.
          </motion.h1>
        </div>
        <motion.button
          variants={buttonVariants}
          initial="initial"
          animate={buttonControls}
          onClick={() => handleClick("about")}
          className="introduction__button"
          whileTap="tap"
        >
          <Icon name="arrow" />
        </motion.button>
      </div>
    </section>
  );
}
