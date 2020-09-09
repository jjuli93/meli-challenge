import React from 'react';
import Spinner, { SpinnerProps } from 'react-spinkit';

import { COLOR_SPINNER, SPINNER_DEFAULT } from './constants';

function Loading({ className = '', name = SPINNER_DEFAULT, color = COLOR_SPINNER, ...rest }: SpinnerProps) {
  return (
    <div className={`${className} row middle center full-height`}>
      <Spinner name={name} color={color} fadeIn="half" {...rest} />
    </div>
  );
}

export default Loading;
