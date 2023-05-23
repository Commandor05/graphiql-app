import { PlayCircleIcon as PlayIcon } from '@heroicons/react/24/outline';
import { StopCircleIcon as StopIcon } from '@heroicons/react/24/solid';
import { rickAndMortyApi } from '../../../../servises/rickandmorty';
import { setQuery } from '../../../../redux/features/query/querySlice';
import { useAppDispatch } from '../../../../redux/hooks';
import { FC } from 'react';

type ExecuteButtonProps = {
  currentQuery: string;
};

const ExecuteButton: FC<ExecuteButtonProps> = ({ currentQuery }) => {
  const dispatch = useAppDispatch();

  const [trigger, { isFetching }] = rickAndMortyApi.useLazyGetQueryByGraphQLQuery();
  const handleClick = async () => {
    dispatch(setQuery(currentQuery));
    trigger(currentQuery);
  };

  return (
    <button className="m-1 h-10 w-10" onClick={handleClick}>
      {isFetching ? <StopIcon /> : <PlayIcon />}
    </button>
  );
};

export default ExecuteButton;
