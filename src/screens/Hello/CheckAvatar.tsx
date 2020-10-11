import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  KeyboardAvoidingView,
  View,
  Image,
  Text,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Logo from '../../assets/imgs/logo.svg';
import GradientText from '../../components/GradientText';
import styles from './commonstyle';
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

const CheckAvatar: React.FC<{ navigation: StackNavigationProp<{}> }> = ({
  navigation,
}) => (
  <KeyboardAvoidingView behavior="height" style={styles.container}>
    <View style={styles.centerize}>
      <Logo />
      <GradientText style={styles.title}>이 아바타가 맞나요?</GradientText>

      <Image
        source={{
          uri: 'https://t1.daumcdn.net/cfile/blog/266E6150522921CE32',
        }}
        width={100}
        height={100}
        style={{
          width: '90%',
          height: '50%',
        }}
      />
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
          console.log('네?');
        }}
        style={{ marginLeft: 10 }}
      >
        네, 맞습니다!
      </Button>
    </View>
  </KeyboardAvoidingView>
);
export default CheckAvatar;
