import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import api from './api';
import { Resource } from './serverResource';
export const get = <T extends keyof Resource>(
  endpoint: string,
  param?: Resource[T]['req'],
) => {
  return api
    .get(endpoint, {
      params: param,
    })
    .then((e) => e.data);
};
const useAPI = <T extends keyof Resource>(
  endpoint: string,
  param?: Resource[T]['req'],
) => {
  const [data, setData] = useState<Resource[T]['res'] | null>(null);

  const navigation = useNavigation();
  const refetch = useCallback(
    async (newparam?: Resource[T]['req']) => {
      api
        .get(endpoint, {
          params: newparam || param,
        })
        .then((e) => setData(() => e.data))
        .catch((e) => {
          if (e.response.data.message === 'jwt malformed')
            navigation.navigate({
              name: 'Hello',
            });
        });
    },
    [endpoint, param],
  );
  useEffect(() => {
    refetch();
  }, [refetch]);
  return [data, refetch];
};
export default useAPI;
