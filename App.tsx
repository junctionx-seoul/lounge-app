import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Root from './src/screens/Root';
import Hello from './src/screens/Hello';
import Create from './src/screens/Hello/create/';
import Info from './src/screens/Hello/create/info';
import ZepetoCode from './src/screens/Hello/create/ZepetoCode';
import ZepetoPreview from './src/screens/Hello/create/ZepetoPreview';
import Sidebar from './src/screens/Sidebar';
import Exhibition from './src/screens/Exhibition';
import Username from './src/screens/Hello/Login';

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
        <Drawer.Screen name="Hello">
          {() => (
            <HelloStack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <HelloStack.Screen name="Index" component={Hello} />
              <HelloStack.Screen name="Create" component={Create} />
              <HelloStack.Screen name="Username" component={Username} />
              <HelloStack.Screen name="Username" component={Info} />
              <HelloStack.Screen name="ZepetoCode" component={ZepetoCode} />
              <HelloStack.Screen
                name="ZepetoPreview"
                component={ZepetoPreview}
              />
            </HelloStack.Navigator>
          )}
        </Drawer.Screen>
        <Drawer.Screen
          name="Exhibition"
          component={Exhibition}
          initialParams={{
            id: '5f663623d305dad100cb1830',
          }}
        />
        <Drawer.Screen name="Home" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
