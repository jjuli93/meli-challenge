import React from 'react';
import { Switch } from 'react-router-dom';

import RouteItem from '~components/Routes/components/RouteItem';
import { home, searchList, productDetail } from '~components/Routes/paths';
import Header from '~components/Header';

import Home from './screens/Home';
import SearchList from './screens/SearchList';
import ProductDetail from './screens/ProductDetail';

function Dashboard() {
  return (
    <div className="column">
      <Header />
      <div className="container self-center full-width">
        <Switch>
          <RouteItem exact path={searchList} component={SearchList} />
          <RouteItem exact path={productDetail.path} component={ProductDetail} />
          <RouteItem exact path={home} component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default Dashboard;
