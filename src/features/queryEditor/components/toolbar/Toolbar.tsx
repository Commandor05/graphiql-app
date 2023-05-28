import { FC } from 'react';
import ExecuteButton from '../executeButton/ExecuteButton';

const Toolbar: FC = () => {
  return (
    <div className="flex w-12 flex-none flex-col bg-white">
      <ExecuteButton></ExecuteButton>
    </div>
  );
};

export default Toolbar;
