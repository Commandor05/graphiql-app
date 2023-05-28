import { FC } from 'react';

type PersonCardProps = {
  name: string;
  role: string;
  imageUrl: string;
};

const PersonCard: FC<PersonCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex w-64 min-w-full items-center gap-x-2 rounded-lg px-2 py-3 shadow shadow-secondary">
      <img className="h-16 w-16 rounded-full" src={imageUrl} alt="" />
      <div>
        <p className="text-lg font-semibold leading-7 tracking-tight">{name}</p>
        <p className="text-sm font-thin leading-6">{role}</p>
      </div>
    </div>
  );
};

export default PersonCard;
