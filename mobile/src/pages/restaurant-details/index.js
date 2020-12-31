import React from 'react';
import constants from 'expo-constants'
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantDetails() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Restaurant Details</Text>
        <View>
          <Image style={styles.image} source={require('../assets/restaurant.jpg')}/>
          <Text style={styles.title}>Restaurant Name</Text>
          <Text style={styles.description}>Description</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={{alignSelf: 'center', marginTop:'auto', marginBottom:'auto'}}>Reservar</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: constants.statusBarHeight + 50,
    },
    header: {
      fontSize:40,
      fontWeight:'700',
      paddingHorizontal: 25
    },
    image: {
        marginTop: 50,
        alignSelf: 'center',
        width: 400,
        height: 250,
        resizeMode:'cover'
    },
    title: {
      fontSize: 30,
      paddingHorizontal: 25,
      fontWeight:'700',
    },
    description: {
      paddingHorizontal: 25,
      fontSize: 20
    },
    button: {
      alignSelf: 'center',
      backgroundColor: "#DDDDDD",
      height: 70,
      width: 300,
      marginTop: 100,
    }
});