import logo from "./logo.svg";
import "./App.css";
import { TodoPage } from "./Pages/TodoPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Show } from "./Pages/Show";
import { Edit } from "./Pages/Edit";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <TodoPage />
          </Route>
          <Route exact path="/:id">
            <Show />
          </Route>
          <Route path="/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
