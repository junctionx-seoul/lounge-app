import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';

import Header from '../components/Header';
import MainSectionGrid from '../components/MainSectionGrid';
import MainSwiper from '../components/MainSwiper';

const App = () => {
  return (
    <SafeAreaView>
      <Header />
      <ScrollView style={styles.container}>
        <MainSwiper />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>인기있는 전시회</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>회원님과 어울리는 전시회</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
            <MainSectionGrid
              title="반 고흐 베스트 명화 리와인드 II"
              user="빈센트 반 고흐"
              rating={4.5}
              image="https://scontent-vie1-1.cdninstagram.com/v/t51.2885-19/118613515_692707951590108_1226559573194727055_n.jpg?_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_ohc=hSXRTXO15bUAX_G0-w9&oh=dcf587040e70f4eccceed11b4b151b55&oe=5FAAE5E0"
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  section: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
});

export default App;
