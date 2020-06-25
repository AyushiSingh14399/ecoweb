import React from 'react';
// import ProfileScreen from './screens/ProfileScreen';
import {BrowserRouter,Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';


function App() {

    const userSignin=useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;
  const openMenu=() =>{
    document.querySelector(".sidebar").classList.add("open");

  };
  const closeMenu=() =>{
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
      <BrowserRouter>
    <div className="grid-container">
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>

            &#9776;
            </button>
            <Link to="/">E-techsystem</Link>
            
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            {
                userInfo ? (<Link to="/profile">{userInfo.name}</Link>):(
                
                <Link to="/signin">Sign In</Link>
                )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#"  >Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
            
        </div>
    </header>

    <aside className="sidebar">
        <h3>Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li>
                <a href="index.html">Laptop</a>
            </li>
            <li>
                <a href="index.html">Mouse</a>
            </li>
        </ul>
    </aside>
    
    <main className="main"> 
        <div className="content">
        <Route path="/products" component={ProductsScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/signin" component={SigninScreen}   />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
        <Route path="/cart/:id?" component={CartScreen}/>
       {/* <Route path="/profile" component={ProfileScreen} /> */}
        </div>

    </main>
    
</div>
</BrowserRouter>
  );
}

export default App;
