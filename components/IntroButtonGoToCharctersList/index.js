import React, {useState, useEffect, useRef} from 'react';
import {TouchableOpacity, Image, Animated, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IntroButtonGoToCharctersList = () => {
  const [icon, setIcon] = useState(32);
  const ArrowAnimatedIcon = Animated.createAnimatedComponent(Icon);
  const arrowSize = useRef(new Animated.Value(32)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const breathingAnimation = useRef(new Animated.Value(0)).current;
  const translateXAnimated = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 25,
      duration: 300,
      useNativeDriver: false,
    }).start;
    const startBreathingAnimation = () => {
      setTimeout(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(arrowSize, {
              toValue: 48,
              duration: 2000,
              useNativeDriver: false,
            }),
            Animated.timing(arrowSize, {
              toValue: 32,
              duration: 2000,
              useNativeDriver: false,
            }),
          ]),
        ).start();
      }, 1500);
    };
    startBreathingAnimation();
  }, []);
  const slideIcon = () => {
    arrowSize.stopAnimation();

    Animated.timing(translateXAnimated, {
      toValue: 350,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Animated.View
      style={{
        top: '10%',
        transform: [{translateX: translateXAnimated}],
      }}>
      <TouchableOpacity
        onPress={() => {
          breathingAnimation.setValue(220), slideIcon();
        }}>
        <ArrowAnimatedIcon
          name="arrow-right"
          size={arrowSize}
          style={{backgroundColor: 'yellow', opacity: 1}}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default IntroButtonGoToCharctersList;
