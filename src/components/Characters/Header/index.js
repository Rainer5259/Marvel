import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import AnimatedView from '../../Animated';
import Button from '../../Animated/Button';
import SearchBar from './SearchBar';
import styles from './styles';
const Header = ({setSearchName}) => {
  const navigation = useNavigation();
  const goBack = () => navigation.navigate('Home');
  return (
    <View style={styles.header}>
      <AnimatedView position={450}>
        <Button
          IconName="arrow-left"
          size={36}
          slideToValue={270}
          showBreathingAnim={false}
          onPress={goBack}
        />
      </AnimatedView>
      <SearchBar setSearchName={setSearchName} />
    </View>
  );
};
export default Header;
