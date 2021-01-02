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
import { useNavigation } from '@react-navigation/native';

export default function RestaurantDetails() {
  const navigation = useNavigation();
  const [count,setCount] = useState(0);
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Restaurant Details</Text>
        <View>
          <Image style={styles.image} source={require('../assets/restaurant.jpg')}/>
          <Text style={styles.title}>Restaurant Name</Text>
          <Text style={styles.description}>Description</Text>
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
        >
          <Text 
          style={{alignSelf: 'center', marginTop:'auto', marginBottom:'auto',
          color:'white',
          fontSize: 25,
          fontWeight:'700',
          }}
          >Reservar</Text>
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
      marginTop: 75,
    }
});