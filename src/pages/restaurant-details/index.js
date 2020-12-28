import React from 'react';
import constants from 'expo-constants'
import { Button, Text, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantDetails() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text>Restaurant Details</Text>
        <Button
          title="Go To Home"
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
      flex: 1,
      backgroundColor: 'white',
      paddingTop: constants.statusBarHeight + 50
    },    
  });