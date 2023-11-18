import en from './locales/en.json';
import de from './locales/de.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['en', 'de'],
  defaultLocale: 'en',
  messages: {
    en,
    de
  }
}));
