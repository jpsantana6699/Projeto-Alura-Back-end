import BadRequestError from './BadRequestError';
import sequelize from 'sequelize';

class ValidationError extends BadRequestError {
  constructor(error: sequelize.ValidationError) {
    const errorMessage = Object.values(error.errors)
      .map(error => error.message)
      .join(' | ');

    super(`The following errors were found: ${errorMessage}.`);
  }
}

export default ValidationError;
