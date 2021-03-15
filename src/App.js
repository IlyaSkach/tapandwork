import './App.css';
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";


import Header from './Components/Header/Header';
import HeaderAdmin from './Components/HeaderAdmin/HeaderAdmin'
import BlockList from './Components/BlockList/BlockList'
import BlockListAdmin from './Components/BlockListAdmin/BlockListAdmin';
import UserPage from './Components/UserPage/UserPage';
import AdminPage from './Components/AdminPage/AdminPage';
import AddBookmark from './Components/AddBookmark/AddBookmark';
import AddCategory from './Components/AddCategory/AddCategory';
// Added Redux 

import reducer from './'
import ViweList from './Components/NewCategory/Addnewcat';



function App() {

  return (
    
      <Router>
        <Switch>
          <Route path='/admin' component={AdminPage} exact />
          <Route path='/' component={UserPage} />
        </Switch>
      </Router>

      

  );
}

export default App;
