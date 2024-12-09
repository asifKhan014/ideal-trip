import * as jwtDecode from 'jwt-decode';

export const isTokenValid = (token) => {
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);
    return Date.now() < exp * 1000; // Check if the token has expired
  } catch {
    return false;
  }
};