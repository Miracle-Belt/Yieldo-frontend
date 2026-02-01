import { API_BASE_URL } from "../config/api";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export async function apiRequest<T>(
  endpoint: string,
  method: HttpMethod = "GET",
  body?: unknown,
): Promise<T> {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    // HTTP-level error handling
    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || `HTTP Error: ${res.status}`);
    }

    // No content response
    if (res.status === 204) {
      return null as T;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error; // rethrow for component-level handling
  }
}
