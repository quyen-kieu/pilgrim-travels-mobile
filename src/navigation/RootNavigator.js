import React from 'react';

import AuthStack from './AuthStack';
import MainTabs from './MainTabs';

export default function RootNavigator() {
  /**
   * Temporary until JWT authentication is added.
   * false = show login flow
   * true  = show main application
   */
  const isAuthenticated = false;

  return isAuthenticated ? <MainTabs /> : <AuthStack />;
}