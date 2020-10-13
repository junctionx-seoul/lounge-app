import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';

interface Props {
  url: string;
}

const ImageElement = ({ url }: Props) => {
  const [ratio, setRatio] = useState<number>();

  useEffect(() => {
    Image.getSize(
      url,
      (width: number, height: number) => {
        setRatio(width / height);
      },
      (error) => console.error(error),
    );
  }, [url]);

  return (
    <View style= {{ flexDirection: 'column' }}>
      <Image
        source={ { url } }
        style = {{ height: 115, aspectRatio: ratio, marginRight: 10 }}
      />
    </View>
  );
};

ImageElement.defaultValue = {
  url:
    'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
};

export default ImageElement;
