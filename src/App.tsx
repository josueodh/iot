import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "./hooks";
import Routes from "./routes";

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
  </Router>
);

export default App;
