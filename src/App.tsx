import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import SignIn from './pages/Signin';
//import SignUp from './pages/Signup';
import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes></Routes>
    </AppProvider>
    <GlobalStyle></GlobalStyle>
  </Router>
);
export default App;
