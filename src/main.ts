import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import i18n from './i18n'; 
import http from './plugins/http';

const pinia = createPinia()
const app = createApp(App)
// Initialize document direction (ltr/rtl) from storage or current locale
;(() => {
  const storedDirection = localStorage.getItem('direction');
  const currentLocale = (i18n.global as any).locale?.value || 'en';
  const inferredDirection = currentLocale === 'ar' ? 'rtl' : 'ltr';
  const directionToApply = storedDirection || inferredDirection;
  document.documentElement.setAttribute('dir', directionToApply);
  if (!storedDirection) {
    localStorage.setItem('direction', directionToApply);
  }
})();

app.use(router);
app.use(pinia);
app.use(i18n);

app.config.globalProperties.$http = http;

app.mount('#app');
