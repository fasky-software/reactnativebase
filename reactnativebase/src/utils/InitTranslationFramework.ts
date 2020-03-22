import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
const en = require('../assets/translations/en.json');

export const initTranslationFramework = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en,
      },
      lng: 'en',
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false,
      },
    });
};
