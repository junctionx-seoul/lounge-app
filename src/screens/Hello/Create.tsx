import React, { useEffect, useState } from 'react';
import GradientText from '../../components/GradientText';
import Logo from '../../assets/imgs/logo.svg';
import { KeyboardAvoidingView, Linking, Text, View } from 'react-native';
import GradientInput from '../../components/GradientInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Checkbox from '../../components/Checkbox';
import { Link } from '@react-navigation/native';
import Button from '../../components/Button';
const GENDER_KEYS = ['여성', '남성'];
const CHECKES: {
  name: string;
  link: string;
  optional?: boolean;
}[] = [
  {
    name: '이용 약관 동의',
    link: 'http://github.com/',
  },
  {
    name: '개인정보 취급방침 동의',
    link: 'https://www.notion.so/',
  },
  {
    name: '마케팅정보 수신동의',
    link: 'http://facebook.com/',
    optional: true,
  },
];
const GenderSelector: React.FC<{ onPress(key: number): any }> = ({
  onPress,
}) => {
  const [selected, setSelected] = useState();
  useEffect(() => {
    if (!(selected !== undefined && onPress)) return;
    onPress(selected);
  }, [selected, onPress]);
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 20,
      }}
    >
      {GENDER_KEYS.map((gender, i) => (
        <View
          style={{
            flex: 1,
          }}
          key={gender}
        >
          <TouchableOpacity
            style={{
              height: 56,
            }}
            onPress={() => setSelected(i)}
          >
            <LinearGradient
              colors={
                i === selected ? ['#5BCDFF', '#5BD245'] : ['white', 'white']
              }
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={[
                { borderRadius: 56, height: 56 },
                i !== 0 && {
                  marginLeft: 10,
                },
              ]}
            >
              <View
                style={[
                  {
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#9E9EA0',
                    borderRadius: 50,
                    flex: 1,
                    padding: 18,
                  },
                  i === selected && {
                    borderWidth: 0,
                  },
                ]}
              >
                <Text
                  style={[
                    {
                      fontFamily: 'NanumSquareEB',
                      color: '#9E9EA0',
                      textAlign: 'center',
                    },
                    i === selected && {
                      color: 'white',
                    },
                  ]}
                >
                  {gender}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
const Create: React.FC<{ navigation: StackNavigationProp<{}> }> = ({
  navigation,
}) => {
  const [gender, setGender] = useState<number>();
  const [birth, setBirth] = useState<string>();
  const [nickname, setNickname] = useState<string>();
  const [checkes, setCheckes] = useState<boolean[]>([false, false, false]);
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
          계정 생성하기
        </GradientText>
        <GenderSelector onPress={setGender} />
        {gender !== undefined && (
          <GradientInput
            autofocus
            style={{
              marginTop: 20,
            }}
            placeholder="생년월일 8자리"
            onNext={setBirth}
          />
        )}
        {birth && (
          <GradientInput
            style={{
              marginTop: 20,
            }}
            placeholder="닉네임을 입력하세요"
            onNext={setNickname}
          />
        )}
        {nickname && (
          <View
            style={{
              marginTop: 10,
            }}
          >
            {CHECKES.map((check, checkIndex) => (
              <View
                key={check.name}
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                }}
              >
                <Checkbox
                  onChange={(checked) => {
                    console.log(checkes);
                    setCheckes((_checkes) => [
                      ..._checkes.slice(0, checkIndex),
                      checked,
                      ..._checkes.slice(checkIndex + 1),
                    ]);
                  }}
                >
                  ({check.optional ? '선택' : '필수'})
                </Checkbox>
                <TouchableOpacity onPress={() => Linking.openURL(check.link)}>
                  <Text
                    style={{
                      fontFamily: 'NanumSquareR',
                      color: '#9E9EA0',
                      marginLeft: 5,
                      textDecorationLine: 'underline',
                    }}
                  >
                    {check.name}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </View>
      {checkes[0] && checkes[1] && (
        <Button
          style={{
            marginBottom: 20,
          }}
        >
          완료
        </Button>
      )}
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
