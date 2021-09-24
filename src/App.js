import logo from './logo.svg';
import './App.css';
import "@shopify/polaris/dist/styles.css";
import { Card,
         Form,
         FormLayout,
         TextField,
         RadioButton,
         Button,
         SettingToggle,
         TextStyle,
         Link,
         Select
        } from '@shopify/polaris';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Payment from './payment';


function App() {


  return (
    <Router>
    <Switch>
    <Route path="/payment/:id">
    <Payment/>
    </Route>
    </Switch>
    </Router>

  );
}

export default App;
