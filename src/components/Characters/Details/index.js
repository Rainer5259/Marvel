import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ModalCustomized from '../../ModalCustomized';
import styles from './styles';

const Details = ({info, isVisible, setIsVisible}) => {
  const {item} = info;

  const CharacterStory = ({children, title}) => {
    return !item.comics.available ? (
      <Text style={styles.thereAreNoStory}>There are no {title}</Text>
    ) : (
      <View style={styles.descriptionContainer}>
        <ScrollView>
          {children.items.map((e, id) => (
            <Text key={id} style={styles.primaryText}>
              {e.name}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  };

  const Comics = () => {
    return <CharacterStory title="Comics">{item.comics}</CharacterStory>;
  };

  const Series = () => {
    return <CharacterStory title="Stories">{item.stories}</CharacterStory>;
  };

  const Stories = () => {
    return <CharacterStory title="Series">{item.series}</CharacterStory>;
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
    isVisible && (
      <ModalCustomized>
        <View style={styles.content}>
          <View style={{alignSelf: 'center', flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => setIsVisible(prev => !prev)}>
              <Icon name="chevron-down" style={styles.closeModal} />
            </TouchableOpacity>
            <Text style={styles.title}>{item.name} - Had participations</Text>
          </View>
          <Content />
        </View>
      </ModalCustomized>
    )
  );
};
export default Details;
