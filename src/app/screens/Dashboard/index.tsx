import React from 'react';
import { Switch } from 'react-router-dom';

import RouteItem from '~components/Routes/components/RouteItem';
import { home, searchList, productDetail } from '~components/Routes/paths';
import Header from '~components/Header';

import Home from './screens/Home';

function Dashboard() {
  return (
    <>
      <Header />
      <Switch>
        <RouteItem exact path={home} component={Home} />
        <RouteItem exact path={searchList} component={Home} />
        <RouteItem exact path={productDetail} component={Home} />
      </Switch>
    </>
  );
}

export default Dashboard;
