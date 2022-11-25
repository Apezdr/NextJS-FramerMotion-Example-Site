import Layout from "../components/Layout/PageLayout";
import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, x: -20 },
  enter: { opacity: 1, x: 0, transition:{ delay: .25 } },
  exit: {
    opacity: 0,
    transition: { duration: .25 },
    x: 10
  },
};

export default function About() {
  return (
    <>
      <Head>
        <title>About - Adam Drumm.com</title>
      </Head>
      <AnimatePresence mode="wait">
        <motion.h1 className="text-3xl font-bold pt-2 pb-6" variants={variants} initial="initial" animate="enter" exit="exit">About Me</motion.h1>
        <motion.p variants={{...variants,enter: { opacity: 1, x: 0, transition:{ delay: .40 } }}} initial="initial" animate="enter" exit="exit">
          Suspendisse porttitor turpis non felis gravida cursus. In fringilla gravida efficitur. Aliquam rhoncus finibus massa eu interdum. Nullam tincidunt feugiat odio, vitae laoreet ligula congue nec. Aenean ac mauris mauris. Curabitur erat neque, ullamcorper non posuere sit amet, scelerisque et arcu. Phasellus rhoncus lobortis lectus, varius accumsan ante auctor at. Sed eleifend, libero nec malesuada pharetra, ex libero iaculis nulla, ut volutpat sem erat ut mi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus rutrum malesuada justo, non molestie est iaculis vitae. Nam aliquet, ante at gravida interdum, metus diam scelerisque leo, sed pharetra ligula risus ac dolor.

          Nam a diam sapien. Nunc pellentesque sed ex vitae egestas. Etiam justo lorem, tempus id laoreet quis, tincidunt sed ipsum. Etiam eget maximus turpis. Quisque ultrices, sapien et lobortis dictum, enim tortor placerat dolor, at elementum orci velit sit amet nunc. Etiam dictum sed diam et congue. Sed leo quam, blandit ut felis pulvinar, fringilla volutpat est. Suspendisse laoreet ligula in porta faucibus. Pellentesque tristique, lorem euismod cursus lobortis, augue eros pulvinar metus, et faucibus nulla neque ut mi. Proin eu ornare nisl. Quisque ac viverra risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam interdum euismod ex, eu blandit elit sodales eu.
        </motion.p>
      </AnimatePresence>
    </>
    
  );
}

About.layout = Layout;