import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../../assets/Themes';
import LogoCaptainAmerica from '../../../src/components/LogoCaptainAmerica';
import styles from './styles';
import Themes from '../../assets/Themes';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([{}]);
  const [hide, setHide] = useState(true);
  const navigation = useNavigation();
  const [eye, setEye] = useState('eye');

  let inputsLenghts = username.length == 0 || password.length <= 5;
  let opacity = inputsLenghts ? 0.5 : 1.0;
  let isDisable = inputsLenghts ? true : false;

  const enterUsername = onChangeText => {
    setUsername(onChangeText);
  };

  const enterPassword = onChangeText => {
    setPassword(onChangeText);
  };

  const login = () => {
    navigation.navigate('Home');
    setData({username: username, password: password});
  };

  const displayPassword = () => {
    return hide
      ? (setHide(false), setEye('eye'))
      : (setHide(true), setEye('eye-slash'));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
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
            onChangeText={enterUsername}
            value={username}
            maxLength={15}
          />
          <TextInput
            style={styles.signInContainer}
            placeholder="Password"
            onChangeText={enterPassword}
            value={password}
            secureTextEntry={hide}
            maxLength={6}
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
            <Text style={[Themes.description]}>You don't has a account?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{left: '18%', maxWidth: '43%'}}>
            <Text style={[Themes.description, {color: Themes.colors.red}]}>
              Forgot your password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.joinButton, {opacity: opacity}]}
            onPress={() => {
              login();
            }}
            disabled={isDisable}>
            <Icon name="arrow-right" size={24} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Login;
