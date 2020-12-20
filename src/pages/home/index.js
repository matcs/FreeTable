import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
        <Text>Home Page</Text>
        <Button
          title="Go To Restaurants"
          onPress={ () => navigation.navigate('Restaurants')}
        />
    </View>
  );
};