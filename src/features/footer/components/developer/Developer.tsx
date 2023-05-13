import { AiFillGithub } from 'react-icons/ai';
import { IDeveloper } from '../../../../constants/constants';

export const Developer = ({ developer }: { developer: IDeveloper }) => {
  const { name, link } = developer;
  return (
    <li className="hover:text-white">
      <a className="flex items-center gap-1" href={link}>
        <AiFillGithub size="25px" className="fill-pimary hover:fill-white" />
        <span>{name}</span>
      </a>
    </li>
  );
};
