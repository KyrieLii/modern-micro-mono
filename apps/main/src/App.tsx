import { Switch, Route, Link } from '@modern-js/runtime/router';
import { useModuleApps } from '@modern-js/plugin-garfish';

const App = () => {
  const { Sub } = useModuleApps();
  return (
    <>
      <div>
        <Link to="/sub">sub</Link>
      </div>
      <Switch>
        <Route path="/sub">
          <Sub />
        </Route>
      </Switch>
    </>
  );
};

export default App;
