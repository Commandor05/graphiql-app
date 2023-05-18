import { useEffect } from 'react';
import { useAppSelector } from '../redux/hooks';
import { QueryEditorLayout } from '../features/queryEditor/';
import { Header } from '../features/header';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const offsetY = [0, 150];
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="h-screen">
      <Header offsetY={offsetY} scrollY={scrollY} />
      <motion.div className="h-full" style={{ marginTop }}>
        <QueryEditorLayout />
      </motion.div>
    </div>
  );
};

export default Main;
