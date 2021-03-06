import React, { useEffect, useState } from 'react';
import { TextInput, View, Keyboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Arrow from '../assets/icons/nextArrow.svg';
const GradientInput: React.FC<{
  style: any;
  placeholder?: string;
  onNext(text: string): any;
  autofocus?: boolean;
}> = ({ placeholder = '', style, onNext, autofocus, ...props }) => {
  const [text, setText] = useState();
  return (
    <View {...props} style={[{ alignSelf: 'stretch' }, style]}>
      <LinearGradient
        colors={['#5BCDFF', '#5BD245']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={{ borderRadius: 27, padding: 2, width: '100%' }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 29,
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 20,
            paddingRight: 7,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              fontFamily: 'NanumSquareR',
              paddingVertical: 15,
            }}
            placeholderTextColor="#D1D1D1"
            placeholder={placeholder}
            value={text}
            autoFocus={true}
            onChangeText={setText}
            onEndEditing={() => onNext(text)}
          />
          <TouchableOpacity
            onPress={() => {
              onNext(text);
              Keyboard.dismiss();
            }}
          >
            <Arrow />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};
export default GradientInput;
