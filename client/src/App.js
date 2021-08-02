import './App.css';
import {BrowserRouter as Router, Switch, Route, Prompt} from 'react-router-dom';
import { useState } from 'react';

//Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

//Components
import Navbar from './components/Navbar';
import BackDrop from './components/BackDrop';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      {/* Navbar */}
      <Navbar click={() => setSideToggle(true)}/>
      {/* SideDrawer */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      {/* BackDrop */}
      <BackDrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          {/* Render HomeScreen */}
          <Route exact path='/' component={HomeScreen} />

          {/* Render LoginScreen */}
          <Route exact path='/login' component={LoginScreen} />

          {/* Render RegisterScreen */}
          <Route exact path='/register' component={RegisterScreen} />

          {/* Render ProductScreen */}
          <Route exact path='/product/:id' component={ProductScreen} />

          {/* Render CartScreen */}
          <Route exact path='/cart' component={CartScreen} />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
 