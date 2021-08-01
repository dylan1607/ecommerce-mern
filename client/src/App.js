import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';

//Screens
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';

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
          {/* Render Login Screen */}
          <Route exact path='/login' component={HomeScreen} />

          {/* Render HomeScreen */}
          <Route exact path='/' component={LoginScreen} />

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
 