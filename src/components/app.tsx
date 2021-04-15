import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { AppConfig } from "../config";
import PrivateRoute from "./routing/private-route";
import { RouterConfig } from "./routing/routes";
import SiderbarComponent from "./sidebar/sidebar";
import { ClassListComponent } from "./business/class/class-list";
import Settings from "./business/settings/settings";
import BusinessSetup from "./business/setup/setup";
import NewClass from "./business/add-new-class/new-class";
import HorizontalLinearStepper from "./business/add-new-class-mui/new-class";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import LeftSidebar from "./sidebar/sidebar2";

axios.defaults.baseURL = AppConfig.baseURL;

function App() {
  const getRoute = (route: {
    redirect?: string;
    authed?: boolean;
    exact?: boolean;
    path: string;
    component?: React.LazyExoticComponent<any>;
  }) => {
    const RouteLink = route.authed === false ? Route : PrivateRoute;
    const redirect = route.redirect;
    return redirect ? (
      <Route
        key={route.path}
        exact
        path={route.path}
        render={() => <Redirect to={redirect} />}
      />
    ) : (
      <RouteLink
        exact={route.exact}
        key={route.path}
        path={route.path}
        component={route.component}
      />
    );
  };
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <div className='wrapper'> */}
        {/* <SiderbarComponent /> */}
        <LeftSidebar>
          <>
            <Route exact path='/new-class/:page' component={NewClass} />
            <Route
              exact
              path='/new-class'
              render={() => <Redirect to='/new-class/basic-info' />}
            />
            <Route
              exact
              path='/new-class2'
              component={HorizontalLinearStepper}
              // render={() => <Redirect to='/new-class/basic-info' />}
            />
          </>
        </LeftSidebar>
        <Switch>
          <Suspense fallback={<Spinner animation='grow' />}></Suspense>
        </Switch>
        {/* </div> */}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
