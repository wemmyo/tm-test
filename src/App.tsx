import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EligibilityCheckScreen from "./screens/EligibilityCheck";
import EligibleCardsScreen from "./screens/EligibleCards";
import LandingScreen from "./screens/Landing";
import routes from "./routes";
function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.ELIGIBLE_CARDS} component={EligibleCardsScreen} />
        <Route
          path={routes.ELIGIBILITY_CHECK}
          component={EligibilityCheckScreen}
        />
        <Route exact path={routes.LANDING} component={LandingScreen} />
      </Switch>
    </Router>
  );
}

export default App;
