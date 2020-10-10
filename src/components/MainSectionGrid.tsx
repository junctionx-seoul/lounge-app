import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import RatingIcon from '../assets/icons/rating.svg';

interface IMainSectionGrid {
  image: string;
  title: string;
  user: string;
  rating: number;
}

export default ({image, title, user, rating}: IMainSectionGrid) => {
  return (
    <View style={styles.imageContainer}>
      <FastImage
        style={styles.image}
        source={{
          uri: image,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text style={styles.imageTitle}>{title}</Text>
      <View style={styles.imageInfo}>
        <Text style={styles.imageUser}>{user}</Text>
        <View style={styles.imageInfo}>
          <RatingIcon />
          <Text style={styles.imageRating}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 130,
    marginRight: 15,
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 15,
  },
  imageTitle: {
    width: '75%',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 13,
  },
  imageInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageUser: {
    fontSize: 12,
    color: '#D1D1D1',
  },
  imageRating: {
    fontWeight: '700',
    color: '#09DC67',
    fontSize: 13,
    marginLeft: 7,
  },
});
