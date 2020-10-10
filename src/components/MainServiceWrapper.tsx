import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import Header from '../components/Header';

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LinearGradient
        colors={['#5BCDFF', '#5BD245']}
        style={{
          height: getStatusBarHeight(true),
        }}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      />
      <Header />
      <SafeAreaView>
        <ScrollView style={styles.container}>{children}</ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
});
