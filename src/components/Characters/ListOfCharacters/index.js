import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from './styles';
import ItemSeparatorView from '../ItemSeparatorView';
import Themes from '../../../assets/Themes';
import Header from '../Header';
import Description from '../Description';
import Thumbnail from '../Thumbnail';

const ListOfCharacters = ({data, searchName, setSearchName}) => {
  const filteredData =
    searchName.length != 0
      ? data.filter(character => {
          return character.name.includes(searchName);
        })
      : data;

  const pos = searchName.length != 0 ? 0 : 950;

  const Content = ({info}) => {
    return (
      <View style={styles.content}>
        <Text style={Themes.primaryText}>{info.item.name}</Text>
        <Thumbnail info={info} position={pos} />
        {info.item.description && <Description info={info} />}
      </View>
    );
  };

  const title = (
    <Text style={[Themes.title, {textAlign: 'center'}]}>Characters</Text>
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
        onEndReachedThreshold={0.1}
      />
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <Header setSearchName={setSearchName} />
        <List />
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
