import Codemirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from '@codemirror/lang-javascript';
import { tags as t } from '@lezer/highlight';

export const Variables = ({ height }: { height: number }) => {
  const myTheme = createTheme({
    theme: 'light',
    settings: {
      background: '#171e26', //бэкграунд поля с кодом
      foreground: '#fff', //цвет кода
      caret: 'red',
      selection: 'red',
      selectionMatch: 'red',
      lineHighlight: '#171e26',
      gutterBackground: '#171e26', // бэкграунд поля с цифрами
      gutterForeground: '#869cb6', //цвет цифр
      gutterBorder: '#171e26',
    },
    styles: [
      { tag: t.comment, color: '#787b8099' },
      { tag: t.variableName, color: '#0080ff' },
      { tag: [t.string, t.special(t.brace)], color: '#e10098' },
      { tag: t.number, color: 'red' },
      { tag: t.bool, color: '#5c6166' },
      { tag: t.null, color: '#5c6166' },
      { tag: t.keyword, color: '#fff000' },
      { tag: t.operator, color: '#fff000' },
      { tag: t.className, color: '#5c6166' },
      { tag: t.definition(t.typeName), color: '#fff000' },
      { tag: t.typeName, color: 'red' },
      { tag: t.angleBracket, color: '#fff000' },
      { tag: t.tagName, color: '#fff000' },
      { tag: t.attributeName, color: '#fff000' },
    ],
  });
  return (
    <div style={{ height: `${height}px` }} className="">
      <Codemirror
        height="100%"
        maxHeight={`${height}px`}
        theme={myTheme}
        extensions={[javascript({ jsx: true })]}
      />
    </div>
  );
};
