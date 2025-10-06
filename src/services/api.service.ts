import http from '../plugins/http';

class ApiService {
  private static instance: ApiService;

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  public async get(url: string, params?: any) {
    return http.get(url, { params });
  }

  public async post(url: string, data: any) {
    return http.post(url, data);
  }

  public async put(url: string, data: any) {
    return http.put(url, data);
  }

  public async delete(url: string) {
    return http.delete(url);
  }
}

export default ApiService.getInstance();