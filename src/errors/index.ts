class Error {
  public readonly errorMessage: string;

  public readonly statusCodeError: number;

  constructor(message: string, code = 400) {
    this.errorMessage = message;
    this.statusCodeError = code;
  }
}

export default Error;
