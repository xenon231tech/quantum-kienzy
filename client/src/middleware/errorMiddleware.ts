export function errorMiddleware(error: any) {
  console.error("API Error:", error);
  return {
    status: error.response?.status || 500,
    message: error.response?.data?.message || "An error occurred",
  };
}
