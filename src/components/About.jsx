import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-3xl"
              src={aboutImg}
              alt="About image"
              width="70%"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          className="w-full lg:w-1/2"
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxw-w-xl text-xl py-6 mb-4">
              {ABOUT_TEXT.map((text, index) => (
                <p key={index} className="my-7">
                  {text}
                </p>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
