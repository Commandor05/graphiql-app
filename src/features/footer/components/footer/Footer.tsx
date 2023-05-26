import { Developer } from '../developer/Developer';
import { v1 as uuidv1 } from 'uuid';
import { ReactComponent as Logo } from './assets/rs_school.svg';
import { Wrapper } from '../../../../components/wrapper/Wrapper';
import { developers } from '../../../../constants/constants';
import './footer.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="background-primary text-secondary">
      <Wrapper>
        <div className="footer-container">
          <ul className=" flex flex-wrap justify-center gap-x-5 sm:flex-col ">
            {developers.map((developer) => {
              return <Developer key={uuidv1()} developer={developer} />;
            })}
          </ul>

          <span> © {t('footer_title')}</span>
          <div>
            <a href="https://rs.school/js/">
              <Logo width="120" height="43" className="fill-secondary hover:fill-primary" />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
