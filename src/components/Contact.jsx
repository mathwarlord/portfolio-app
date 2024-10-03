import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '../constants';

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 1 }}
          className="flex justify-center my-4"
        >
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
        </motion.div>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
