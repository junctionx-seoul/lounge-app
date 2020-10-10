import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Root from './src/screens/Root';
import Hello from './src/screens/Hello';
import Create from './src/screens/Hello/Create';

const Stack = createStackNavigator();

const HelloStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Hello"
          component={() => (
            <HelloStack.Navigator>
              <HelloStack.Screen name="Index" component={Hello} />
              <HelloStack.Screen name="Create" component={Create} />
            </HelloStack.Navigator>
          )}
        />
        <Stack.Screen name="Home" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
