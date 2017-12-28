import React from 'react';
import { Font } from 'expo';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Nav extends React.Component {
  state = {fontLoaded: false};

  async componentDidMount() {
    await Font.loadAsync('FontAwesome', require('./FontAwesome.otf'));
    this.setState({ fontLoaded: true });
  }

  render() {
    const {navigate} = this.props.screenProps.navigation;
    return this.state.fontLoaded ? (<View style={styles.nav}>
      <TouchableOpacity onPress={() => navigate('Posts')}>
        <FontAwesome style={{fontSize: 30, color: 'lightgreen'}}>{Icons.home}</FontAwesome>
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <FontAwesome style={{fontSize: 30, color: 'lightgreen'}}>{Icons.bellO}</FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome style={{fontSize: 30, color: 'lightgreen'}}>{Icons.signOut}</FontAwesome>
        </TouchableOpacity>
      </View>
    </View>) : <Text>fyi</Text>;
  }
}

const styles = StyleSheet.create({
  nav: { backgroundColor: 'green',
         paddingTop: 30,
         paddingHorizontal: 5,
         paddingBottom: 7.5,
         flexDirection: 'row',
         justifyContent: 'space-between'
  }
});
