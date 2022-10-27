import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 2,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        opacity: fadeAnim, // Bind opacity to animated value
        position: 'absolute',
        alignItems: 'center',
        top: '-10%',
        marginHorizontal: '20%',
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView;
