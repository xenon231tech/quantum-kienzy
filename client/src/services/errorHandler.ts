export class ErrorHandler {
  static handle(error: Error): string {
    if (error instanceof TypeError) {
      return "Type error occurred";
    }
    if (error instanceof RangeError) {
      return "Range error occurred";
    }
    return error.message || "An unknown error occurred";
  }

  static async handleAsync<T>(promise: Promise<T>): Promise<[T | null, Error | null]> {
    try {
      const data = await promise;
      return [data, null];
    } catch (error) {
      return [null, error instanceof Error ? error : new Error("Unknown error")];
    }
  }
}
