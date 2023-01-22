import React, {useState, useEffect, useCallback, use} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import icons from './path';
import styles from './styles';

const LoadingData = () => {
  const random = icons[Math.floor(Math.random() * icons.length)];
  const [icon, setIcon] = useState(random);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log(icons.filter(e => e.));
  }, []);
  return (
    <View style={styles.content}>
      <Svg fill="#000000" viewBox="0 0 48 48" width="48px" height="48px">
        <Path d={icon} />
      </Svg>
    </View>
  );
};
export default LoadingData;
