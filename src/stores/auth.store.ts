import { defineStore } from 'pinia';
import { AuthService } from '../services/auth.service';
import type { ApiResponse, AuthData } from '@services/auth.service';

interface AuthState {
  user: AuthData['user'] | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: AuthService.getCurrentUser(),
    isAuthenticated: AuthService.isAuthenticated(),
  }),

  getters: {
    // استخدم getters بدلاً من actions للخصائص المحسوبة
    isGuest: (state) => !state.isAuthenticated,
    currentUser: (state) => state.user,
  },

  actions: {
    async login(user: { email: string; password: string }): Promise<ApiResponse<AuthData>> {
      try {
        const response = await AuthService.login(user);
        if (response.success && response.data) {
          this.user = response.data.user;
          this.isAuthenticated = true;
        }
        return response;
      } catch (error) {
        this.logout();
        throw error;
      }
    },

    async register(user: { email: string; password: string; name: string }): Promise<ApiResponse<AuthData>> {
      const response = await AuthService.register(user);
      if (response.success && response.data) {
        this.user = response.data.user;
        this.isAuthenticated = true;
      }
      return response;
    },

    logout() {
      AuthService.logout();
      this.user = null;
      this.isAuthenticated = false;
    },

    checkAuth() {
      this.isAuthenticated = AuthService.isAuthenticated();
      this.user = AuthService.getCurrentUser();
      return this.isAuthenticated;
    },

  },
});