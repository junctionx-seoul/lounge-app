import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

import Logo from '../../assets/imgs/register-logo.svg';
import Button from '../../components/Button';
// import GradientText from '../../components/GradientText';
import MainServiceWrapper from '../../components/MainServiceWrapper';

const Exhibit: React.FC<{ navigation: StackNavigationProp<{}> }> = ({
  navigation,
}) => {
  return (
    <MainServiceWrapper exhibit={true} >
       <View style={styles.container}>
         <Text>abc</Text>
       </View>
    </MainServiceWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default Exhibit;
