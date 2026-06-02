export function authMiddleware(token?: string) {
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
}
