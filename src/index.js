import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import store from "./store/store";
import {Provider} from 'react-redux'
import './index.css';
import App from './pages/Home/App';
import SignIn from "./pages/SignIn/SignIn"
import reportWebVitals from './reportWebVitals';
import Profil from './pages/Profil/Profil';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profil />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
