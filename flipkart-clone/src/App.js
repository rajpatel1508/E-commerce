import React, { useEffect } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductListPage from './containers/productListPage';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, updateCart } from './actions';
import ProductDetailsPage from './containers/productDetailsPage';
import CartPage from './containers/CartPage';
import CheckoutPage from './containers/checkoutPage';
import OrderPage from './containers/OrderPage';
import OrderDetailsPage from './containers/orderDetailPage';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // useEffect(() => {
  //   if (!auth.authenticate) {
  //     console.log('here')
  //     dispatch(isUserLoggedIn());
  //   }
  // }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/account/orders" element={<OrderPage />} />
          <Route path="/order_details/:orderId" element={<OrderDetailsPage />} />
          <Route path="/:productSlug/:productId/p" element={<ProductDetailsPage />} />
          <Route path="/:slug" element={<ProductListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
