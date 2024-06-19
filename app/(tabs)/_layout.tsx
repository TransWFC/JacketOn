import React from 'react';
import MiCuenta from './porfile';  // Asegúrate de que la ruta sea correcta
import LoginScreen from './login';
import SignUpScreen from './signup';
import ConnectDBScreen from "../(tabs)/ConnectDBScreen";

export default function TabLayout() {
  return <SignUpScreen navigation={undefined} />;
}
