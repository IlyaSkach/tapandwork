import './App.css';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";


import Header from './Components/Header/Header';
import HeaderAdmin from './Components/HeaderAdmin/HeaderAdmin'


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/admin' component={HeaderAdmin} exact />
          <Route path='/' component={Header} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
