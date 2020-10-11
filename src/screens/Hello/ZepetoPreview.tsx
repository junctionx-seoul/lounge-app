import React, { useEffect, useState } from 'react';
import GradientText from '../../components/GradientText';
import Logo from '../../assets/imgs/logo.svg';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import GradientInput from '../../components/GradientInput';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import Button from '../../components/Button';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const Create: React.FC<{ navigation: StackNavigationProp<{}> }> = ({
  navigation,
  route,
}) => {
  const [image, setImage] = useState('');
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data } = await axios.post(
          'https://render-api.zepeto.io/v2/graphics/zepeto/booth/PHOTOBOOTH_ONE_240?permanent=true',
          {
            type: 'booth',
            width: 1000,
            target: {
              hashCodes: [`${route.params.code}`],
            },
          },
          {
            headers: {
              authority: 'render-api.zepeto.io',
              'Content-Type': 'application/json',
            },
          },
        );
        setImage(data.url);
      } catch (err) {
        navigation.goBack();
      }
    };
    fetchImage();
  }, []);
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
          이 아바타가 맞나요?
        </GradientText>
        {image && (
          <FastImage
            style={{ width: '100%', height: '70%' }}
            source={{
              uri: image,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        )}
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
