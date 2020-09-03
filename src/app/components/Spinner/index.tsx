import React, { ReactNode } from 'react';
import { SpinnerProps } from 'react-spinkit';

import Loading from './components/loading';

interface Props extends SpinnerProps {
  loading: boolean;
  children: ReactNode;
}

export const spinnerContainer = ({ loading, children, ...spinnerProps }: Props) =>
  loading ? <Loading {...spinnerProps} /> : { children };
