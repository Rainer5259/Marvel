import React, {useState, useMemo, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import ItemSeparatorView from '../../../components/ItemSeparatorView';
import Themes from '../../../assets/Themes';
import Description from '../Description';
import Thumbnail from '../Thumbnail';
import Details from '../Details';

const ListOfCharacters = ({filteredCharacters, searchName, loadMoreItems}) => {
  const pos = searchName.length != 0 ? 0 : 950;

  const Content = ({info}) => {
    const [isVisible, setIsVisible] = useState(info.item.isVisible);
    console.log(JSON.stringify(info.item.isVisible, undefined, 3));
    useEffect(() => {
      console.log(JSON.stringify(info.item, undefined, 3));
    }, [isVisible]);
    return (
      <View style={styles.content}>
        <Text style={Themes.primaryText}>{info.item.name}</Text>
        <TouchableOpacity
          onPress={() => setIsVisible(!info.item.isVisible)}
          activeOpacity={0.9}>
          <Thumbnail info={info} position={pos} />
        </TouchableOpacity>
        {info.item.description && <Description info={info} />}
        {isVisible && <Details info={info} setIsVisible={setIsVisible} />}
      </View>
    );
  };

  const title = (
    <Text style={[Themes.title, {textAlign: 'center'}]}>Characters</Text>
  );
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          ListHeaderComponent={title}
          data={filteredCharacters}
          key={item => item.id}
          renderItem={item => <Content info={item} />}
          ItemSeparatorComponent={ItemSeparatorView}
          onEndReachedThreshold={0.8}
          onEndReached={loadMoreItems}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
