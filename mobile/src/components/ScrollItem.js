import React from "react";
import { useNavigation } from '@react-navigation/native'
import { 
    Text, 
    View, 
    Image,
    StyleSheet
  } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
  
export default function ScrollItem(props){
    const navigation = useNavigation();

    function navigateToRestaurantDetails(){
        navigation.navigate('RestaurantDetails', { props })
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.view}>
                <Image style={styles.image} 
                    source={require('../pages/assets/restaurant.jpg')}/>
            </View>
            <View style={styles.title}>
                <TouchableOpacity onPress={navigateToRestaurantDetails}>
                    <Text>{props.name}</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height:130,
        width:130,
        marginLeft:20,
        borderWidth:0.5,
        borderColor:'#dddddd'
    },
    view: {
        flex:2
    },
    image: {
        flex:1,
        width: null, 
        height: null,
    },
    title: {
        flex:1,
        paddingLeft:10,
        paddingRight:10
    },
});