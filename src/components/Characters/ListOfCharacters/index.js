import React, {useRef} from 'react';
import {View, Text, SafeAreaView, FlatList, Alert} from 'react-native';
import styles from './styles';
import ItemSeparatorView from '../../../components/ItemSeparatorView';
import Themes from '../../../assets/Themes';
import Header from '../Header';
import Description from '../Description';
import Thumbnail from '../Thumbnail';

const ListOfCharacters = ({filteredCharacters, searchName, loadMoreItems}) => {
  const scrollPosition = useRef(null);

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
  console.log(loadMoreItems);
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          ref={scrollPosition}
          ListHeaderComponent={title}
          onScroll={e => {
            scrollPosition.current = e.nativeEvent.contentOffset.y;
          }}
          data={filteredCharacters}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={item => <Content info={item} />}
          ItemSeparatorComponent={ItemSeparatorView}
          onEndReachedThreshold={1}
          onEndReached={loadMoreItems}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
