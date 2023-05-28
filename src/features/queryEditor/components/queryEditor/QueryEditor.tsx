import CodeMirror from '@uiw/react-codemirror';
import Toolbar from '../toolbar/Toolbar';
import { getQuery, setQuery } from '../../../../redux/features/query/querySlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import './QueryEditor.css';

const QueryEditor = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(getQuery);

  const onChange = (value: string) => {
    dispatch(setQuery(value));
  };

  return (
    <div className="flex h-full flex-row">
      <div className="flex-auto">
        <CodeMirror style={{ height: '100%' }} value={query} height="100%" onChange={onChange} />
      </div>
      <Toolbar></Toolbar>
    </div>
  );
};

export default QueryEditor;
