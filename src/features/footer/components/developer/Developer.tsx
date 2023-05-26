import { AiFillGithub } from 'react-icons/ai';
import { IDeveloper } from '../../../../constants/constants';

export const Developer = ({ developer }: { developer: IDeveloper }) => {
  const { name, link } = developer;
  return (
    <li className="hover:text-primary">
      <a className="flex items-center gap-1" href={link}>
        <AiFillGithub size="20px" className="fill-pimary hover:fill-pimary" />
        <span>{name}</span>
      </a>
    </li>
  );
};
