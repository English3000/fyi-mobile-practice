import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Nav from './_Nav';

export default class Posts extends React.Component {
  render() {
    return (<View>
      <FlatList data={[{key: 'A'}, {key: 'B'}, {key: 'C'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}>
        {/* Posts; req's seed data */}
      </FlatList>
    </View>);
  }
}
