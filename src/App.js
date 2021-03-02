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


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path='/admin' component={AdminPage} exact />
          <Route path='/' component={UserPage} />
        </Switch>
      </Router>

      {/* <BlockList />
      <BlockListAdmin /> */}

      {/* <AddBookmark/> */}

      {/* <AddCategory/> */}
      
    </>
  );
}

export default App;
