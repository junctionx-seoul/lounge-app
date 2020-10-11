import api from './api';
import { Resource } from './serverResource';

export const post = <T extends keyof Resource>(
  endpoint: string,
  param?: Resource[T]['req'],
): Promise<Resource[T]['res']> => {
  return api.post(endpoint, param).then((e) => e.data);
};
