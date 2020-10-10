import React from 'react';

import LinearGradient from 'react-native-linear-gradient';

import SidebarIcon from '../assets/icons/sidebar.svg';
import SearchIcon from '../assets/icons/search.svg';
import HeaderLogo from '../assets/icons/header-logo.svg';

export default () => {
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
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}>
      <SidebarIcon />
      <HeaderLogo />
      <SearchIcon />
    </LinearGradient>
  );
};
