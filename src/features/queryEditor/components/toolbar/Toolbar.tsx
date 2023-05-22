import { FC } from 'react';
import ExecuteButton from '../executeButton/ExecuteButton';

type ToolbarProps = {
  currentQuery: string;
};
const Toolbar: FC<ToolbarProps> = ({ currentQuery }) => {
  return (
    <div className="flex w-12 flex-none flex-col bg-white">
      <ExecuteButton currentQuery={currentQuery}></ExecuteButton>
    </div>
  );
};

export default Toolbar;
