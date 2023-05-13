import { Developer } from '../developer/Developer';
import { v1 as uuidv1 } from 'uuid';
import { ReactComponent as Logo } from '../../../../../public/rs_school.svg';
import { Wrapper } from '../../../../components/wrapper/Wrapper';
import { developers } from '../../../../constants/constants';

const Footer = () => {
  return (
    <footer className="background-primary text-primary">
      <Wrapper>
        <ul>
          {developers.map((developer) => {
            return <Developer key={uuidv1()} developer={developer} />;
          })}
        </ul>

        <span> © 2023 GraphiQL from RSSchool </span>
        <div>
          <a href="https://rs.school/js/">
            <Logo width="120" height="43" className="fill-primary hover:fill-white" />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
