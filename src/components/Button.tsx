import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import GradientText from './GradientText';

export default ({
  children,
  onPress,
  type = 'default',
  style,
}: {
  children: React.ReactNode;
  onPress?: () => any;
  type?: 'outline' | 'default';
  style?: any;
}) => {
  return type === 'outline' ? (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <LinearGradient
        colors={['#5BCDFF', '#5BD245']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ borderRadius: 27 }}
      >
        <View style={styles.circleGradient}>
          <GradientText style={styles.buttonText}>{children}</GradientText>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <LinearGradient
        colors={['#5BCDFF', '#5BD245']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ borderRadius: 27 }}
      >
        <View style={styles.circleNotGradient}>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  circleGradient: {
    margin: 2,
    backgroundColor: 'white',
    borderRadius: 27,
    paddingVertical: 15,
  },
  circleNotGradient: {
    margin: 2,
    borderRadius: 27,
    paddingVertical: 15,
  },
  buttonText: {
    fontFamily: 'NanumSquareEB',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
});
