import './App.css';
import NavBar from './NavBar'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Home';
import Lessons from './Lessons'
import CoreValues from './CoreVaues';

function App() {
  return (
    <div className="App">
      <div>
       <img alt='Badge' src='https://i.postimg.cc/nzG6kNwT/Lucky2.jpg'></img>
      <h1 className="Header">Lucky kids academy</h1>
      </div>
      

      <Router>
      <NavBar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Lessons' component={Lessons} />
          <Route path='/CoreValues' component={CoreValues} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
