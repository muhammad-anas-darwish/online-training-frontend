import { createI18n } from 'vue-i18n';

const messages = {
  'en-US': {
    greeting: 'Hello!',
    welcome: 'Welcome to our app!',
  },
  'ar-SA': {
    greeting: 'مرحبًا!',
    welcome: 'أهلاً بك في تطبيقنا!',
  },
};

const i18n = createI18n({
  legacy: false, 
  locale: localStorage.getItem('userLanguage') || 'en-US',
  fallbackLocale: 'en-US',
  messages, 
});

export default i18n;