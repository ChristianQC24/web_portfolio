import { Tilt } from 'react-tilt';
import { motion, useAnimate, useInView } from 'framer-motion';

import { skills } from '../data/tech_stack.js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Skills = () => {
  const frontend = skills.filter((item) => {
    return item.type === 'Frontend Development';
  });
  const backend = skills.filter((item) => {
    return item.type === 'Backend Development';
  });
  const mobile = skills.filter((item) => {
    return item.type === 'Mobile App Development';
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [scope2, animate2] = useAnimate();
  const isInView2 = useInView(scope2);
  const [scope3, animate3] = useAnimate();
  const isInView3 = useInView(scope3);

  const isToggled = useSelector((state) => state.toggler);

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          opacity: 1,
        },
        { duration: 0.6, delay: 0.2 }
      );
    }
    if (isInView2) {
      animate2(
        scope2.current,
        {
          opacity: 1,
        },
        { duration: 0.6, delay: 0.2 }
      );
    }
    if (isInView3) {
      animate3(
        scope3.current,
        {
          opacity: 1,
        },
        { duration: 0.6, delay: 0.2 }
      );
    }
  }, [
    isInView,
    scope,
    animate,
    isInView2,
    scope2,
    animate2,
    isInView3,
    scope3,
    animate3,
  ]);

  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  };
  return (
    <div
      className={`${
        isToggled ? 'bg-secondary ' : 'bg-backgroundLight '
      } w-full justify-start text-center flex-col items-center p-6 flex `}
    >
      <h2
        className={`my-4 ${
          isToggled ? 'text-text' : 'text-textLight'
        } text-4xl font-bold tracking-wider`}
      >
        Tech Stack
      </h2>
      <div>
        <h2
          className={`my-4 ${
            isToggled ? 'text-text' : 'text-textLight'
          } text-2xl font-extralight tracking-wider`}
        >
          Frontend Development
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          ref={scope}
          className="flex flex-wrap gap-3  justify-center items-start p-10"
        >
          {frontend.map((item, idx) => {
            return (
              <Tilt key={idx} options={defaultOptions}>
                <div className="p-2 h-40 w-40 bg-white shadow-xl rounded-xl flex flex-col justify-center items-center">
                  <img src={item.icon} alt={item.skill} className="h-28 w-28" />
                  <h1 className=" my-2 font-semibold tracking-wide">
                    {item.skill}
                  </h1>
                </div>
              </Tilt>
            );
          })}
        </motion.div>
      </div>
      <div>
        <h2
          className={`my-4 ${
            isToggled ? 'text-text' : 'text-textLight'
          } text-2xl font-extralight tracking-wider`}
        >
          Backend Development
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          ref={scope2}
          className="flex flex-wrap gap-3  justify-center items-start p-10"
        >
          {backend.map((item, idx) => {
            return (
              <Tilt key={idx} options={defaultOptions}>
                <div className="p-2 h-40 w-40 bg-white shadow-xl rounded-xl flex flex-col justify-center items-center">
                  <img src={item.icon} alt={item.skill} className="h-28 w-28" />
                  <h1 className=" my-2 font-semibold tracking-wide">
                    {item.skill}
                  </h1>
                </div>
              </Tilt>
            );
          })}
        </motion.div>
      </div>
      <div>
        <h2
          className={`my-4 ${
            isToggled ? 'text-text' : 'text-textLight'
          } text-2xl font-extralight tracking-wider`}
        >
          Mobile App Development
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          ref={scope3}
          className="flex flex-wrap gap-3  justify-center items-start p-10"
        >
          {mobile.map((item, idx) => {
            return (
              <Tilt key={idx} options={defaultOptions}>
                <div className="p-2 h-40 w-40 bg-white shadow-xl rounded-xl flex flex-col justify-center items-center">
                  <img src={item.icon} alt={item.skill} className="h-28 w-28" />
                  <h1 className=" my-2 font-semibold tracking-wide">
                    {item.skill}
                  </h1>
                </div>
              </Tilt>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
