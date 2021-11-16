import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './dist/routes.jsx';
import TopBar from './dist/components/topBar.jsx';
import { CurrentUserProvider } from './dist/contexts/currentUser.jsx';

function App() {
  return (
    <CurrentUserProvider>
      <Router>
        <TopBar></TopBar>
        <AllRoutes></AllRoutes>
      </Router>
    </CurrentUserProvider>
  );
}
export default App;
