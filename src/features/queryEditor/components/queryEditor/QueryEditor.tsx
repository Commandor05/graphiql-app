import CodeMirror from '@uiw/react-codemirror';

const QueryEditor = () => {
  return (
    <CodeMirror
      style={{ height: '100%' }}
      value="query{
        characters {
          results {
            id,
            name
          }
        }
      }"
      height="100%"
    />
  );
};

export default QueryEditor;
