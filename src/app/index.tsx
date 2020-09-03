import React, { useReducer } from 'react';

import '../scss/application.scss';

import { reducer as userReducer, INITIAL_STATE } from '~contexts/GlobalContext/reducer';
import { Context } from '~app/contexts/GlobalContext';

import Routes from './components/Routes';

function App() {
  const [globalState, userDispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <Context.Provider value={{ state: globalState, dispatch: userDispatch }}>
      <Routes />
    </Context.Provider>
  );
}

export default App;
