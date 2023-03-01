interface ApiErrorOptions {
  message: string;
  statusCode: number;
  data?: object;
}

class ApiError extends Error {
  public statusCode: number;
  public data: object | undefined;
  constructor({ message, statusCode, data }: ApiErrorOptions) {
    super();
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;

    // Helps identify `instanceOf` applications
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
export default ApiError;
