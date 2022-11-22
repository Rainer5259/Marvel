import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import icons from './path';
import styles from './styles';

const LoadingData = () => {
  let randomNumber = icons[Math.floor(Math.random() * icons.length)];
  const [icon, setIcon] = useState(randomNumber);

  const changeIcon = () => {
    setInterval(() => {
      setIcon(icon);
    }, 1500);
  };

  useEffect(() => {
    changeIcon();
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
