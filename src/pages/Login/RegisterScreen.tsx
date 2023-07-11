import React from 'react';
import {LoginScreen} from './LoginScreen';

export const RegisterScreen: React.FC = props => (
  <LoginScreen {...props} isRegister={true} />
);
