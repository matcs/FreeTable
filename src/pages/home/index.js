import React from 'react';
import constants from 'expo-constants'
import { Button, Text, View, StyleSheet } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Text>Home Page</Text>
        <Button
          title="Go To Restaurants"
          onPress={ () => navigation.navigate('Restaurants')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  container: {
    backgroundColor: 'white',
    paddingTop: constants.statusBarHeight + 60
  }
});