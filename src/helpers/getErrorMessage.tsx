type StatusCode = {};

const getErrorMessage = (statusCode: StatusCode) => {
  if ((statusCode = 500)) return 'Internal Server Error';
  else if ((statusCode = 404)) return 'Not Found';
  else if ((statusCode = 403)) return 'Forbidden';
  else if ((statusCode = 401)) return 'Unauthorized';
  else if ((statusCode = 400)) return 'Bad Request';
  else if ((statusCode = 200)) return 'OK';
  else return 'Unknown Error';
};
