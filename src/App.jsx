import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './dist/routes.jsx';
import TopBar from './dist/components/topBar.jsx';
function App() {
  return (
    <div>
      <Router>
        <TopBar></TopBar>
        <AllRoutes></AllRoutes>
      </Router>
    </div>
  );
}
export default App;
