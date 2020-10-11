import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { Alert, KeyboardAvoidingView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../../assets/imgs/logo.svg';
import GradientInput from '../../components/GradientInput';
import GradientText from '../../components/GradientText';
import styles from './commonstyle';
import useAPI, { get } from '../../functions/useGetAPI';
import { post } from '../../functions/postAPI';
const Username: React.FC<{
  navigation: StackNavigationProp<{}>;
}> = ({ navigation }) => {
  const [username, setUsername] = useState<string>();
  const login = async (password: string) => {
    console.log(username, password);
    if (username && password) {
      try {
        const { accessToken } = await post<'PostLogin'>('/auth/login', {
          password,
          username,
        });
        if (!accessToken) throw new Error('알 수 없는 에러입니다.');
        AsyncStorage.setItem('@auth/username', username);
        AsyncStorage.setItem('@auth/password', password);
        AsyncStorage.setItem('@auth/accessToken', accessToken);
        navigation.navigate({
          name: 'Home',
        });
      } catch (e) {
        Alert.alert(
          '',
          e.response.data.message || '로그인에 문제가 발생했습니다',
        );
      }
    }
  };
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.centerize}>
        <Logo />
        <GradientText style={styles.title}>로그인하기</GradientText>
        {username && (
          <Text
            style={{
              fontFamily: 'NanumSquareB',
              color: '#9E9EA0',
              marginTop: 20,
            }}
          >
            {username}
          </Text>
        )}
        {!username && (
          <GradientInput
            autofocus
            style={{
              marginTop: 20,
            }}
            placeholder="아이디를 입력하세요"
            onNext={setUsername}
          />
        )}
        {username && (
          <GradientInput
            autofocus
            style={{
              marginTop: 20,
            }}
            placeholder="비밀번호를 입력하세요"
            onNext={login}
          />
        )}
        <TouchableOpacity>
          <GradientText
            style={{
              fontFamily: 'NanumSquareB',
              marginTop: 20,
              fontSize: 14,
            }}
          >
            아이디 또는 비밀번호 찾기
          </GradientText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Username;
