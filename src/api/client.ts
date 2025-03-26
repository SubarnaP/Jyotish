/**
 * Singleton API client for making HTTP requests
 * Implements error handling and response type safety
 */

import { API_CONFIG, getApiUrl } from './config';

export class ApiClient {
  private static instance: ApiClient;
  private baseUrl: string;

  private constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  /**
   * Generic fetch method with type safety
   * @param endpoint - API endpoint path
   * @param options - Fetch options including headers
   * @returns Promise of type T
   * @throws Error if response is not ok
   */
  async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = getApiUrl(endpoint);
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return response.json();
  }
}

export const apiClient = ApiClient.getInstance();
