import Layout from "../components/Layout/PageLayout";
import { AnimatePresence, motion } from 'framer-motion'
import Head from 'next/head';

const variants = {
    initial: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0, transition:{ delay: .25 } },
    exit: {
      opacity: 0,
      transition: { duration: .25 },
      x: 10
    },
};

export default function Index() {
    return (
        <>
            <Head>
                <title>Home - My Site.com</title>
            </Head>
            <AnimatePresence mode="wait">
                <motion.h1 className="text-3xl font-bold pt-2 pb-6" variants={variants} initial="initial" animate="enter" exit="exit">Index Page</motion.h1>
                <motion.p variants={{...variants,enter: { opacity: 1, x: 0, transition:{ delay: .40 } }}} initial="initial" animate="enter" exit="exit">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in ante est. Etiam maximus feugiat felis et tincidunt. Vestibulum vitae nibh lorem. Proin ut ultricies odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ut risus justo. Proin ligula risus, dignissim quis velit quis, posuere aliquam arcu. Donec vitae odio ut metus mattis placerat. Suspendisse nec turpis in ex hendrerit sodales. Suspendisse potenti. Suspendisse lectus enim, sagittis vitae vestibulum ac, fringilla ut elit.

                    Curabitur vitae nisi vitae lectus eleifend tincidunt. Aliquam at dapibus mauris, in maximus risus. Phasellus consectetur egestas massa, quis pharetra diam porta nec. Ut eget libero tellus. Phasellus dictum, neque vel ultricies dictum, enim erat mollis dui, et porttitor sem lorem et felis. Phasellus vitae posuere lorem. Integer ac rutrum enim, at maximus nunc. Duis elementum consectetur ante posuere vulputate. Integer scelerisque volutpat velit eu interdum. Nunc hendrerit efficitur iaculis. Phasellus nisl diam, sodales sit amet volutpat id, pretium ac nisl. Donec volutpat semper lacus sed gravida. Sed id neque a nisi eleifend efficitur at et elit. Praesent nec nunc elit. Nunc lacinia, tellus lobortis luctus posuere, erat mi tempus dui, quis convallis eros libero non felis. Nulla porttitor consectetur ex vitae blandit.

                    Nulla scelerisque gravida arcu sed bibendum. Sed commodo quam lectus, eu auctor metus cursus eu. Morbi tellus tellus, sodales elementum velit eu, ultricies consequat neque. In vulputate ex vitae ante posuere, vel dignissim lacus consequat. Sed sagittis feugiat nunc, non scelerisque ante convallis sit amet. Pellentesque risus dui, efficitur vitae tincidunt eget, placerat vitae turpis. Pellentesque fermentum lacus interdum, tincidunt nulla eu, luctus augue. Sed hendrerit mauris gravida diam blandit, non tempus orci dapibus. Fusce vulputate nisl nisi, non maximus massa vehicula eget. Nulla vehicula congue sagittis. Interdum et malesuada fames ac ante ipsum primis in faucibus.

                    Mauris consequat faucibus ullamcorper. Aenean cursus risus eu augue feugiat, vel porttitor erat sodales. Fusce eleifend viverra purus non auctor. Maecenas porta vestibulum augue, a tristique lorem varius sit amet. Aenean tristique, nisi ac eleifend dignissim, justo massa varius ipsum, vel egestas nisi est et nunc. Morbi dictum elementum dictum. Maecenas urna urna, vulputate in felis eu, commodo mattis dolor. Vestibulum ullamcorper non erat quis porta. Vivamus elementum diam enim. Aliquam tempor nisl sed mi sagittis, at pellentesque metus egestas. Ut tristique non felis at sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean non dui est. Sed nibh lacus, tincidunt id lectus et, consectetur pharetra massa. Ut tempus ullamcorper malesuada.

                    Maecenas sit amet nisl orci. In hac habitasse platea dictumst. Integer nec justo in ligula laoreet elementum. Donec imperdiet non tellus a facilisis. Vestibulum ultrices eu libero et lobortis. Donec suscipit ante sed eros imperdiet, et sollicitudin felis aliquam. Morbi sit amet purus ultrices velit porta pharetra et sit amet leo. Morbi velit nunc, scelerisque eget ullamcorper in, tempus ut augue. Donec volutpat massa eget semper volutpat. Praesent mollis ligula vitae diam fermentum facilisis. Sed sit amet ligula velit. Nam metus enim, malesuada at mi sit amet, volutpat porttitor enim. Nunc scelerisque volutpat nisl.

                    Morbi ultrices, nunc quis consequat interdum, dui sem fringilla turpis, a mattis nisi libero eget augue. Mauris eu nibh feugiat, congue est quis, lobortis nulla. Nulla urna leo, consectetur quis velit interdum, vehicula vulputate felis. Nulla congue tellus eu ipsum tempus condimentum et sed massa. Ut a faucibus quam, vitae lobortis elit. Duis hendrerit commodo turpis, nec pulvinar metus sagittis et. Aenean vulputate ac nisl eu elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam porttitor lacus id ipsum varius, ultrices sodales tortor ultrices. Etiam quis purus ac elit sodales elementum in id elit. Integer dolor ante, elementum sit amet rutrum id, mattis sit amet tortor.

                    Quisque in vehicula ipsum. Etiam dictum eros lobortis metus ornare venenatis. Nam elementum consectetur massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent a ante eu ligula rutrum tristique et eu ante. Curabitur convallis in enim sed vestibulum. Etiam at molestie ligula. Donec eget lectus convallis, ullamcorper tortor nec, tristique ex. Curabitur posuere sapien nec nibh porttitor maximus.
                </motion.p>
            </AnimatePresence>
        </>
    );
  }
Index.layout = Layout;
  