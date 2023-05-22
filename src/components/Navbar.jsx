import logoLight from '../assets/images/logo-light.png';
import logoDark from '../assets/images/logo-dark.png';
import { BsFillLightbulbFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { toggleLoad } from '../redux/toggler/toggler.js';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Navbar = ({ homeRef }) => {
  const isToggled = useSelector((state) => state.toggler);
  const dispatch = useDispatch();
  return (
    <nav
      className={`
      shadow-md
      cursor-pointer z-10 fixed w-screen flex justify-between items-center ${
        isToggled ? 'bg-background' : 'bg-white'
      } p-1 px-10`}
    >
      <motion.img
        whileTap={{ scale: 0.85, rotate: 90 }}
        onClick={() => {
          window.scrollTo({
            top: homeRef.current.offsetTop,
            behavior: 'smooth',
          });
        }}
        src={isToggled ? logoLight : logoDark}
        alt="logo"
        className="h-16 w-16"
      />
      <motion.div whileTap={{ scale: 0.85, rotate: 45 }}>
        <BsFillLightbulbFill
          onClick={() => dispatch(toggleLoad(!isToggled))}
          color={isToggled ? 'white' : 'black'}
          size={'1.5rem'}
          cursor={'pointer'}
        />
      </motion.div>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  homeRef: PropTypes.any.isRequired,
};
