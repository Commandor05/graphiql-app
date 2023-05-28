import { PlayCircleIcon as PlayIcon } from '@heroicons/react/24/outline';
import { StopCircleIcon as StopIcon } from '@heroicons/react/24/solid';
import { rickAndMortyApi } from '../../../../servises/rickandmorty';
import { getQuery } from '../../../../redux/features/query/querySlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { FC } from 'react';
import { getVariables } from '../../../../redux/features/query/variableSlice';
import { getHeaders } from '../../../../redux/features/query/headerSlice';
import { setResult } from '../../../../redux/features/query/resultSlice';

const ExecuteButton: FC = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(getQuery);
  const variablesString = useAppSelector(getVariables);
  const headersString = useAppSelector(getHeaders);

  const [trigger, { isFetching }] = rickAndMortyApi.useLazyGetQueryByGraphQLQuery();
  const handleClick = () => {
    let beginMesage = 'Variables are invalid JSON:';
    try {
      const variables = variablesString == '' ? {} : JSON.parse(variablesString);
      beginMesage = 'Headers are invalid JSON:';
      const headers = headersString == '' ? {} : JSON.parse(headersString);
      trigger({ query, variables: variables, headers: headers });
    } catch (err) {
      if (err instanceof Error) dispatch(setResult(`${beginMesage} ${err.message}`));
    }
  };

  return (
    <button className="m-1 h-10 w-10" onClick={handleClick}>
      {isFetching ? <StopIcon /> : <PlayIcon />}
    </button>
  );
};

export default ExecuteButton;
