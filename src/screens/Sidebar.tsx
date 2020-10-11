import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Close from '../assets/icons/close.svg';
import Setting from '../assets/icons/setting.svg';
import Arrow from '../assets/icons/rightArrow.svg';
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
        <Toggle enabled style={{ marginLeft: 10 }} />
      </View>
    </View>
    <LinearGradient
      colors={['#5BCDFF', '#5BD245']}
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 50,
        marginTop: 15,
      }}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <FastImage
        source={{
          uri:
            'https://stickershop.line-scdn.net/stickershop/v1/product/1280133/LINEStorePC/main.png',
        }}
        style={{
          width: 47,
          height: 47,
          marginTop: 3,
        }}
      />
      <Text
        style={{
          fontFamily: 'NanumSquareEB',
          color: 'white',
          fontSize: 16,
          marginLeft: 10,
        }}
      >
        RyCont
      </Text>
      <Text
        style={{
          fontFamily: 'NanumSquareR',
          color: 'white',
          fontSize: 16,
        }}
      >
        님 안녕하세요!
      </Text>
      <View
        style={{
          alignItems: 'flex-end',
          flex: 1,
        }}
      >
        <Arrow />
      </View>
    </LinearGradient>
  </View>
);
export default Sidebar;
