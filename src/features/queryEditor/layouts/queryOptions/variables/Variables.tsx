import Codemirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';

export const Variables = ({ height, value }: { height: number; value: string }) => {
  return (
    <div style={{ height: `${height}px` }} className="">
      <Codemirror
        value={value}
        height="100%"
        maxHeight={`${height}px`}
        // extensions={[javascript({ jsx: true })]}
      />
    </div>
  );
};
