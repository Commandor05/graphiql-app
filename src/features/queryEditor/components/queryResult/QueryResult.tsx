import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { rickAndMortyApi } from '../../../../servises/rickandmorty';
import { getQuery } from '../../../../redux/features/query/querySlice';
import { useAppSelector } from '../../../../redux/hooks';
import Spinner from '../spinner/Spinner';

const extensions = [[json()]];

const QueryResult: FC = () => {
  const query = useAppSelector(getQuery);
  const useQueryStateResult = rickAndMortyApi.endpoints.getQueryByGraphQL.useQueryState(query, {
    skip: false,
  });
  return (
    <div className="flex h-full  w-full flex-row">
      {useQueryStateResult.isFetching && <Spinner />}
      {!useQueryStateResult.isFetching && !useQueryStateResult.isUninitialized && (
        <div className="flex-auto ">
          <CodeMirror
            style={{ height: '100%' }}
            value={
              useQueryStateResult.isError
                ? JSON.stringify(
                    { errors: useQueryStateResult.error.data.response.errors },
                    null,
                    '\t'
                  )
                : JSON.stringify({ data: useQueryStateResult.data }, null, '\t')
            }
            height="100%"
            extensions={extensions}
            editable={false}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              lineNumbers: false,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default QueryResult;
