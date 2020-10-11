import React, { useState, useEffect } from 'react';

import { View, ImageBackground } from 'react-native';

interface IExhibitFrame {
  height: number;
  uri: string;
  index: number;
}

export default ({ height, uri, index }: IExhibitFrame) => {
  const [calc, setCalc] = useState(0);

  useEffect(() => setCalc((index + 1) * 4 * (index + 1) + height), [
    height,
    index,
  ]);

  return (
    <View
      style={[
        {
          height: height,
          marginRight: 1 + index,
          padingTop: 35 - (5 - index * index) * 3,
        },
        {
          transform: [
            { perspective: 500 - index * 80 },
            { rotateY: '-30deg' },
            { skewY: `${index * 2}deg` },
          ],
        },
      ]}
    >
      <ImageBackground
        source={{ uri }}
        style={{ height: calc, aspectRatio: 1.6 }}
      />
    </View>
  );
};

// Usage
// const abc = [
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/435px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',

//   'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg/390px-Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg',

//   'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/360px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg',
//   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
// ];

// 1장: heigh = 200, 3장: height = 50

// {abc.map((val, key) => (
//   <ExhibitFrame height={50} uri={val} index={key} />
// ))}
