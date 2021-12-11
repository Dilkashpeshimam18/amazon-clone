import React, {useEffect} from 'react';
import './App.css';
import './Header';
import Home from './Home';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from './StateProvider';
import {auth} from './firebase';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Order from './Order';

const promise = loadStripe('pk_test_51InLW4SFCCEicE5h6JWGTfSgHGP2crYUbk2EHRHJAYrFf894hKDbMSKb6k2X1OqOz4wBvFowPKErZpL4WocfHDAF00unF1e0pB');

function App() {
  const [{}, dispatch]= useStateValue();
useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    console.log('The user is>>>',authUser);
    if(authUser){
      //if the user is logged in or was logged in
      dispatch({
        type:'SET_USER',
        user : authUser,
      });

    }else{
      // if the user is logged out
      dispatch({
        type: 'SET_USER',
        user: null,
      });
    }
  });

},[]);
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/orders">
          <Header />
          <Order />
        </Route>
        <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
