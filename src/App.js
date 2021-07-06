
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Navbar from './components/Navbar';
function App() {
  return (
       <Router>
    <div className="App">
        

         <Switch>
          
           <Route path="/signin">
             <Header/>
             <h1>bnbmbbbj</h1>
                     <h1>Sigin</h1>
           </Route>

           <Route path="/confermOrder">
             <Header/>
             <h1>checkout</h1>
           </Route>

            <Route path="/orderDetails">
              <Header/>
              <h1>Order Details</h1>
                </Route>  

                <Route path="/address">
              <Header/>
              <h1>Any Where in India</h1>
                </Route>  

           <Route path='/'>
             <Header/>
             <Navbar/>
             <Home/>
           </Route>
           
         </Switch>
       
    </div>
       </Router>
  );
}

export default App;
