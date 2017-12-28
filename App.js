import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Posts from './_Posts';
import Nav from './_Nav';
// import Gateway from './_Gateway';
import Profile from './_Profile';
// import Search from './_Search';
// import Notifs from './_Notifs';

let currentUser = true;

const Screens = StackNavigator({
  Home: { screen: currentUser ? Profile : null },//Gateway },
  Posts: { screen: Posts }
  // Profile: { screen: Profile },
  // Search: { screen: Search },
  // Notifs: { screen: Notifs }
}, {navigationOptions: { header: navigation => <Nav screenProps={navigation}/> } }); //if no current user, home is gateway screen; else is posts screen

export default class App extends React.Component {
  render() { return <Screens/>; }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
