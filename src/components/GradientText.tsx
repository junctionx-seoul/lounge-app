import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import { Text } from 'react-native';

export default (props: any) => (
  <MaskedView maskElement={<Text {...props} />}>
    <LinearGradient
      colors={['#5BCDFF', '#5BD245']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <Text {...props} style={[props.style, { opacity: 0 }]} />
    </LinearGradient>
  </MaskedView>
);
