import { BrowserRouter, Route, Switch } from "react-router-dom";

//styles
import "./App.css";

//components
import Dashboard from "./page/dashboard/Dashboard";
import Create from "./page/create/Create";
import Login from "./page/login/Login";
import Signup from "./page/signup/Signup";
import Project from "./page/project/Project";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/projects/:id">
              <Project />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
