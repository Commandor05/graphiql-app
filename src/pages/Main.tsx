import { QueryEditorLayout } from '../features/queryEditor/';
import { Header } from '../features/header';
import { motion, useScroll, useTransform } from 'framer-motion';

const Main = () => {
  const { scrollY } = useScroll();
  const offsetY = [0, 150];
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  return (
    <div className="h-screen bg-neutral-100">
      <Header offsetY={offsetY} scrollY={scrollY} />
      <motion.div className="h-full" style={{ marginTop }}>
        <QueryEditorLayout />
      </motion.div>
    </div>
  );
};

export default Main;
