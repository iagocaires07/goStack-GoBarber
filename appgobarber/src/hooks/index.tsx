import React from 'react';

import { AuthProvider } from './auth';

const AppProvide: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvide;
