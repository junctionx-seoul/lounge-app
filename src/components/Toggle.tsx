import React from 'react';
import { View } from 'react-native';
const Toggle: React.FC = () => {
  return (
    <>
      <View
        style={{
          width: 44,
          height: 24,
          backgroundColor: '#09DC67',
          borderRadius: 12,
        }}
      >
        <View
          style={{
            width: 24,
            height: 26,
            borderRadius: 12,
            backgroundColor: 'white',
            position: 'relative',
            top: -27,
            elevation: 50,
          }}
        />
      </View>
    </>
  );
};
export default Toggle;
