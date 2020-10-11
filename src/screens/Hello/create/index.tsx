import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GradientInput from '../../../components/GradientInput';
import GradientText from '../../../components/GradientText';
import Logo from '../../assets/imgs/logo.svg';
import styles from '../commonstyle';
const Username: React.FC = () => {
  const [username, setUsername] = useState<string>();
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
