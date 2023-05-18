import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

const SelectLanguage: FC = () => {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(i18n.language);

  const changeLang = (lng: string): void => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
    setCurrent(lng);
  };

  return (
    <div className="block items-center gap-4 text-secondary sm:flex">
      <p className="text-center text-sm font-medium leading-6">{t('selectLng')}</p>
      <select
        value={current}
        onChange={(e) => changeLang(e.currentTarget.value)}
        className="relative h-9 w-32 cursor-default rounded-md bg-white py-1.5 pl-3 pr-7 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
