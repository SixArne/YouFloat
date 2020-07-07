import React from 'react';
import { hot } from 'react-hot-loader/root';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { RouteWithLayout } from './Utilities';

import {WindowApi, YoutubeApi} from './services';
import {Sidebar} from './layouts';
import {Landing, Watch} from './pages';


/*
hot component will take care of hot-reloading the electron application
every change inside this component tree will auto update

To add new routes, please use <RouteWithLayout> or <RouteNoLayout>
*/
export default hot((): JSX.Element =>
 (
  <HashRouter>
   <WindowApi>
     <YoutubeApi>
     <Switch>
      <RouteWithLayout path="/" exact component={Landing} layout={Sidebar}/>
      <RouteWithLayout path="/video/:id" exact component={Watch} layout={Sidebar}/>
     </Switch>
    </YoutubeApi>
   </WindowApi>
  </HashRouter>
 ));
