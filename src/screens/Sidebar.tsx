import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import Close from '../assets/icons/close.svg';
import Setting from '../assets/icons/setting.svg';
import Toggle from '../components/Toggle';
const Sidebar: React.FC<DrawerContentComponentProps<
  DrawerContentOptions
>> = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'white',
      padding: 15,
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Close />
      <Setting style={{ marginLeft: 15 }} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
          justifyContent: 'flex-end',
        }}
      >
        <Text style={{ fontFamily: 'NanumSquareB', fontSize: 13 }}>
          알림 ON
        </Text>
        <Toggle />
      </View>
    </View>
  </View>
);
export default Sidebar;
