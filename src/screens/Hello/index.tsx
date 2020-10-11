import AsyncStorage from '@react-native-community/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Logo from '../../assets/imgs/register-logo.svg';
import Button from '../../components/Button';
import { post } from '../../functions/postAPI';

const login = async () => {
  const username = await AsyncStorage.getItem('@auth/username');
  const password = await AsyncStorage.getItem('@auth/password');
  if (!username || !password) return true;
  const { accessToken } = await post<'PostLogin'>('/auth/login', {
    password,
    username,
  });
  AsyncStorage.setItem('@auth/accessToken', accessToken);
  return !accessToken;
};

const Hello: React.FC<{ navigation: StackNavigationProp<{}> }> = ({
  navigation,
}) => {
  const [first, setFirst] = useState<boolean | null>(null);
  useEffect(() => {
    login();
  }, []);
  useEffect(() => {
    navigation.navigate({
      name: 'Home',
    });
  }, [first]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>
      {first && (
        <View style={styles.buttonWrap}>
          <Button
            style={{ marginBottom: 10 }}
            onPress={() =>
              navigation.navigate({
                name: 'Create',
              })
            }
          >
            새로 시작하기
          </Button>
          <Button
            type="outline"
            onPress={() =>
              navigation.navigate({
                name: 'Username',
              })
            }
          >
            이미 계정이 있습니다
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 100,
  },
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonWrap: {
    width: '100%',
    paddingHorizontal: 15,
  },
  button: {
    width: '100%',
  },
  circleGradient: {
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 27,
    paddingVertical: 15,
  },
  buttonText: {
    fontFamily: 'NanumSquareEB',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Hello;
