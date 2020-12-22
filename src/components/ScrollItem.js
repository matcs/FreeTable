import React from "react";
import { 
    Text, 
    View, 
    Image,
    StyleSheet
  } from 'react-native';
  
export default function ScrollItem ({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.view}>
                <Image
                    style={styles.image}
                    source={require('../pages/assets/restaurant.jpg')}
                />
            </View>
            <View style={styles.title}>
                <Text>Mamma Mia</Text>
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
        resizeMode:'cover'
    },
    title: {
        flex:1,
        paddingLeft:10,
        paddingRight:10
    },
});