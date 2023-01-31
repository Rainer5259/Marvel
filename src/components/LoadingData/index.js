import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import icons from './path';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const Loading = Animated.createAnimatedComponent(Text);
const LoadingData = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  const opacity = useSharedValue(1);

  const animatedOpacity = useAnimatedStyle(() => {
    return {opacity: opacity.value};
  });

  const startOpacity = () => {
    return (opacity.value = withRepeat(
      withSequence(
        withTiming(1, {duration: 500}),
        withTiming(0.01, {duration: 500}),
      ),
      Infinity,
      true,
    ));
  };

  useEffect(() => {
    startOpacity();
    let interval = setInterval(() => {
      setCurrentIconIndex(Math.floor(Math.random() * icons.length));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getRandomIcon = iconIndex => {
    return <Path d={icons[iconIndex]} />;
  };

  return (
    <View style={styles.content}>
      <Svg fill="#000000" viewBox="0 0 48 48" width="100px" height="100px">
        {getRandomIcon(currentIconIndex)}
      </Svg>

      <Loading style={[animatedOpacity]}>Loading</Loading>
    </View>
  );
};

export default LoadingData;
