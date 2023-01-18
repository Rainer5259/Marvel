import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  Text,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import ItemSeparatorView from '../ItemSeparatorView';
import {SearchBar} from '@rneui/themed';
import Colors from '../../assets/Colors';
import AnimatedView from '../Animated';
import RotaryButton from '../Animated/RotaryButton';
import AnimatedText from '../Animated/Text';
import Button from '../Animated/ArrowButton';
import Title from '../Title';

const ListOfCharacters = ({data}) => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();
  const goBack = () => navigation.navigate('Home');
  const [isOn, setIsOn] = useState(true);
  const [isHidden, setIsHidden] = useState([]);

  // const createHide = () =>
  //   data.forEach((e, i, a) => {
  //     return isHidden.push({hidden: e.hide});
  //   });
  // createHide();

  const filteredData =
    search.length > 0
      ? data.filter(character => {
          return character.name.includes(search.toUpperCase());
        })
      : data;

  const Header = () => {
    return (
      <AnimatedView position={450}>
        <View style={styles.header}>
          <Button
            arrowDirection="left"
            size={36}
            slideToValue={270}
            showBreathingAnim={false}
            onPress={goBack}
          />
        </View>
      </AnimatedView>
    );
  };
  const startRotation = i => {
    return isHidden
      ? (isHidden[i].hidden = false)
      : (isHidden[i].hidden = true);
  };

  const Description = ({info, index}) => {
    const description = info.item.description;

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
      !info.item.description == '' && (
        <View style={styles.description}>
          <Text style={[{marginRight: '8%'}, Colors.description]}>
            {isHidden[info.index].hidden
              ? description.substring(0, 30)
              : description}
          </Text>
          <ButtonShowMoreDetails />
        </View>
      )
    );
  };

  const Thumbnail = ({info}) => {
    const img = {
      path: info.item.thumbnail.path,
      extension: info.item.thumbnail.extension,
    };

    const thumbnail = `${img.path.replace(/http/i, 'https')}.${img.extension}`;

    return (
      <Image
        source={{
          uri: thumbnail,
        }}
        style={styles.img}
      />
    );
  };
  const Characters = ({info}) => {
    return (
      <View style={styles.content}>
        <AnimatedText styles={Colors.primaryText} position={-250}>
          {info.item.name}
        </AnimatedText>
        <AnimatedView position={950}>
          <Thumbnail info={info} />
          <Description info={info} index={info.index} />
        </AnimatedView>
      </View>
    );
  };

  const Content = ({info}) => {
    return <Characters info={info} />;
  };

  useEffect(() => {
    console.log('Atualizou tudo');
  }, [Description]);

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

        <Title style={[Colors.title, {textAlign: 'center'}]}>Characters</Title>

        <FlatList
          data={filteredData}
          key={item => item.id}
          keyExtractor={item => item.id}
          renderItem={item => <Content info={item} />}
          ItemSeparatorComponent={ItemSeparatorView}
        />
      </SafeAreaView>
    </View>
  );
};

export default ListOfCharacters;
