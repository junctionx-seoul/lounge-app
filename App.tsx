import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Root from './src/screens/Root';
import Hello from './src/screens/Hello';
import Create from './src/screens/Hello/Create';
import ZepetoCode from './src/screens/Hello/ZepetoCode';
import ZepetoPreview from './src/screens/Hello/ZepetoPreview';
import CheckAvatar from './src/screens/Hello/CheckAvatar';
import Sidebar from './src/screens/Sidebar';

const Drawer = createDrawerNavigator();

const HelloStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={Sidebar}
        drawerStyle={{
          width: '100%',
        }}
        drawerType="slide"
      >
        <Drawer.Screen name="TESTSLIDE" component={Sidebar} />
        <Drawer.Screen name="Home" component={Root} />
        <Drawer.Screen name="Hello">
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
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
