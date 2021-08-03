import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Pages = lazy(() => import("../Pages/routes"));
const Login = lazy(() => import("./Auth/Login"));

const Routes = () => (
  <Suspense fallback={() => <h1>Loading...</h1>}>
    <Switch>
      <Route path="/login" component={Login} />
      <Pages />
    </Switch>
  </Suspense>
);

export default Routes;
