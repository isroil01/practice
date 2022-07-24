import './App.css';
import { ToastContainer } from 'react-toastify';
import {Switch,Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';



function App() {
 
  return (
    <div className="App">
       <ToastContainer />
       <Nav />
       <Switch>
         <Route exact path='/' >
            <Home />
         </Route>
         <Route path='/add' exact>
           <AddContact />
         </Route>
         <Route path='/edit/:id'>
            <EditContact />
         </Route>
       </Switch>
    </div>
  );
}

export default App;
