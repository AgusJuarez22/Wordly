import "./App.css";
import { Route, useLocation } from "react-router-dom";
import { Home, Landing, Detail, Form } from "./views/index";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <SideBar />}
      <Route exact path="/">
        <Landing className=".container"></Landing>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/detail/:id">
        <Detail></Detail>
      </Route>
      <Route path="/create">
        <Form></Form>
      </Route>
    </div>
  );
}

export default App;
