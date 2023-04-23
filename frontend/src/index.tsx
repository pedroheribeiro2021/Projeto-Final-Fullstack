import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/globalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import { HomeProvider } from './contexts/homeContexts';
import { LoginProvider } from './contexts/loginContext';
import { RegisterUserProvider } from './contexts/registerContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>


      <BrowserRouter>
        <LoginProvider>
          <HomeProvider>
          <RegisterUserProvider>
            <ToastContainer/>
            <GlobalStyle/>
              <App />
          </RegisterUserProvider>
          </HomeProvider>
        </LoginProvider>
      </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
