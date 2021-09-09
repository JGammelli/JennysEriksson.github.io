import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import ScrollToTop from "./Components/ScrollToTop";
import{
  BrowserRouter as Router,
  Switch, 
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <>
        <Router>   
          <ScrollToTop/>     
          <div id="nav">
            <ul>
              <li><Link to="/">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
      </>
    );
  } 
}

export default App;
