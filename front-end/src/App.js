import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Employee from "./Components/Employee/Employee";
import Projects from "./Components/Projects/Projects";

function App() {
    
  return (
    <Router>
      <div className={styles.App}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employees" exact component={Employee} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
