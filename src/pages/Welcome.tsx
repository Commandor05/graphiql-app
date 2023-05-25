import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../redux/hooks';
import { Header } from '../features/header';
import { useTransform, motion, useScroll } from 'framer-motion';
import { Footer } from '../features/footer';
import PersonCard from '../features/personCard/components/PersonCard';
import './welcome.css';

const Welcome = () => {
  const { isAuthenticated } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const offsetY = [0, 150];
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  const team = [
    {
      name: `${t('team.commandor05')}`,
      role: 'Team Leader',
      imageUrl: 'https://avatars.githubusercontent.com/u/12662435?v=4',
    },
    {
      name: `${t('team.viktorsolovyev')}`,
      role: 'Front-end Developer',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: `${t('team.szyrwel')}`,
      role: 'Front-end Developer',
      imageUrl: 'https://szyrwel.github.io/rsschool-cv/assets/img/myfoto.jpg',
    },
  ];

  return (
    <>
      <Header offsetY={offsetY} scrollY={scrollY} />
      <motion.div style={{ marginTop }}>
        <section className="welcome-section bg-[url('./public/graphql-conf-bg.png')] bg-cover bg-repeat text-white">
          <h2 className="welcome-title">GraphiQL</h2>
          <p className="text-2xl leading-8">GraphiQL {t('about_graphiql')}</p>
        </section>

        <section className="welcome-section bg-gray-200 text-secondary ">
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="welcome-title">{t('our_team')}</h2>
            <ul
              role="list"
              className="flex flex-col items-center justify-center gap-y-10 sm:flex-wrap sm:gap-x-10 md:flex-row"
            >
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
          </div>
          <button className="btn mt-10">
            <Link to={isAuthenticated ? '/main' : '/auth'}>
              {isAuthenticated ? t('go_to_main') : t('go_to_login')}
            </Link>
          </button>
        </section>
        <section className="welcome-section text-black">
          <h2 className="welcome-title">{t('about_course')}</h2>
          <p className="text-center text-2xl">{t('about_course_description')}</p>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default Welcome;
