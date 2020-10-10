import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Logo from '../assets/imgs/register-logo.svg';
import Button from '../components/Button';
import GradientText from '../components/GradientText';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.buttonWrap}>
        <Button style={{ marginBottom: 10 }}>새로 시작하기</Button>
        <Button type="outline">이미 계정이 있습니다</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 100,
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonWrap: {
    width: '100%',
    paddingHorizontal: 15,
  },
  button: {
    width: '100%',
  },
  circleGradient: {
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 27,
    paddingVertical: 15,
  },
  buttonText: {
    fontFamily: 'NanumSquareEB',
    fontSize: 18,
    textAlign: 'center',
  },
});
