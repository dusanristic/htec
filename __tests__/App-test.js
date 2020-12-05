/**
 * @format
 */
import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import App from '../App';

it('renders correctly', () => {
  renderer.create(<App />);
});
