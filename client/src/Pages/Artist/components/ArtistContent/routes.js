import { Flex } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import {
  Redirect,
  Route,
  Switch,
  useParams
} from 'react-router-dom';

const All = lazy(() => import('../../content/All'));
const LatestReleases = lazy(
  () => import('../../content/LatestReleases')
);

const Routes = () => {
  const { id } = useParams();
  return (
    <Suspense fallback={() => <h1>Loading...</h1>}>
      <Flex marginTop="2em">
        <Switch>
          <Route path="/artist/:id/5" component={All} />
          <Route path="/artist/:id/4" component={All} />
          <Route path="/artist/:id/3" component={All} />
          <Route
            path="/artist/:id/2"
            component={LatestReleases}
          />
          <Route path="/artist/:id/1" component={All} />
          <Route
            path="/artist/:id"
            render={() => (
              <Redirect to={`/artist/${id}/1`} />
            )}
          />
        </Switch>
      </Flex>
    </Suspense>
  );
};

export default Routes;
