import './App.css';
import Navbar from './components/Navbar';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import coder from './assets/images/coder.png';
import { useRef } from 'react';

import { HiDocumentText } from 'react-icons/hi';
import { CgUserAdd } from 'react-icons/cg';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import {
  AiFillCloseCircle,
  AiFillPhone,
  AiOutlineGithub,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Skills from './screens/Skills';

import { useSelector } from 'react-redux';
import Footer from './components/Footer';

function App() {
  const [isHovered, setHovered] = useState(false);
  const [isSocialsOpen, setIsSocialsOpen] = useState(false);
  const homeRef = useRef();

  const isToggled = useSelector((state) => state.toggler);

  useEffect(() => {
    if (isSocialsOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSocialsOpen]);

  return (
    <main className="relative" ref={homeRef}>
      <AnimatePresence>
        {isSocialsOpen && (
          <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.1 } }}
            exit={{ opacity: 0 }}
            className=" flex flex-col h-screen absolute justify-center  items-center w-full "
          >
            <motion.div
              className={`${
                isToggled ? 'bg-text' : 'bg-primaryLight'
              } p-4 h-96 w-80 shadow-xl rounded-xl absolute z-50 flex  flex-col justify-center items-start gap-2`}
            >
              <div
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => setIsSocialsOpen(false)}
              >
                <AiFillCloseCircle
                  color={isToggled ? '#070c04' : 'white'}
                  size={40}
                />
              </div>
              <motion.img
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.2, delay: 0.05 },
                }}
                src={coder}
                className="absolute -z-10 -right-10 top-40 rounded-full h-72 w-72 object-contain"
              />
              <motion.button
                whileHover={{ scale: 1.2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: -0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.1 },
                }}
                className={`flex  gap-2 items-center justify-between p-2 rounded-lg ${
                  isToggled
                    ? 'bg-facebook text-text'
                    : 'bg-secondaryLight text-textLight'
                }`}
              >
                <MdEmail color={isToggled ? 'white' : 'black'} />
                christiancabungan@yahoo.com
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: -0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.2 },
                }}
                className={`flex  gap-2 items-center justify-between p-2 rounded-lg ${
                  isToggled
                    ? 'bg-facebook text-text'
                    : 'bg-secondaryLight text-textLight'
                }`}
              >
                <AiFillPhone color={isToggled ? 'white' : 'black'} />
                +63-976-116-6260
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: -0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.3 },
                }}
                onClick={() =>
                  window.open(
                    'https://www.facebook.com/ChristianQCabungan',
                    '_blank'
                  )
                }
                className={`flex  gap-2 items-center justify-between p-2 rounded-lg ${
                  isToggled
                    ? 'bg-facebook text-text'
                    : 'bg-secondaryLight text-textLight'
                }`}
              >
                <BsFacebook color={isToggled ? 'white' : 'black'} />
                Facebook
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: -0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.4 },
                }}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/christian-c-bb413189/',
                    '_blank'
                  )
                }
                className={`flex  gap-2 items-center justify-between p-2 rounded-lg ${
                  isToggled
                    ? 'bg-facebook text-text'
                    : 'bg-secondaryLight text-textLight'
                }`}
              >
                <BsLinkedin color={isToggled ? 'white' : 'black'} />
                LinkedIn
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.085 }}
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: -0,
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.5 },
                }}
                onClick={() =>
                  window.open('https://github.com/ChristianQC24/', '_blank')
                }
                className={`flex  gap-2 items-center justify-between p-2 rounded-lg ${
                  isToggled
                    ? 'bg-facebook text-text'
                    : 'bg-secondaryLight text-textLight'
                }`}
              >
                <AiOutlineGithub color={isToggled ? 'white' : 'black'} />
                Github
              </motion.button>
            </motion.div>
            <motion.div
              onClick={() => setIsSocialsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65, transition: { duration: 0.4 } }}
              exit={{ opacity: 0 }}
              className={`${
                isToggled ? 'bg-black' : 'bg-backgroundLight'
              } absolute h-screen w-full z-40`}
            ></motion.div>
          </motion.header>
        )}
      </AnimatePresence>
      <Navbar homeRef={homeRef} />

      <div
        className={`${
          isToggled ? 'bg-black' : 'bg-white'
        } flex flex-col md:flex-row h-screen justify-center items-center gap-4 md:gap-8`}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`${isHovered ? 'bg-realMe' : ' bg-me'}
           bg-cover bg-no-repeat text-center h-[21.5rem] w-96 rounded-full mb-12 transition-all duration-500
          ${isToggled ? 'bg-primary' : 'bg-primaryLight'}
           `}
        ></motion.div>
        <div
          className={`${
            isToggled ? ' text-primary ' : 'text-textLight'
          } text-center`}
        >
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.4 },
            }}
            className={`${
              isToggled ? 'text-text ' : 'text-textLight'
            } text-3xl md:text-3xl`}
          >
            Hello I am
          </motion.h2>
          <motion.h1
            initial={{ x: 50, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.8 },
            }}
            className="text-5xl md:text-5xl font-bold mt-2"
          >
            Christian Cabungan
          </motion.h1>
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 1.2 },
            }}
            className={` ${
              isToggled ? 'text-text' : 'text-textLight'
            } text-md md:text-lg`}
          >
            Full Stack Web & Mobile App Developer
          </motion.h2>
          <div className="my-6 flex justify-center items-center gap-3 md:flex-col">
            <motion.button
              initial={{ x: -50, rotate: -25, opacity: 0 }}
              animate={{
                rotate: 0,
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 1.6 },
              }}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1, transition: { duration: 15 } }}
              className={`main-button  z-[5]
              ${
                isToggled
                  ? 'bg-primary text-text'
                  : 'bg-primaryLight text-textLight'
              }
              `}
              onClick={() => window.open('https://www.facebook.com', '_blank')}
            >
              <HiDocumentText
                color={isToggled ? '#eaf5e0' : '#030812'}
                size={'1.5rem'}
                cursor={'pointer'}
              />
              View Resume
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, transition: { duration: 15 } }}
              initial={{ x: -150, opacity: 0 }}
              animate={{
                x: -0,
                opacity: 1,
                transition: { duration: 0.6, delay: 1.8 },
              }}
              whileTap={{ scale: 0.8 }}
              className={`main-button ${
                isToggled ? 'bg-secondary' : 'bg-backgroundLight'
              } w-[136px] `}
              onClick={() => {
                setTimeout(() => {
                  setIsSocialsOpen(true);
                }, 200);
                window.scrollTo({
                  top: homeRef.current.offsetTop,
                  behavior: 'smooth',
                });
              }}
            >
              <CgUserAdd
                color={isToggled ? '#90cc5c' : 'black'}
                size={'1.5rem'}
                cursor={'pointer'}
              />
              Contacts
            </motion.button>
          </div>
        </div>
      </div>
      <main>
        <Skills />
      </main>
      <footer>
        <Footer
          extraClass={
            isToggled
              ? 'bg-text text-background text-primary'
              : 'bg-textLight text-secondaryLight'
          }
        />
      </footer>
    </main>
  );
}

export default App;
