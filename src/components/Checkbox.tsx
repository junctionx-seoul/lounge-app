import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Check from '../assets/icons/check.svg';
const Checkbox: React.FC<{ onChange(state: boolean): any }> = ({
  children,
  onChange,
}) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    console.log(checked);
    onChange && onChange(checked);
  }, [checked]);
  return (
    <>
      <TouchableOpacity
        hitSlop={{
          bottom: 5,
          top: 5,
          left: 5,
          right: 5,
        }}
        onPress={() => setChecked((_) => !_)}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={[
              {
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#9E9EA0',
                width: 18,
                height: 18,
                borderRadius: 3,
                marginRight: 10,
                alignItems: 'center',
                justifyContent: 'center',
              },
              checked && {
                borderColor: '#09DC67',
              },
            ]}
          >
            {checked && <Check />}
          </View>
          <Text
            style={{
              fontFamily: 'NanumSquareR',
              color: '#9E9EA0',
            }}
          >
            {children}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default Checkbox;
