import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./components/App/App";
import persistor, {store}  from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
     </PersistGate> 
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
