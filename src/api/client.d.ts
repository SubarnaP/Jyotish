declare module '@/api/client' {
  export class ApiClient {
    static getInstance(): ApiClient;
    fetch<T>(endpoint: string, options?: RequestInit): Promise<T>;
  }
  
  export const apiClient: ApiClient;
}
