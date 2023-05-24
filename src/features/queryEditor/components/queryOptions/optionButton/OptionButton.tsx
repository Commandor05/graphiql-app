import { TitleOptionButton } from '../QueryOptions';

type OptionButtonProps = {
  title: TitleOptionButton;
  optionIsOpen: string;
  handleShowOption: (title: TitleOptionButton) => void;
};

export const OptionButton = (props: OptionButtonProps) => {
  const { optionIsOpen, handleShowOption, title } = props;
  return (
    <button
      className={
        optionIsOpen === title
          ? 'rounded-md border border-secondary bg-neutral-100 px-2 py-1'
          : 'rounded-md border px-2 py-1 hover:border-secondary'
      }
      onClick={() => handleShowOption(title)}
    >
      {title}
    </button>
  );
};
