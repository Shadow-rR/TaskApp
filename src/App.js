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
          <Route exact path="/" component={TodoPage}></Route>
          <Route exact path="/:id" component={Show}></Route>
          <Route path="/edit/:id" component={Edit}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
