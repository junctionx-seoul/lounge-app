import React from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import SidebarIcon from '../assets/icons/sidebar.svg';
import SearchIcon from '../assets/icons/search.svg';
import HeaderLogo from '../assets/icons/header-logo.svg';

export default () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#5BCDFF', '#5BD245']}
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: 46,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      }}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        hitSlop={{
          bottom: 10,
          left: 10,
          right: 10,
          top: 10,
        }}
      >
        <SidebarIcon />
      </TouchableOpacity>
      <HeaderLogo />
      <SearchIcon />
    </LinearGradient>
  );
};
