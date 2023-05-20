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
      className={optionIsOpen === title ? 'btn-options btn-options_active' : 'btn-options'}
      onClick={() => handleShowOption(title)}
    >
      {title}
    </button>
  );
};
