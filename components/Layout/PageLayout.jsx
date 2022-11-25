// import custom components
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react';


const variants = {
    beforeenter: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: {
      opacity: 0,
      transition: { duration: .25 },
      x: 200
    },
}

function handleExitComplete() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 })
    }
}
function Layout({ children }) {
    const router = useRouter();
    return (
    <>
        <Header />
        <div className="min-80 bg-gray-100 p-8">
            <AnimatePresence mode="wait" onExitComplete={handleExitComplete} initial={false}>
                <motion.div layoutId="content" key={router.route} variants={variants} exit="exit" layout >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
        <Footer />
    </>
    );
}
export default Layout;