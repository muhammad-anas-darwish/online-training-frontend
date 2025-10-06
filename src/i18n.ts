import { createI18n } from 'vue-i18n';

const messages = {
  'en': {
    greeting: 'Hello!',
    welcome: 'Welcome to our app!',
    login: 'Login',
    password: 'Password',
    email: 'Email',
  },
  'ar': {
    greeting: 'مرحبًا!',
    welcome: 'أهلاً بك في تطبيقنا!',
    login: 'تسجيل دخول',
    password: 'كلمة السر',
    email: 'البريد الإلكتروني',
  },
};

const i18n = createI18n({
  legacy: false, 
  locale: localStorage.getItem('userLanguage') || 'en',
  fallbackLocale: 'en',
  messages, 
});

export default i18n;