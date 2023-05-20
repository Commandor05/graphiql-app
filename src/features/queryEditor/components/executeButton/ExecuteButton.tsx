import { useState } from 'react';
import { PlayCircleIcon as PlayIcon } from '@heroicons/react/24/outline';
import { StopCircleIcon as StopIcon } from '@heroicons/react/24/solid';

const ExecuteButton = () => {
  const [isFetching, setIsFetching] = useState(false);

  const handleClick = () => {
    setIsFetching(!isFetching);
  };

  return (
    <button className="m-1 h-10 w-10" onClick={handleClick}>
      {isFetching ? <StopIcon /> : <PlayIcon />}
    </button>
  );
};

export default ExecuteButton;
