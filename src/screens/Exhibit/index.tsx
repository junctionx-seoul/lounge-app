import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import Bar from '../../assets/icons/draw-bar.svg';

import MockImage from '../../assets/imgs/mock-lounge-image.svg';

import MainServiceWrapper from '../../components/MainServiceWrapper';
import StarRate from './StarRate';
import ImageElement from './ImageElement';

interface Props {
  navigation: StackNavigationProp<{}>;
}

const { title, main_url, description, rating, date, works, tag } = {
  title: '반 고흐 베스트 명화 리와인드 II',
  main_url:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/435px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
  description: '빈센트 반 고흐의 세기의 명작을 온라인에서 만나보세요',
  rating: 4.7,
  date: '2020.08.12 - 2020.10.12',
  works: [
    {
      id: 1,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
    },
    {
      id: 2,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/435px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    },
    {
      id: 3,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg/390px-Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg',
    },
    {
      id: 4,
      url:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg/390px-Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg',
    },
  ],
  tag: ['그림', '반 고흐', '유화', '캔버스화', '초상화', '해외', '영화', '밤'],
};

const Exhibit: FC<Props> = ({ navigation }) => {
  return (
    <MainServiceWrapper exhibit={true}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: main_url}} />
        <View style={styles.upperComponent}>
          <Bar style={{ paddingTop: 40 }} />
          <Text style={styles.mainText}>{title}</Text>
          <Text style={styles.subText}>{description}</Text>
          <StarRate rating={rating} />
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: 'row', margin: 15, overflow: 'hidden' }}
        >
          {works.map((value) => (
            <ImageElement key={value.id} url={value.url} />
          ))}
        </ScrollView>
      </View>
      <View>
      </View>
    </MainServiceWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 270,
  },
  upperComponent: {
    height: 180,
    alignItems: 'center',
  },
  mainText: {
    fontSize: 18,
    fontFamily: 'NanumSquare',
  },
  subText: {
    fontSize: 12,
    fontFamily: 'NanumSquare',
    color: '#9E9EA0',
    paddingTop: 10,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'NanumSquare',
    fontWeight: 'bold',
    color: '#9E9EA0',
    paddingTop: 25,
  },
});

export default Exhibit;
