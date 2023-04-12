import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles/globalStyle';
import { BrowserRouter } from 'react-router-dom';
import { HomeProvider } from './contexts/homeContexts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomeProvider>

      <BrowserRouter>
        <GlobalStyle/>
          <App />
      </BrowserRouter>
    </HomeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
