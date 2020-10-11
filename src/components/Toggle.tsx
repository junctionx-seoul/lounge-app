import React, { useEffect, useRef, useState } from 'react';
import { View, Animated, Easing, StyleProp, ViewStyle } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const Toggle: React.FC<{ enabled?: boolean; style?: StyleProp<ViewStyle> }> = ({
  enabled: defaultSetted,
  style,
}) => {
  const [enabled, setEnabled] = useState(defaultSetted);
  const toggleAnimate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(toggleAnimate, {
      toValue: enabled ? 0 : 20,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.bezier(0, 0.69, 0.03, 0.93),
    }).start();
  }, [toggleAnimate, enabled]);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setEnabled((_) => !_)}>
        <Animated.View
          style={[
            {
              width: 44,
              height: 24,
              backgroundColor: toggleAnimate.interpolate({
                inputRange: [0, 20],
                outputRange: ['#707070', '#09DC67'],
              }),
              borderRadius: 12,
            },
            style,
          ]}
        >
          <Animated.View
            style={{
              width: 24,
              height: 26,
              borderRadius: 12,
              backgroundColor: 'white',
              position: 'relative',
              top: -1,
              left: toggleAnimate,
            }}
          />
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};
export default Toggle;
