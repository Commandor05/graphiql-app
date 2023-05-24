import Codemirror from '@uiw/react-codemirror';
import { useAppSelector } from '../../../../../redux/hooks';
import { getHeaders, setHeaders } from '../../../../../redux/features/query/headerSlice';
import { getVariables, setVariables } from '../../../../../redux/features/query/variableSlice';
import { useAppDispatch } from '../../../../../redux/hooks';
import { TitleOptionButton } from '../QueryOptions';

export const QueryOprion = ({
  height,
  optionIsOpen,
}: {
  height: number;
  optionIsOpen: TitleOptionButton;
}) => {
  const queryVariables = useAppSelector(getVariables);
  const queryHeaders = useAppSelector(getHeaders);
  const dispatch = useAppDispatch();
  const onChange = (value: string) => {
    optionIsOpen === TitleOptionButton.variables
      ? dispatch(setVariables(value))
      : dispatch(setHeaders(value));
  };
  return (
    <div style={{ height: `${height}px` }}>
      <Codemirror
        height="100%"
        maxHeight={`${height}px`}
        onChange={onChange}
        value={optionIsOpen === TitleOptionButton.variables ? queryVariables : queryHeaders}
      />
    </div>
  );
};
