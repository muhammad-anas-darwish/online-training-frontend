import http from '../plugins/http';
import type { AxiosResponse } from "axios";

interface User {
  email: string;
  password: string;
  name?: string;
}

interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

interface AuthData {
  user: {
    id: number;
    name: string;
    email: string;
  };
  token: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export class AuthService {
  static async login(user: User): Promise<ApiResponse<AuthData>> {
    try {
      const response: AxiosResponse<ApiResponse<AuthData>> = await http.post(
        `${API_BASE_URL}/auth/login`,
        user
      );

      if (response.data.success && response.data.data.token) {
        localStorage.setItem("auth", JSON.stringify(response.data.data));
      }

      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Login failed");
    }
  }

  static async register(user: User): Promise<ApiResponse<AuthData>> {
    try {
      const response: AxiosResponse<ApiResponse<AuthData>> = await http.post(
        `${API_BASE_URL}/auth/register`,
        user
      );
      
      if (response.data.success && response.data.data.token) {
        localStorage.setItem("auth", JSON.stringify(response.data.data));
      }

      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Registration failed");
    }
  }

  static async logout(): Promise<void> {
    try {
      const response: AxiosResponse<ApiResponse<AuthData>> = await http.post(
        `${API_BASE_URL}/auth/logout`
      );
      if (response.data.success) {
        localStorage.removeItem("auth");
      }
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message);
      }
      throw new Error("Registration failed");
    }
  }

  static isAuthenticated(): boolean {
    const auth = localStorage.getItem("auth");
    return !!auth && !!JSON.parse(auth).token;
  }

  static isGuest(): boolean {
    return !this.isAuthenticated();
  }

  static getAuthToken(): string | null {
    const auth = localStorage.getItem("auth");
    return auth ? JSON.parse(auth).token : null;
  }

  static getCurrentUser(): AuthData['user'] | null {
    const auth = localStorage.getItem("auth");
    return auth ? JSON.parse(auth).user : null;
  }
}