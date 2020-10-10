import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
            top: {marginTop: 'auto'},
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
        }}>
        <View style={[styles.slideContainer, styles.slide1]}>
          <Text>Slide 1</Text>
        </View>
        <View style={[styles.slideContainer, styles.slide2]}>
          <Text>Slide 2</Text>
        </View>
        <View style={[styles.slideContainer, styles.slide3]}>
          <Text>Slide 3</Text>
        </View>
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
  slide1: {
    backgroundColor: 'rgba(20,20,200,0.3)',
  },
  slide2: {
    backgroundColor: 'rgba(20,200,20,0.3)',
  },
  slide3: {
    backgroundColor: 'rgba(200,20,20,0.3)',
  },
  sectionTitle: {},
});
