import { motion } from 'framer-motion';
import { FaGithub, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import logo from './../assets/logo_HG.png';

const Navbar = () => {
  return (
    <>
      <nav className="mb-10 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
          <motion.a
            href="https://github.com/mathwarlord"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://t.me/gemza"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#229ED9' }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-neutral-300"
            style={{ transition: 'color 0.2s ease' }}
          >
            <FaTelegramPlane />
          </motion.a>
          <motion.a
            href={`https://wa.me/79640229296`}
            whileHover={{ scale: 1.2, color: '#25D366' }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-2xl text-neutral-300"
            style={{ transition: 'color 0.2s ease' }}
          >
            <FaWhatsapp />
          </motion.a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
