import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import ItemSeparatorView from '../ItemSeparatorView';
import {SearchBar} from 'react-native-elements';
import Colors from '../../assets/Colors';
import Button from '../Button';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const ListOfCharacters = ({data}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [showMore, setShowMore] = useState(false);
  const [search, setSearch] = useState('');
  useEffect(() => {
    console.log(search);
  }, [filteredData]);

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
  const Description = props => {
    const ShowMoreOrLessIcon = () => {
      return !showMore ? <Icon name="plus" /> : <Icon name="minus" />;
    };

    const ButtonShowMoreDetails = ({onPressed}) => {
      return (
        props.children != '' && (
          <TouchableOpacity
            style={styles.showMore}
            onPress={() => setShowMore(onPressed)}>
            <ShowMoreOrLessIcon />
          </TouchableOpacity>
        )
      );
    };

    const ShowAllDescription = () => {
      return !showMore ? (
        <View style={styles.description}>
          <Text>{props.children.substring(0, 40)}</Text>
          <ButtonShowMoreDetails onPressed={true} />
        </View>
      ) : (
        <View style={styles.description}>
          <Text>{props.children}</Text>
          <ButtonShowMoreDetails onPressed={false} />
        </View>
      );
    };

    return (
      !props.children == '' && (
        <ShowAllDescription>{props.children}</ShowAllDescription>
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
        <Text style={Colors.primaryText}>{info.item.name}</Text>

        <Image
          source={{
            uri: thumbnail,
          }}
          style={styles.img}
        />

        <Description>{info.item.description}</Description>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
          <Button
            width={50}
            height={50}
            iconName={'arrow-left'}
            iconSize={25}
            alignItems={'center'}
            justifyContent={'center'}
            isAnimated={true}
          />
          <SearchBar
            placeholder="Search Characters"
            value={search}
            onChangeText={updateSearch}
            containerStyle={{
              width: '80%',
              height: '100%',
              borderRadius: 25,
              backgroundColor: '#f5f5f5',
            }}
            platform={'ios'}
          />
        </View>
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
