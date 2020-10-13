import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import StarFilled from '../../assets/icons/star-filled.svg';
import StarHalfFilled from '../../assets/icons/star-half-filled.svg';
import StarEmpty from '../../assets/icons/star-empty.svg';

const FILLED = 2;
const HALF_FILLED = 1;
const EMPTY = 0;

interface Props {
  rating: number;
}

const StarRate = ({ rating }: Props) => {
  const [star, setStar] = useState<number[]>([]);

  useEffect(() => {
    setStar(calcStar(rating));
  }, [rating]);

  function calcStar(value: number) {
    if (value > 5) value = 5;
    if (value < 0) value = 0;
    const starCalc = [];
    while (value >= 1 && starCalc.length < 5) {
      starCalc.push(FILLED);
      value--;
    }

    if (value >= 0.5) {
      starCalc.push(HALF_FILLED);
    }
    while (starCalc.length < 5) {
      starCalc.push(EMPTY);
    }
    return starCalc;
  }

  return (
    <View style={styles.wrapper}>
      <View style= {styles.starWrap}>
        {
          star.map((val: number) => {
            if (val === FILLED) {
              return <StarFilled />
            }
            if (val === HALF_FILLED) {
              return <StarHalfFilled />
            }
            if (val === EMPTY) {
              return <StarEmpty />
            }
          })
        }
      </View>
      <View>
        <Text style={styles.textWrap}>
          ({ rating >= 0 && rating <= 5 ? parseFloat(rating).toFixed(1) : "OF"})
        </Text>
      </View>
    </View>
   )
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 115,
    paddingTop: 20
  },
  starWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 85,
  },
  textWrap: {
    fontFamily: 'NanumSquare',
    color: '#09DC67',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default StarRate;
