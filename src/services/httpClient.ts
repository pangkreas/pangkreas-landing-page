
/**
 * HTTP Client Service
 * 
 * A wrapper around the native fetch API or axios to standardize 
 * request headers, timeout handling, and global response processing.
 */

interface RequestOptions extends RequestInit {
  params?: Record<string, string>;
}

export const httpClient = {
  async get<T>(url: string, options: RequestOptions = {}): Promise<T> {
    const fullUrl = options.params 
      ? `${url}?${new URLSearchParams(options.params)}` 
      : url;
      
    const response = await fetch(fullUrl, {
      ...options,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },

  async post<T>(url: string, body: any, options: RequestOptions = {}): Promise<T> {
    const response = await fetch(url, {
      ...options,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }
};
