import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  withRepeat,
  withSequence,
  useAnimatedStyle,
  cancelAnimation,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ArrowAnimatedIcon = Animated.createAnimatedComponent(Icon);
const IntroButtonGoToCharctersList = () => {
  const arrowSize = useSharedValue(32);
  const opacity = useSharedValue(0);
  const breathingAnimation = useSharedValue(0);
  const translateX = useSharedValue(0);

  useEffect(() => {
    startOpacity = () => {
      return (opacity.value = withTiming(opacity, {
        toValue: 1,
        duration: 300,
      }));
    };

    startOpacity();

    const startBreathingAnimation = () => {
      setTimeout(() => {
        withRepeat(
          withSequence(
            withTiming(arrowSize.value, {
              toValue: 48,
              duration: 2000,
            }),
            withTiming(arrowSize.value, {
              toValue: 32,
              duration: 2000,
            }),
          ),
        );
      }, 1500);
    };

    startBreathingAnimation();
  }, []);
  const slideIcon = () => {
    breathingAnimation.value = 220;
    translateX.value = withTiming(350, {
      duration: 10000,
    });

    cancelAnimation(arrowSize);
  };
  const translateXAnimated = useAnimatedStyle(() => {
    return {transform: [{translateX: translateX.value}]};
  });

  return (
    <View style={[translateXAnimated, {top: '10%'}]}>
      <TouchableOpacity
        onPress={() => {
          slideIcon();
        }}>
        <ArrowAnimatedIcon
          name="arrow-right"
          size={arrowSize}
          style={{backgroundColor: 'yellow'}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IntroButtonGoToCharctersList;
