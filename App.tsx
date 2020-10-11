import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Root from './src/screens/Root';
import Hello from './src/screens/Hello';
import Create from './src/screens/Hello/Create';
import ZepetoCode from './src/screens/Hello/ZepetoCode';
import ZepetoPreview from './src/screens/Hello/ZepetoPreview';

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
        <Stack.Screen name="Hello">
          {() => (
            <HelloStack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <HelloStack.Screen name="Index" component={Hello} />
              <HelloStack.Screen name="Create" component={Create} />
              <HelloStack.Screen name="ZepetoCode" component={ZepetoCode} />
              <HelloStack.Screen
                name="ZepetoPreview"
                component={ZepetoPreview}
              />
            </HelloStack.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen name="Home" component={Root} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
