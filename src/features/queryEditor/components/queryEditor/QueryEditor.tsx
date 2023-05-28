import CodeMirror from '@uiw/react-codemirror';
import { useState } from 'react';
import Toolbar from '../toolbar/Toolbar';
import { getQuery } from '../../../../redux/features/query/querySlice';
import { useAppSelector } from '../../../../redux/hooks';
import './QueryEditor.css';

const QueryEditor = () => {
  const query = useAppSelector(getQuery);
  const [currentQuery, setCurrentQuery] = useState(query);

  const onChange = (value: string) => {
    setCurrentQuery(value);
  };

  return (
    <div className="flex h-full flex-row">
      <div className="flex-auto">
        <CodeMirror
          style={{ height: '100%' }}
          value={currentQuery}
          height="100%"
          onChange={onChange}
        />
      </div>
      <Toolbar></Toolbar>
    </div>
  );
};

export default QueryEditor;
