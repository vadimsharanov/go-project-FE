import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './dist/routes.jsx';
import TopBar from './dist/components/topBar.jsx';
import { CurrentUserProvider } from './dist/contexts/currentUser.jsx';
import CurrentUserChecker from './dist/components/currentUserChecker.jsx';

function App() {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar></TopBar>
          <AllRoutes></AllRoutes>
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
}
export default App;
