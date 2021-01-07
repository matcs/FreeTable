import React, {useState} from 'react';
import constants from 'expo-constants'
import { 
  Text, 
  View, 
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api'

export default function RestaurantDetails() {
  const route = useRoute();
  const [count,setCount] = useState(0);
  const restaurant = route.params.props;

  const book = async() => {
    console.log('start api')
    const response = await api.get(`restaurant/1/book`);
    console.log(response);
  }
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Restaurant Details</Text>
        <View>
          <Image style={styles.image} source={require('../assets/restaurant.jpg')}/>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.description}>{restaurant.description}</Text>
          <Text style={styles.description}>{restaurant.location}</Text>
        </View>
        
        <View style={{ marginHorizontal: 25, marginTop:75}}>
        <Text style={{fontSize:15}}>Mesa para quantos?</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{width:50, height: 50, backgroundColor: '#DDDDDD', }} 
              onPress={()=>{setCount(count-1)}}
          >
            <Text style={{marginTop:'auto', marginBottom:'auto', marginRight:'auto',marginLeft:'auto'}}>
              -
            </Text>
          </TouchableOpacity>
          <View style={{width: 50, height:50}}>
            <Text style={{marginTop:'auto', marginBottom:'auto', marginRight:'auto',marginLeft:'auto'}}>
              {count < 0 ? setCount(0) : count}
              </Text>
          </View>
          <TouchableOpacity style={{width:50, height: 50, backgroundColor: "#DDDDDD", }}
            onPress={()=>{setCount(count+1)}}
          >
            <Text style={{marginTop:'auto', marginBottom:'auto', marginRight:'auto',marginLeft:'auto'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity style={styles.button}
          disabled={count == 0 ? true : false}
          onPress={book}
        >
          <Text 
          style={{alignSelf: 'center', marginTop:'auto', marginBottom:'auto',
          color:'white',
          fontSize: 25,
          fontWeight:'700',
          }}
          >
            Reservar
          </Text>
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
      backgroundColor: '#ed2939',
      height: 70,
      width: 300,
      marginTop: 65,
    }
});