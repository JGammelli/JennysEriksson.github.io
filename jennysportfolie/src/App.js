import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
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
          <section id="profileSection">
            <div id="nameBox" >
                <h2>Portfolio</h2>
                <h1>Jenny Eriksson</h1>
                <p>Composer</p>
            </div>             
          </section>

          <div id="nav">
            <ul>
              <li><Link to="/portfolio">Portfolio</Link></li>
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
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
      </>
    );
  } 
}

export default App;
