import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import AnimatedView from '../../Animated';
import Button from '../../Animated/Button';
export default function Header() {
  const navigation = useNavigation();
  const goBack = () => navigation.navigate('Home');
  return (
    <View>
      <AnimatedView position={450}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: '4%',
            marginRight: '4%',
            justifyContent: 'space-evenly',
          }}>
          <Button
            arrowDirection="left"
            size={36}
            slideToValue={270}
            showBreathingAnim={false}
            onPress={goBack}
          />
        </View>
      </AnimatedView>
    </View>
  );
}
