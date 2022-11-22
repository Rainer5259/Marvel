import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import ItemSeparatorView from '../ItemSeparatorView';
import {SearchBar} from 'react-native-elements';
import Colors from '../../assets/Colors';
import AnimatedView from '../Animated';
import Rotate from '../Animated/Rotate';
import AnimatedText from '../Animated/Text';
import Button from '../Button';
import ArrowButton from '../Animated/ArrowButton';
import Home from '../../src/Screens/Home';
import {useContext} from 'react';
import {CharactersContext} from '../../services/contexts/characters';

const ListOfCharacters = () => {
  const {loadingStatus, data} = useContext(CharactersContext);
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState(data);
  const [showMore, setShowMore] = useState(true);
  const [search, setSearch] = useState('');

  const goBack = () => navigation.navigate('Home');
  const updateSearch = text => {
    if (text) {
      const newData = data.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setSearch(text);
      setFilteredData(newData);
    } else {
      setFilteredData(data);
      setSearch(text);
    }
  };

  const Description = ({info}) => {
    let description = info.item.hide
      ? info.item.description.substring(0, 40)
      : info.item.description;

    const ButtonShowMoreDetails = () => {
      return <Rotate styles={styles.showMore} boolean={info.item.hide} />;
    };

    return (
      !info.item.description == '' && (
        <View style={styles.description}>
          <Text style={[{marginRight: '8%'}, Colors.description]}>
            {description}
          </Text>

          <ButtonShowMoreDetails hide={info.item.hide} />
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
        <AnimatedText
          styles={Colors.primaryText}
          position={-250}
          duration={350}>
          {info.item.name}
        </AnimatedText>
        <AnimatedView position={950} duration={500}>
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
        <AnimatedView position={450} duration={3000}>
          <View style={styles.header}>
            <ArrowButton
              arrowDirection="left"
              size={36}
              slideToValue={270}
              showBreathingAnim={false}
              Pressed={goBack}
            />
            <SearchBar
              placeholder="Search Characters"
              value={search}
              onChangeText={updateSearch}
              containerStyle={styles.searchBar}
              platform={'ios'}
            />
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
