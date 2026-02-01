import { apiRequest } from "../api/apiClient";

// export type User = {
//   id: number;
//   name: string;
//   age: number;
// };
// export const getUserById = (id: number) => {
//   return apiRequest<User>(`/api/users/${id}`);
// };

export type authStartData = {
  chainId: string;
  address: string;
};

export const authSiweStart = (data: authStartData) => {
  return apiRequest("/v1/auth/siwe/start", "POST", data);
};

export type authVerifyData = {
  message: string;
  signature: string;
};

export const authSiweVerify = (data: authVerifyData) => {
  return apiRequest("/v1/auth/siwe/verify", "POST", data);
};
