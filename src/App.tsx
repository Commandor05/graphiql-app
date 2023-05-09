import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from './shared/locales/i18next';
import SelectLanguage from './features/SelectLanguage';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <h1>{t('hello')} React. GraphiQL</h1>
        <SelectLanguage></SelectLanguage>
      </I18nextProvider>
    </>
  );
}

export default App;
