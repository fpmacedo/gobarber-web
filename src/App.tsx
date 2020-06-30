import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn></SignIn>
    </AuthProvider>
    <GlobalStyle></GlobalStyle>
  </>
);
export default App;
