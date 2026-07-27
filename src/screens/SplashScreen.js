import React, { useEffect } from 'react';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return null;
}