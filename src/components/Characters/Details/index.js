import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalCustomized from '../../ModalCustomized';
import styles from './styles';

const Details = ({info, setIsVisible}) => {
  const Comics = () => {
    {
      return !info.item.stories.available.length == 0 ? (
        <Text>Don't have any Comics</Text>
      ) : (
        <View style={styles.descriptionContainer}>
          <ScrollView>
            <Text style={styles.subTitle}>Comics</Text>
            {info.item.comics.items.map((e, id) => (
              <Text key={id} style={styles.primaryText}>
                {e.name}
              </Text>
            ))}
          </ScrollView>
        </View>
      );
    }
  };
  const Series = () => {
    {
      return !info.item.stories.available.length == 0 ? (
        <Text style={styles.subTitle}>Don't have any stories</Text>
      ) : (
        <View style={styles.descriptionContainer}>
          <ScrollView>
            <Text style={styles.subTitle}>Series</Text>
            {info.item.stories.items.map((e, id) => (
              <Text key={id} style={styles.primaryText}>
                {e.name}
              </Text>
            ))}
          </ScrollView>
        </View>
      );
    }
  };

  const Stories = () => {
    {
      return !info.item.stories.available.length == 0 ? (
        <Text>Don't have any Stories</Text>
      ) : (
        <View style={styles.descriptionContainer}>
          <ScrollView>
            <Text style={styles.subTitle}>Stories</Text>
            {info.item.comics.items.map((e, id) => (
              <Text key={id} style={styles.primaryText}>
                {e.name}
              </Text>
            ))}
          </ScrollView>
        </View>
      );
    }
  };

  const Content = () => {
    return (
      <>
        <Comics />
        <Series />
        <Stories />
      </>
    );
  };
  return (
    <ModalCustomized>
      <View style={styles.content}>
        <View style={{alignSelf: 'center', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              {
                setIsVisible(prev => !prev),
                  // console.log(JSON.stringify(info.item.comics, undefined, 3));
                  console.log(info.item.comics.items[info.index].name);
              }
            }}>
            <Icon name="chevron-down" style={styles.closeModal} />
          </TouchableOpacity>

          <Text style={styles.title}>
            {info.item.name} - Had participations
          </Text>
        </View>

        <Content />
      </View>
    </ModalCustomized>
  );
};
export default Details;
