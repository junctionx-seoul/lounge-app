import React, { useState } from 'react';
import GradientText from '../../components/GradientText';
import Logo from '../../assets/imgs/logo.svg';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import GradientInput from '../../components/GradientInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/Button';

const Create: React.FC<{ navigation: StackNavigationProp<{}> }> = ({
  navigation,
}) => {
  const [code, setCode] = useState<string>('');
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <Logo />
        <GradientText
          style={{
            fontSize: 28,
            fontFamily: 'NanumSquareEB',
            textAlign: 'center',
            marginTop: 20,
          }}
        >
          거의 완료되었습니다!
        </GradientText>
        <GradientInput
          style={{
            marginTop: 60,
            marginBottom: 15,
          }}
          placeholder="ZEPETO CODE"
          onNext={setCode}
        />
        <Text
          style={{
            fontFamily: 'NanumSquareR',
            marginLeft: -60,
            marginBottom: 50,
            color: '#D6D6D6',
            fontSize: 12,
          }}
        >
          *ZEPETO 앱 - 프로필에서 6자리 코드 확인 가능합니다
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: 'NanumSquareB',
              color: '#09DC67',
              fontSize: 14,
            }}
          >
            아직 코드가 없습니다.
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        style={{
          marginBottom: 20,
        }}
        onPress={() => navigation.navigate('ZepetoPreview', { code })}
      >
        완료
      </Button>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'NanumSquareEB',
            color: '#9E9EA0',
          }}
        >
          돌아가기
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default Create;
