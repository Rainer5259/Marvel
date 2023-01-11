import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CharactersScreen from '../Screens/Characters';
import Home from '../Screens/Home';

// import CharactersProvider from '../../services/contexts/characters';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      {/* <CharactersProvider> */}
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Characters"
          component={CharactersScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      {/* </CharactersProvider> */}
    </NavigationContainer>
  );
};

export default Routes;
