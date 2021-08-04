import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Employee from "./Components/Employee/Employee";
import Projects from "./Components/Projects/Projects";
import Login from "./Components/Login-Register/Login";
import Register from "./Components/Login-Register/Register";

function App() {
    
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employees" exact component={Employee} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
