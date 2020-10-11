import React, { useEffect } from 'react';
import { Text } from 'react-native';
import MainServiceWrapper from '../components/MainServiceWrapper';
import useAPI from '../functions/useGetAPI';
const Exhibition: React.FC = () => {
  const [data] = useAPI<'GetExhibitionId'>('/exhibition', {
    id: '5f663623d305dad100cb1830',
  });
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <MainServiceWrapper>
      <Text>네?</Text>
    </MainServiceWrapper>
  );
};
export default Exhibition;
