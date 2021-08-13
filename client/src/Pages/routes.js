import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./Layout";

const Home = lazy(() => import("./Home"));
const Library = lazy(() => import("./Library"));
const Moods = lazy(() => import("./Moods"));

const Routes = () => {
  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <Switch>
        <Layout>
          <Route path="/personal-dj" component={Moods} />
          <Route path="/mymusic" component={Library} />
          <Route path="/home" component={Home} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </Layout>
      </Switch>
    </Suspense>
  );
};

export default Routes;
