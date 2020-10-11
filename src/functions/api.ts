import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.lounge.so',
});
instance.interceptors.request.use((e) => {
  console.log('네?', e.url);
  return e;
});
export default instance;
