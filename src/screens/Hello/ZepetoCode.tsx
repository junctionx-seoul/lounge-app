import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../../assets/imgs/logo.svg';
import GradientInput from '../../components/GradientInput';
import GradientText from '../../components/GradientText';
import styles from './commonstyle';

const ZepetoCode: React.FC<{
  navigation: StackNavigationProp<{}>;
}> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.centerize}>
        <Logo />
        <GradientText style={styles.title}>거의 완료되었습니다!</GradientText>
        <GradientInput
          autofocus
          style={{
            marginTop: 20,
          }}
          placeholder="ZEPETO CODE"
          onNext={(value) =>
            navigation.navigate('ZepetoPreview', { code: value })
          }
        />
        <Text
          style={{
            fontFamily: 'NanumSquareR',
            fontSize: 12,
            color: '#D6D6D6',
            marginTop: 10,
          }}
        >
          *ZEPETO 앱 - 프로필에서 6자리 코드 확인 가능합니다
        </Text>
        <TouchableOpacity>
          <GradientText
            style={{
              fontFamily: 'NanumSquareB',
              marginTop: 20,
              fontSize: 14,
            }}
          >
            아직 코드가 없습니다
          </GradientText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ZepetoCode;
