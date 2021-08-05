import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Employee from "./Components/Employee/Employee";
import Projects from "./Components/Projects/Projects";
import Login from "./Components/Login-Register/Login";
import Register from "./Components/Login-Register/Register";

import {useSelector} from 'react-redux';
function App() {
    
  const userStatus = useSelector((state) => state.status);
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employees" exact component={Employee} />
          <Route path="/projects" exact component={Projects} />
          <Route exact path='/register'>
            {userStatus ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path='/login'>
            {userStatus? <Redirect to="/"/>: <Login />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
