import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvide: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvide;
