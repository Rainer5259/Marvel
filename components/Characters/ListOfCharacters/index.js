import React, {useState, useEffect, useCallback, memo} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ItemSeparatorView from '../../ItemSeparatorView';
import {SearchBar} from '@rneui/themed';
import Colors from '../../../assets/Colors';
import AnimatedView from '../../Animated';
import RotaryButton from '../../Animated/RotaryButton';
import AnimatedText from '../../Animated/Text';
import Button from '../../Animated/Button';
import Title from '../../Title';
import Header from '../Header';
import Description from '../Description';
import Thumbnail from '../Thumbnail';
import LoadingData from '../../LoadingData';

const ListOfCharacters = ({data}) => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();
  const goBack = () => navigation.navigate('Home');
  const [isOn, setIsOn] = useState(true);
  const [isHidden, setIsHidden] = useState([]);

  const createHide = () =>
    data.forEach((e, i, a) => {
      return isHidden.push({hidden: e.hide});
    });
  createHide();

  const filteredData =
    search.length > 0
      ? data.filter(character => {
          return character.name.includes(search.toUpperCase());
        })
      : [];
  const info = search.length > 0 ? filteredData : data;

  const Content = ({info}) => {
    return (
      <View style={styles.content}>
        <Title style={Colors.primaryText}>{info.item.name}</Title>
        <Thumbnail info={info} />
        <Description>{info.item.description}</Description>
      </View>
    );
  };
  const title = (
    <Title style={[Colors.title, {textAlign: 'center'}]}>Characters</Title>
  );

  const List = () => {
    return (
      <FlatList
        ListHeaderComponent={title}
        data={info}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={item => <Content info={item} />}
        ItemSeparatorComponent={ItemSeparatorView}
        // onEndReached={info}
        // onEndReachedThreshold={0.1}
        ListFooterComponent={<LoadingData />}
      />
    );
  };

  const SearchBarCustome = ({props}) => {
    return (
      <TextInput
        style={{width: 200, height: 45, backgroundColor: 'skyblue'}}
        value={search}
        onChangeText={e => setSearch(e)}
        placeholder="Search Characters"
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <Header />

          <SearchBar
            placeholder="Search Characters"
            value={search}
            onChangeText={e => setSearch(e)}
            containerStyle={styles.searchBar}
            platform={'ios'}
          />
        </View>
        <LoadingData />
        <List />
      </SafeAreaView>
    </View>
  );
};

export default memo(ListOfCharacters);
