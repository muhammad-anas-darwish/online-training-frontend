import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    greeting: 'Hello!',
    welcome: 'Welcome to our app!',
  },
  ar: {
    greeting: 'مرحبًا!',
    welcome: 'أهلاً بك في تطبيقنا!',
  },
};

const i18n = createI18n({
  locale: 'ar', 
  fallbackLocale: 'en', 
  messages, 
});

export default i18n;