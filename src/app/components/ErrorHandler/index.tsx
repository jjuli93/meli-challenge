import React from 'react';

import { notFoundErrorCode, ApiError } from '~models/apiError';
import { Error } from '~app/hooks/useRequest';

interface Props {
  error: Error<ApiError>;
}

function ErrorHandler({ error }: Props) {
  // TODO: implement error components for each case
  const code = error.errorData?.internal_code;

  switch (code) {
    case notFoundErrorCode:
      return <p className="text-align-center text-large">Recurso no encontrado</p>;

    default:
      return <p className="text-align-center text-large">Error</p>;
  }
}

export default ErrorHandler;
