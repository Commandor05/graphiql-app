import { PlayCircleIcon as PlayIcon } from '@heroicons/react/24/outline';
import { StopCircleIcon as StopIcon } from '@heroicons/react/24/solid';
import { rickAndMortyApi } from '../../../../servises/rickandmorty';
import { getQuery } from '../../../../redux/features/query/querySlice';
import { useAppSelector } from '../../../../redux/hooks';

const ExecuteButton = () => {
  const query = useAppSelector(getQuery);

  const [trigger, { isFetching }] = rickAndMortyApi.useLazyGetQueryByGraphQLQuery();
  const handleClick = () => {
    trigger(query);
  };

  return (
    <button className="m-1 h-10 w-10" onClick={handleClick}>
      {isFetching ? <StopIcon /> : <PlayIcon />}
    </button>
  );
};

export default ExecuteButton;
