import React from "react";
import Home from "../pages/Home"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function AppRoute(props) {
  return (
    <Router {...props}>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default AppRoute;