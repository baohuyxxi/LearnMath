import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./assets/css/grid.scss";
import "./assets/css/frame.scss";
import "./assets/css/index.scss";
import "./assets/css/responsive.scss";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
