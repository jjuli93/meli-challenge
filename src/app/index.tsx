import React from 'react';
import { Helmet } from 'react-helmet';
import i18next from 'i18next';

import '../scss/application.scss';

import Routes from './components/Routes';

function App() {
  return (
    <>
      <Helmet>
        <title>{i18next.t('General:appTitle')}</title>
        <meta name="description" content={i18next.t('General:description') as string} />
      </Helmet>
      <Routes />;
    </>
  );
}

export default App;
