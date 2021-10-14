
import './App.css';
import { BrowserRouter as Router ,Switch ,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import AuthProvider from './component/contextApi/AuthProvider';
import Shipping from './component/Shipping/Shipping';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import PlaceOrder from './component/placeOrder/PlaceOrder';

function App() {
  return (
   
     <div className="App">
       <AuthProvider>         
         <Router>
            <Header></Header>
            <Switch>
            <Route exact path='/'>
               <Home></Home>
            </Route>
            
            <Route exact path='/home'>
               <Home></Home>
            </Route>
            <Route path='/register'>
               <Register></Register>
            </Route>
            <Route path='/login'>
               <Login></Login>
            </Route>

            <PrivateRoute path="/shipping">
               <Shipping />
            </PrivateRoute>
            <PrivateRoute path="/placeOrder">
               <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            </Switch>
         </Router>
      </AuthProvider>  
   </div>
    
  );
}

export default App;
