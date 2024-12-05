import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// Initialisation de i18next avec les ressources de traduction
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN
    },
    fr: {
      translation: translationFR
    }
  },
  lng: 'en', // Langue par défaut
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
