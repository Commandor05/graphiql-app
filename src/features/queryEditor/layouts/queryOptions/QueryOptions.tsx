import { useState } from 'react';
import { Variables } from './variables/Variables';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { OptionButton } from './optionButton/OptionButton';
import { v1 as uuidv1 } from 'uuid';
import React from 'react';

export enum TitleOptionButton {
  variables = 'Variables',
  headers = 'Headers',
}

export const QueryOptions = () => {
  const [queryOptionsIsOpen, setQueryOptionsIsOpen] = useState(false);
  const [optionIsOpen, setOptionIsOpen] = useState<TitleOptionButton>(TitleOptionButton.variables);
  const HEIGHT_HEADERS_QUERY_OPTIONS = 51;
  const MAX_HEIGHT_CODEMIRROR = 82;
  const [height, setHeight] = useState(HEIGHT_HEADERS_QUERY_OPTIONS);
  const [heightCodemirror, setHeightCodemirror] = useState(0);

  const toogleQueryOptions = () => {
    setQueryOptionsIsOpen(!queryOptionsIsOpen);
    if (!queryOptionsIsOpen) {
      setHeightCodemirror(MAX_HEIGHT_CODEMIRROR);
      setHeight(height + MAX_HEIGHT_CODEMIRROR);
    } else {
      setHeightCodemirror(0);
      setHeight(HEIGHT_HEADERS_QUERY_OPTIONS);
    }
  };
  const handleShowOption = (title: TitleOptionButton) => {
    if (!queryOptionsIsOpen) {
      toogleQueryOptions();
    }
    if (title !== optionIsOpen) {
      setOptionIsOpen(title);
    }
  };

  const onChange = React.useCallback((value: string) => {
    console.log('value:', value);
  }, []);

  return (
    <div
      className="qeditor-variables flex h-1/3 w-full flex-1 flex-col rounded-md border border-secondary  duration-500"
      style={{ maxHeight: `${height}px` }}
    >
      <div className="flex items-center justify-between rounded-t-lg border-b border-secondary p-2">
        <div className="flex gap-1 font-thin text-secondary">
          {[TitleOptionButton.variables, TitleOptionButton.headers].map((t) => {
            return (
              <OptionButton
                key={uuidv1()}
                optionIsOpen={optionIsOpen}
                handleShowOption={handleShowOption}
                title={t}
              />
            );
          })}
        </div>
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full border border-secondary"
          onClick={toogleQueryOptions}
        >
          {queryOptionsIsOpen ? (
            <MdKeyboardArrowDown color="#869cb6" />
          ) : (
            <MdKeyboardArrowUp color="#869cb6" />
          )}
        </button>
      </div>
      {optionIsOpen === TitleOptionButton.variables ? (
        <Variables height={heightCodemirror} value="25"></Variables>
      ) : (
        <Variables height={heightCodemirror} value="1"></Variables>
      )}
    </div>
  );
};
