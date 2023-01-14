import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ItemSeparatorView from '../ItemSeparatorView';
// import {SearchBar} from 'react-native-elements';
import Colors from '../../assets/Colors';
import AnimatedView from '../Animated';
import RotaryButton from '../Animated/RotaryButton';
import AnimatedText from '../Animated/Text';
import Button from '../Animated/ArrowButton';

const ListOfCharacters = ({data}) => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();
  const goBack = () => navigation.navigate('Home');
  const [showMore, setShowMore] = useState(true);
  const [isOn, setIsOn] = useState(true);
  const [value, setValue] = useState(0);
  const filteredData =
    search.length > 0
      ? data.filter(character => {
          return character.name.includes(search.toUpperCase());
        })
      : data;

  const Description = ({info}) => {
    const description = info.item.hide
      ? info.item.description.substring(0, 40)
      : info.item.description;

    const startRotation = () => {
      return isOn
        ? setIsOn((info.item.hide = false)) //setNull
        : setIsOn((info.item.hide = true));
    };
    const ButtonShowMoreDetails = () => {
      return (
        <RotaryButton
          key={`hide: ${{isHidden: info.item.hide}}`}
          value={isOn}
          onPress={() => startRotation()}
        />
      );
    };
    return (
      !info.item.description == '' && (
        <View style={styles.description}>
          <Text style={[{marginRight: '8%'}, Colors.description]}>
            {description}
          </Text>

          <ButtonShowMoreDetails />
        </View>
      )
    );
  };

  const Items = ({info}) => {
    const img = {
      path: info.item.thumbnail.path,
      extension: info.item.thumbnail.extension,
    };
    const thumbnail = `${img.path.replace(/http/i, 'https')}.${img.extension}`;

    return (
      <View style={styles.content}>
        <AnimatedText styles={Colors.primaryText} position={-250}>
          {info.item.name}
        </AnimatedText>
        <AnimatedView position={950}>
          <Image
            source={{
              uri: thumbnail,
            }}
            style={styles.img}
          />
        </AnimatedView>

        <Description info={info} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <AnimatedView position={450}>
          <View style={styles.header}>
            <Button
              arrowDirection="left"
              size={36}
              slideToValue={270}
              showBreathingAnim={false}
              onPress={goBack}
            />
            {/* <SearchBar
              placeholder="Search Characters"
              value={search}
              onChangeText={e => setSearch(e)}
              containerStyle={styles.searchBar}
              platform={'ios'}
            /> */}
          </View>
        </AnimatedView>

        <Text style={[styles.title, Colors.title]}>Characters</Text>

        <View style={styles.horizontalBar} />

        <FlatList
          data={filteredData}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={item => <Items info={item} />}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
