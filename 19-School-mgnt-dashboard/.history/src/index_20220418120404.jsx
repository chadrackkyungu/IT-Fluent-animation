import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


import store from "./store";
import AuthContextProvider from "./Contexts/AuthContext"
import { ToastProvider } from 'react-toast-notifications'; //for the toast notifications

const app = (
  <Provider store={store}>
    <BrowserRouter>
    <AuthContextProvider>
      <ToastProvider> 
        <App />
        </ToastProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.register(); //change the service worker registration from 'unregistered' to 'registered'