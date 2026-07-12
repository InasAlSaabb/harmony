import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

// Standalone auth provider (no Base44 backend).
// The site is public, so we expose an anonymous, non-loading auth state
// while keeping the same API the rest of the app expects.
export const AuthProvider = ({ children }) => {
  const value = {
    user: null,
    isAuthenticated: false,
    isLoadingAuth: false,
    isLoadingPublicSettings: false,
    authError: null,
    appPublicSettings: null,
    logout: () => {},
    navigateToLogin: () => {},
    checkAppState: () => {},
  };



  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
