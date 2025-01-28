import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import CharacterScreen from '../screens/CharacterScreen';
import MoveListScreen from '../screens/MoveListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Characters" component={CharacterScreen} />
        <Stack.Screen name="MoveList" component={MoveListScreen} />
      </Stack.Navigator>
  );
}
