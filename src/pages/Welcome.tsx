import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../redux/hooks';
import { AuthToggler } from '../features/authentication';
import { Header } from '../features/header';
import { useTransform, motion, useScroll } from 'framer-motion';
import { Footer } from '../features/footer';
import PersonCard from '../features/personCard/components/PersonCard';

const Welcome = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const offsetY = [0, 150];
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  const team = [
    {
      name: 'Oleh Kaliuzhnyi',
      role: 'Team Leader',
      imageUrl: 'https://avatars.githubusercontent.com/u/12662435?v=4',
    },
    {
      name: 'Viktor Solovyev',
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Andrei Shyrvel',
      role: 'Front-end Developer',
      imageUrl: 'https://szyrwel.github.io/rsschool-cv/assets/img/myfoto.jpg',
    },
  ];

  return (
    <div className="bg-neutral-100">
      <Header offsetY={offsetY} scrollY={scrollY} />
      <motion.div style={{ height: '900px', marginTop }}>
        <div className="container mx-auto">
          <h2 className="mt-14 flex justify-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            GraphiQL
          </h2>
          <p className="mb-36 mt-2 flex justify-center text-lg leading-8 text-gray-600">
            GraphiQL {t('about_graphiql')}
          </p>
          <p className="mb-2 mt-2 flex justify-center text-2xl font-bold text-gray-600">
            {t('our_team')}
          </p>
          <ul role="list" className="flex items-center justify-center gap-x-6">
            {team.map((person) => (
              <li key={person.name}>
                <PersonCard
                  name={person.name}
                  role={person.role}
                  imageUrl={person.imageUrl}
                ></PersonCard>
              </li>
            ))}
          </ul>
          <div className="mt-16 flex cursor-pointer justify-center font-bold text-indigo-500">
            <Link to={isAuthenticated ? '/main' : '/auth'}>
              {isAuthenticated ? t('go_to_main') : t('go_to_login')}
            </Link>
          </div>
          <p className="mb-2 mt-36 flex justify-center text-2xl font-bold text-gray-600">
            {t('about_course')}
          </p>
          <p className="mb-2 mt-2 flex justify-center text-center text-2xl text-gray-600">
            {t('about_course_description')}
          </p>
        </div>
      </motion.div>
      <div>
        <AuthToggler />
      </div>
      <Footer />
    </div>
  );
};

export default Welcome;
