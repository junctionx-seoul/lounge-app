import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import React from 'react';
import { StyleProp, Text, View, ViewStyle, Image, SafeAreaView } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import Close from '../assets/icons/close.svg';
import Setting from '../assets/icons/setting.svg';
import Arrow from '../assets/icons/rightArrow.svg';
import CameraIcon from '../assets/icons/camera.svg';
import VideoIcon from '../assets/icons/video.svg';
import LayerIcon from '../assets/icons/layer.svg';
import PaintingIcon from '../assets/icons/painting.svg';
import HistoryIcon from '../assets/icons/hourglass.svg';
import SpaceIcon from '../assets/icons/compass.svg';
import ProductIcon from '../assets/icons/squares.svg';
import OtherIcon from '../assets/icons/dots.svg';
import Upload from '../assets/icons/export.svg';
import Heart from '../assets/icons/heart.svg';
import Recent from '../assets/icons/recent.svg';
import Toggle from '../components/Toggle';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CATEGORIES = [
  {
    label: '사진',
    icon: CameraIcon,
  },
  {
    label: '영상',
    icon: VideoIcon,
  },
  {
    label: '그래픽',
    icon: LayerIcon,
  },
  {
    label: '그림',
    icon: PaintingIcon,
  },
  {
    label: '역사',
    icon: HistoryIcon,
  },
  {
    label: '공간',
    icon: SpaceIcon,
  },
  {
    label: '제품',
    icon: ProductIcon,
  },
  {
    label: '기타',
    icon: OtherIcon,
  },
];

const MY_MENUS = [
  {
    label: '내 아트 전시',
    icon: Upload,
  },
  {
    label: '내 좋아요',
    icon: Heart,
  },
  {
    label: '최근 본 아트',
    icon: Recent,
  },
];

const IconButton: React.FC<{
  label: string;
  icon: React.FC;
  style?: StyleProp<ViewStyle>;
  gradient?: string[];
}> = ({ label, icon: Icon, style, gradient }) => (
  <View
    style={[
      {
        alignItems: 'center',
      },
      style,
    ]}
  >
    <LinearGradient
      colors={gradient || ['#09DC67', '#09DC67']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 32,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: 50,
      }}
    >
      <Icon />
    </LinearGradient>
    <Text
      style={{
        fontFamily: 'NanumSquareB',
        fontSize: 13,
        textAlign: 'center',
        marginTop: 10,
      }}
    >
      {label}
    </Text>
  </View>
);

const Sidebar: React.FC<DrawerContentComponentProps<DrawerContentOptions>> = ({
  navigation,
}) => {
  return (
    <SafeAreaView
      style={{
        flex:1
      }}
    >
      <View
        style={{
          flex:1,
          backgroundColor: 'white',
          padding: 15,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            hitSlop={{
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Close />
          </TouchableOpacity>
          <Setting style={{ marginLeft: 15 }} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Text style={{ fontFamily: 'NanumSquareB', fontSize: 13 }}>
              알림 ON
            </Text>
            <Toggle enabled style={{ marginLeft: 10 }} />
          </View>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={['#5BCDFF', '#5BD245']}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 15,
              borderRadius: 50,
              marginTop: 15,
            }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          >
            <FastImage
              source={{
                uri:
                  'https://stickershop.line-scdn.net/stickershop/v1/product/1280133/LINEStorePC/main.png',
              }}
              style={{
                width: 47,
                height: 47,
                marginTop: 3,
              }}
            />
            <Text
              style={{
                fontFamily: 'NanumSquareEB',
                color: 'white',
                fontSize: 16,
                marginLeft: 10,
              }}
            >
              RyCont
            </Text>
            <Text
              style={{
                fontFamily: 'NanumSquareR',
                color: 'white',
                fontSize: 16,
              }}
            >
              님 안녕하세요!
            </Text>
            <View
              style={{
                alignItems: 'flex-end',
                flex: 1,
              }}
            >
              <Arrow />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 30,
            textAlign: 'center',
            fontFamily: 'NanumSquareEB',
            fontSize: 18,
          }}
        >
          카테고리
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {CATEGORIES.map((e) => (
            <TouchableOpacity key={e.label}>
              <IconButton {...e} style={{ margin: Platform.OS === 'ios' ? 10 : 20 }} />
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Image
              source={require('../assets/imgs/samplezepeto1.png')}
              resizeMode="contain"
              resizeMethod="resize"
              style={{
                width: '100%',
                height: 360,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}
          >
            {MY_MENUS.map((menu, i) => (
              <TouchableOpacity>
                <IconButton
                  {...menu}
                  gradient={['#FF85F3', '#FFD816']}
                  key={menu.label}
                  style={
                    i
                      ? {
                          marginTop: 30,
                        }
                      : {}
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Sidebar;
