import { createI18n } from 'vue-i18n';
import en from '../locales/en.json';
import de from '../locales/de.json';
import sl from '../locales/sl.json';

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      de,
      sl
    }
  });

  vueApp.use(i18n);
});
