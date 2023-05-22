import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { rickAndMortyApi } from '../../../../servises/rickandmorty';
import { getQuery } from '../../../../redux/features/query/querySlice';
import { useAppSelector } from '../../../../redux/hooks';
import Spinner from '../spinner/Spinner';
import { isFetchBaseQueryError } from '../../../../servises/helpers';

const extensions = [[json()]];

const QueryResult: FC = () => {
  const query = useAppSelector(getQuery);
  const { data, error, isFetching, isError } =
    rickAndMortyApi.endpoints.getQueryByGraphQL.useQueryState(query, {
      skip: false,
    });

  return (
    <div className="flex h-full  w-full flex-row">
      {isFetching && <Spinner />}
      {!isFetching && (
        <div className="flex-auto ">
          <CodeMirror
            style={{ height: '100%' }}
            value={
              isError
                ? JSON.stringify(
                    isFetchBaseQueryError(error)
                      ? { errors: error.data.response.errors }
                      : { error },
                    null,
                    '\t'
                  )
                : JSON.stringify({ data: data }, null, '\t')
            }
            height="100%"
            extensions={extensions}
            editable={false}
            basicSetup={{
              foldGutter: false,
              dropCursor: false,
              allowMultipleSelections: false,
              lineNumbers: false,
              highlightActiveLine: false,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default QueryResult;
