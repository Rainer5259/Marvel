import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import ItemSeparatorView from '../../../components/ItemSeparatorView';
import Themes from '../../../assets/Themes';
import Description from '../Description';
import Thumbnail from '../Thumbnail';
import Details from '../Details';
const ListOfCharacters = ({filteredCharacters, loadMoreItems, offset}) => {
  const position = offset !== 0 ? 0 : 950;

  const Content = ({info}) => {
    const [isVisible, setIsVisible] = useState(false);
    const {item} = info;
    return (
      <View style={[styles.content, isVisible && {opacity: 0.6}]}>
        <Text style={Themes.primaryText}>{item.name}</Text>

        <TouchableOpacity
          onPress={() => {
            setIsVisible(prev => !prev);
          }}
          activeOpacity={0.9}>
          <Thumbnail info={info} position={position} />
        </TouchableOpacity>

        <Description info={info} />

        <Details
          info={info}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      </View>
    );
  };

  const title = (
    <Text style={[Themes.title, {textAlign: 'center'}]} max>
      Characters
    </Text>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={title}
        data={filteredCharacters}
        key={item => item.id}
        renderItem={item => <Content info={item} />}
        ItemSeparatorComponent={ItemSeparatorView}
        onEndReachedThreshold={0.7}
        onEndReached={loadMoreItems}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ListOfCharacters;
