import React, { Suspense } from 'react';

import Loading from '../Spinner/loading';

interface Props {
  Fallback?: React.ElementType;
  children: React.ReactNode;
}

function CustomSuspense({ Fallback = Loading, children }: Props) {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
}

export default CustomSuspense;
