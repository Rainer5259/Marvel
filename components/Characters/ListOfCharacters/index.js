import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import ItemSeparatorView from '../../ItemSeparatorView';
import {SearchBar} from '@rneui/themed';
import Colors from '../../../assets/Colors';
import Title from '../../Title';
import Header from '../Header';
import Description from '../Description';
import Thumbnail from '../Thumbnail';

const ListOfCharacters = ({data}) => {
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   const createHide = () => {
  //     data.forEach((e, i, a) => (a[i].hide = true));
  //   };
  //   createHide();
  // }, []);

  const filteredData =
    search.length != 0
      ? data.filter(character => {
          return character.name.includes(search.toUpperCase());
        })
      : data;
  const pos = search.length != 0 ? 0 : 950;
  const Content = ({info}) => {
    return (
      <View style={styles.content}>
        <Title style={Colors.primaryText}>{info.item.name}</Title>
        <Thumbnail info={info} position={pos} />
        <Description info={info} />
      </View>
    );
  };
  useEffect(() => {
    console.log('Atualizou ');
  }, [pos]);
  const title = (
    <Title style={[Colors.title, {textAlign: 'center'}]}>Characters</Title>
  );

  const List = () => {
    return (
      <FlatList
        ListHeaderComponent={title}
        data={filteredData}
        key={item => item.id}
        keyExtractor={item => item.id}
        renderItem={item => <Content info={item} />}
        ItemSeparatorComponent={ItemSeparatorView}
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

        <List />
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
