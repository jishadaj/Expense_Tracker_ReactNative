/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { ReactNode } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Expenses from './screens/Expenses';
import Add from './screens/Add';
import Reports from './screens/Reports';
import Settings from './screens/Settings';
import { theme } from './Theme';

const Tab = createBottomTabNavigator();


const App: () => ReactNode = () => {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={'light-content'} />
      <Tab.Navigator  screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.card}, 
      }}>
        <Tab.Screen name="Expenses" component={Expenses} options={{
          headerTitleAlign: 'center',
        }} />
        <Tab.Screen name="Add" component={Add} options={{
          headerTitleAlign: 'center',
        }} />
        <Tab.Screen name="Reports" component={Reports} options={{
          headerTitleAlign: 'center',
        }} />
        <Tab.Screen name="Settings" component={Settings} options={{
          headerTitleAlign: 'center',
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     //marginTop: 32,
//     paddingHorizontal: 24,
//     borderWidth: 1,
//     flex: 1,
//     backgroundColor: 'black',
//     margin: 'auto'
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'white'
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
