import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-web-swiper';

export default () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper
        controlsProps={{
          prevTitle: '',
          nextTitle: '',
          dotsTouchable: true,
          dotsPos: 'bottom',
          prevPos: false,
          cellsStyle: {
            top: { marginTop: 'auto' },
          },
          DotComponent: ({
            isActive,
            onPress,
          }: {
            index: number;
            isActive: boolean;
            onPress: () => void;
          }) => (
            <TouchableOpacity onPress={onPress}>
              <View
                style={
                  isActive
                    ? [styles.slideDot, styles.activeSlideDot]
                    : styles.slideDot
                }
              />
            </TouchableOpacity>
          ),
        }}
      >
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://cdn.lounge.so/landing-1.png',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://cdn.lounge.so/landing-1.png',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <FastImage
          style={styles.image}
          source={{
            uri: 'https://cdn.lounge.so/landing-1.png',
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  slideDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 3,
  },
  activeSlideDot: {
    backgroundColor: 'white',
  },
  sliderContainer: {
    height: 150,
    padding: 15,
  },
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
