import { useState } from 'react';
import { Variables } from './variables/Variables';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import './index.css';
import { OptionButton } from './optionButton/OptionButton';
import { v1 as uuidv1 } from 'uuid';

export enum TitleOptionButton {
  variables = 'Variables',
  headers = 'Headers',
}

export const QueryOptions = () => {
  const [queryOptionsIsOpen, setQueryOptionsIsOpen] = useState(true);
  const [optionIsOpen, setOptionIsOpen] = useState<TitleOptionButton>(TitleOptionButton.headers);
  const toogleOueryOptions = () => {
    setQueryOptionsIsOpen(!queryOptionsIsOpen);
  };
  const handleShowOption = (title: TitleOptionButton) => {
    if (title !== optionIsOpen) {
      setOptionIsOpen(title);
    }
  };

  return (
    <div className="qeditor-variables flex w-full flex-1 flex-col  bg-primary-background">
      <div className="flex items-center justify-between border border-secondary bg-primary-background p-2">
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

          {/* <button
            className={optionIsOpen ? 'btn-options btn-options_active' : 'btn-options'}
            onClick={handleShowOption}
          >
            Variables
          </button> */}
          {/* <button
            className={!optionIsOpen ? 'btn-options btn-options_active' : 'btn-options'}
            onClick={handleShowOption}
          >
            Headers
          </button> */}
        </div>
        <button
          className="flex h-6 w-6 items-center justify-center rounded-full border border-secondary"
          onClick={toogleOueryOptions}
        >
          {queryOptionsIsOpen ? (
            <MdKeyboardArrowDown color="#869cb6" />
          ) : (
            <MdKeyboardArrowUp color="#869cb6" />
          )}
        </button>
      </div>
      <Variables></Variables>
    </div>
  );
};
