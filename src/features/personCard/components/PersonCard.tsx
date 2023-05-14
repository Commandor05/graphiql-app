import { FC } from 'react';

type PersonCardProps = {
  name: string;
  role: string;
  imageUrl: string;
};

const PersonCard: FC<PersonCardProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex items-center gap-x-6 rounded-lg p-3 shadow-xl">
      <img className="h-16 w-16 rounded-full" src={imageUrl} alt="" />
      <div>
        <p className="text-base font-semibold leading-7 tracking-tight text-gray-700">{name}</p>
        <p className="text-sm font-semibold leading-6 text-indigo-500">{role}</p>
      </div>
    </div>
  );
};

export default PersonCard;
