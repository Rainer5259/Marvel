import React, {useState, useEffect, useCallback, use} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import icons from './path';
import styles from './styles';

const LoadingData = () => {
  let [count, setCount] = useState(0);
  let randomIcons = count != 0 && Math.floor(Math.random() * icons.length);
  // useEffect(() => {}, []);
  useEffect(() => {
    count <= Infinity &&
      setTimeout(() => {
        setCount(count + 1), console.log(count);
      }, 1000);
    randomIcons;
  }, [count]);
  return (
    <View style={styles.content}>
      <Svg fill="#000000" viewBox="0 0 48 48" width="48px" height="48px">
        <Path d={icons[randomIcons]} />
      </Svg>
    </View>
  );
};
export default LoadingData;
