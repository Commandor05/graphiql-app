import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { getResult } from '../../../../redux/features/query/resultSlice';
import { useAppSelector } from '../../../../redux/hooks';
import Spinner from '../spinner/Spinner';

const extensions = [[json()]];

const QueryResult: FC = () => {
  const { result, isFetching } = useAppSelector(getResult);

  if (isFetching) return <Spinner />;

  return (
    <div className="flex h-full  w-full flex-row">
      <div className="flex-auto ">
        <CodeMirror
          style={{ height: '100%' }}
          value={result}
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
    </div>
  );
};

export default QueryResult;
