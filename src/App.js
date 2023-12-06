import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./pages/Sidebar";
import { HashRouter, Switch, Route } from "react-router-dom";
import Task from "./pages/Task";
import AddDataForm from "./pages/AddDataForm";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Task} />
          <Route path="/addform" component={AddDataForm} />
        </Switch>
      </HashRouter>
    </div>
  );
}
export default App;
