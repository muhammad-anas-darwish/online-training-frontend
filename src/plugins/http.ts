import axios from 'axios';
import { AuthService } from '../services/auth.service';
import { useAuthStore } from '../stores/auth.store';
import { useRouter } from "vue-router";

const router = useRouter();

const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

http.interceptors.request.use((config) => {
  const token = AuthService.getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  const userLanguage = localStorage.getItem('userLanguage') || 'en';
  config.headers['Accept-Language'] = userLanguage;

  return config;
}, (error) => {
  return Promise.reject(error);
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    const isLogout = error.config.url === error.config.baseURL + '/auth/logout';
    if (error.response?.status === 401 && !isLogout) {
      const authStore = useAuthStore();
      authStore.logout();
      router.push({ name: 'login' });
    }
    return Promise.reject(error);
  }
);

export default http;