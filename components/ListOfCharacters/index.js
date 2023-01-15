import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  ScrollView,
} from 'react-native';
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
  const [isOn, setIsOn] = useState(true);
  const [isHidden, setIsHidden] = useState([]);

  const createHide = () =>
    data.forEach((e, i, a) => {
      return isHidden.push({hidden: e.hide});
    });
  createHide();
  // console.log(' ', isHidden);
  const filteredData =
    search.length > 0
      ? data.filter(character => {
          return character.name.includes(search.toUpperCase());
        })
      : data;

  const startRotation = i => {
    isOn ? setIsOn(false) : setIsOn(true);
    return isOn ? (isHidden[i].hidden = false) : (isHidden[i].hidden = true);
  };

  const Description = ({info, index}) => {
    const description = info.description;

    console.log(isOn);

    const ButtonShowMoreDetails = () => {
      return (
        <RotaryButton
          onPress={() => {
            startRotation(index);
          }}
        />
      );
    };
    return (
      !info.description == '' && (
        <View style={styles.description}>
          <Text style={[{marginRight: '8%'}, Colors.description]}>
            {isHidden[index].hidden
              ? description.substring(0, 30)
              : description}
          </Text>
          <ButtonShowMoreDetails />
        </View>
      )
    );
  };

  const Content = ({info}) => {
    const img = {
      path: info.thumbnail.path,
      extension: info.thumbnail.extension,
    };
    const thumbnail = `${img.path.replace(/http/i, 'https')}.${img.extension}`;
    console.log(info);
    return (
      <View style={styles.content}>
        <AnimatedText styles={Colors.primaryText} position={-250}>
          {info.name}
        </AnimatedText>
        <AnimatedView position={950}>
          <Image
            source={{
              uri: thumbnail,
            }}
            style={styles.img}
          />
        </AnimatedView>
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
        <ScrollView>
          {filteredData.map((item, i) => {
            return (
              <View>
                <Content info={item} />
                <Description key={`i:${i}`} info={item} index={i} />
              </View>
            );
          })}
        </ScrollView>
        {/* <FlatList
          data={filteredData}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={item => (
            <View>
              <Items info={item} />
              <Description info={item} />
            </View>
          )}
          ItemSeparatorComponent={ItemSeparatorView}
        /> */}
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
