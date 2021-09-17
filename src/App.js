import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Main>
            <Route exact path='/' component={Home}/>
            <Route path='/login' component={Login}/>
          </Main>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
