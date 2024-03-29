import React, {useEffect} from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

const FadeInView = Animated.createAnimatedComponent(View);

const Logo = () => {
  const opacity = useSharedValue(0);

  startOpacity = () => {
    return (opacity.value = withTiming(1, {
      duration: 5000,
    }));
  };
  useEffect(() => {
    startOpacity();
  }, []);

  const animatedOpacity = useAnimatedStyle(() => {
    return {opacity: opacity.value};
  });

  return (
    <FadeInView
      style={[
        animatedOpacity,
        {
          top: '-10%',
          marginHorizontal: '20%',
        },
      ]}>
      <Svg viewBox="0 0 32 32" height={256} width={256}>
        <Path
          fill={'red'}
          d="M 16 3 C 8.855469 3 3 8.855469 3 16 C 3 23.144531 8.855469 29 16 29 C 23.144531 29 29 23.144531 29 16 C 29 8.855469 23.144531 3 16 3 Z M 16 5 C 22.054688 5 27 9.945313 27 16 C 27 22.054688 22.054688 27 16 27 C 9.945313 27 5 22.054688 5 16 C 5 9.945313 9.945313 5 16 5 Z M 16 7 C 11.054688 7 7 11.054688 7 16 C 7 20.945313 11.054688 25 16 25 C 20.945313 25 25 20.945313 25 16 C 25 11.054688 20.945313 7 16 7 Z M 16 9 C 19.855469 9 23 12.144531 23 16 C 23 19.855469 19.855469 23 16 23 C 12.144531 23 9 19.855469 9 16 C 9 12.144531 12.144531 9 16 9 Z M 16 11 C 13.199219 11 11 13.199219 11 16 C 11 18.800781 13.199219 21 16 21 C 18.800781 21 21 18.800781 21 16 C 21 13.199219 18.800781 11 16 11 Z M 16.09375 11.6875 L 17.09375 14.40625 L 20 14.40625 L 17.59375 16.3125 L 18.5 19.3125 L 16 17.5 L 13.59375 19.3125 L 14.59375 16.3125 L 12.1875 14.40625 L 15.1875 14.40625 Z"
        />
      </Svg>
    </FadeInView>
  );
};
export default Logo;
