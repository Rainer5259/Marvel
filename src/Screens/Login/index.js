import React, {useEffect, useState, createContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../../assets/Colors';
import LogoCaptainAmerica from '../../../components/LogoCaptainAmerica';
import styles from './styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([{}]);
  const [hide, setHide] = useState(true);
  const [eye, setEye] = useState('eye');
  const login = () => {
    return setData({name: username, password: password});
  };

  const displayPassword = () => {
    return hide
      ? (setHide(false), setEye('eye-slash'))
      : (setHide(true), setEye('eye'));
  };
  if (username.length == 20) {
    Alert.alert('Máximo de characteres atigindos!');
  }
  console.log(data);
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

        <TextInput
          style={styles.signInContainer}
          placeholder="Username"
          onChangeText={username => {
            setUsername(username);
          }}
          maxLength={20}
        />
        <TextInput
          style={styles.signInContainer}
          placeholder="Password"
          onChangeText={password => {
            setPassword(password);
          }}
          secureTextEntry={hide}
        />
        <TouchableOpacity
          style={{alignSelf: 'flex-end', right: '20%', bottom: '4.5%'}}
          onPress={() => displayPassword()}>
          <Icon name={eye} size={16} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            left: '18%',
            maxWidth: '47%',
          }}>
          <Text style={[Colors.description]}>You don't has a account?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{left: '18%', maxWidth: '43%'}}>
          <Text style={[Colors.description, {color: Colors.colors.red}]}>
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.joinButton} onPress={() => login()}>
          <Icon name="arrow-right" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Login;
