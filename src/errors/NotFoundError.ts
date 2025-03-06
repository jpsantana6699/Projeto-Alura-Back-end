import BaseError from './BaseError';

class NotFoundError extends BaseError {
  constructor(message = 'The requested route was not found') {
    super(message, 404);
  }
}

export default NotFoundError;
