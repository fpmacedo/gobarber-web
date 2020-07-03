import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
//import SignUp from './pages/Signup';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn></SignIn>
    </AppProvider>
    <GlobalStyle></GlobalStyle>
  </>
);
export default App;
