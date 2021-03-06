import React, { useEffect, useState } from 'react';
import GradientText from '../../../components/GradientText';
import Logo from '../../../assets/imgs/logo.svg';
import { SafeAreaView, StyleProp, Text, View, ViewStyle } from 'react-native';
import styles from '../commonstyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
const Button: React.FC<{
  greyOutline?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress(): any;
}> = ({ children, greyOutline, style, onPress }) => (
  <View
    style={[
      {
        flex: 1,
      },
      style,
    ]}
  >
    <TouchableOpacity
      style={{
        height: 56,
      }}
      onPress={onPress}
    >
      <LinearGradient
        colors={greyOutline ? ['white', 'white'] : ['#5BCDFF', '#5BD245']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[{ borderRadius: 56, height: 56 }]}
      >
        <View
          style={[
            {
              borderRadius: 50,
              flex: 1,
              padding: 18,
            },
            greyOutline && {
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#9E9EA0',
            },
          ]}
        >
          <Text
            style={[
              {
                fontFamily: 'NanumSquareEB',
                textAlign: 'center',
                color: 'white',
              },
              greyOutline && {
                color: '#9E9EA0',
              },
            ]}
          >
            {children}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  </View>
);

const Create: React.FC<{
  navigation: StackNavigationProp<{}>;
  route: {
    params: {
      gender: string;
      birth: string;
      nickname: string;
      code: string;
    };
  };
}> = ({ navigation, route }) => {
  const [image, setImage] = useState('');
  const register = async () => {
    // try {
    //   if (
    //     (
    //       await post<'PostRegister'>('/auth/register', {
    //         // ...
    //       })
    //     ).createdAt
    //   ) {
    //     navigation.navigate('Home');
    //   } else {
    //     throw new Error('네?');
    //   }
    // } catch (e) {
    //   console.log(e.response.data);
    // }
  };
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
    <SafeAreaView style={styles.container}>
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
        {!!image && (
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
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
        }}
      >
        <Button greyOutline onPress={() => navigation.goBack()}>
          다시 입력
        </Button>
        <Button
          onPress={() => {
            register();
          }}
          style={{ marginLeft: 10 }}
        >
          네, 맞습니다!
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Create;
