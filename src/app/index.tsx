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
      </Helmet>
      <Routes />;
    </>
  );
}

export default App;
