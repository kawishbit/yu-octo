export class Themes {
  // Create new instances of the same class as static attributes
  static White = "white";
  static Midnight = "midnight";

  static getAllArray() {
    return [this.Midnight, this.White];
  }
}

export class ErrorCodes {
  static Ok = 200;
  static BadRequest = 400;
  static Unauthorized = 401;
  static Forbidden = 403;
  static NotFound = 404;
  static MethodNotAllowed = 405;
  static RequestTimeout = 408;
  static InternalServerError = 500;
}
