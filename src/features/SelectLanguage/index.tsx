import { FC, useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Tooltip } from 'flowbite-react';

const SelectLanguage: FC = () => {
  const { t, i18n } = useTranslation();
  const languages = [
    { id: 1, code: 'en', name: 'Eng' },
    { id: 2, code: 'ru', name: 'Rus' },
  ];
  const initialLang = languages.find((l) => l.code === i18n.language) || languages[0];
  const [current, setCurrent] = useState(initialLang);

  const changeLang = (lng: { id: number; code: string; name: string }): void => {
    i18n.changeLanguage(lng.code);
    localStorage.setItem('lng', lng.code);
    setCurrent(lng);
  };

  return (
    <div className="w-24">
      <Listbox value={current} onChange={changeLang}>
        <div className="relative mt-0">
          <Tooltip
            className="w-20"
            content={t('selectLng')}
            placement="left-start"
            style="light"
            trigger="hover"
            animation="duration-1000"
          >
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{current.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {languages.map((lang) => (
                  <Listbox.Option
                    key={lang.code}
                    value={lang}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-2 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                  >
                    <>
                      <span
                        className={`block truncate ${
                          lang.code == current.code ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {lang.name}
                      </span>
                      {lang.code == current.code ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Tooltip>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectLanguage;
