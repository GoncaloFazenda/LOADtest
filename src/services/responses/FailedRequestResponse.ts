export default class FailedRequestResponse extends Error {
  public statusCode: string;

  constructor(statusCode: string, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
