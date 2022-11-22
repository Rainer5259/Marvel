import React, {useEffect, useState, createContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../assets/Colors';
import LogoCaptainAmerica from '../../../components/LogoCaptainAmerica';
import styles from './styles';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <View style={{top: '24%'}}>
        <Text style={[styles.title, styles.comeIn]}>Come in</Text>
        <Text style={[styles.title, styles.and]}>and</Text>
        <Text style={[Colors.title, styles.beAHero]}>BE A HERO</Text>
      </View>

      <LogoCaptainAmerica />
      <View style={{height: '100%', width: '100%', bottom: '10%'}}>
        <Text style={[Colors.primaryText, {left: '20%'}]}>Sign In</Text>
        <View
          style={{
            justifyContent: 'space-evenly',
            height: '10%',
          }}>
          <TextInput style={styles.signInContainer} placeholder="Username" />
          <TextInput style={styles.signInContainer} placeholder="Password" />
        </View>
        <Text style={{color: Colors.colors.red, left: '18%'}}>
          You don't has a account?
        </Text>
        <TouchableOpacity style={styles.button}>
          <Icon name="arrow-right" size={32} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
