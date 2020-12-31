import React from 'react';
import constants from 'expo-constants'
import { 
    View, 
    Text,
    StyleSheet,
    Image
} from 'react-native';

export default function Saved(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Salvos
            </Text>
            <View style={styles.box}>
                <View style={styles.view}>
                    <Image style={styles.image} />
                </View>
                <Text style={styles.description}>Title</Text>
                <Text style={styles.total}>Total 0</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        color:'white',
        paddingTop: constants.statusBarHeight + 50
    },
    title: {
        fontSize:40,
        fontWeight:'700',
        paddingHorizontal: 25
    },
    box: {
        height:250,
        width: 370,
        marginLeft:20,
        marginRight: 20,
        borderWidth:0.5,
        borderRadius: 8,
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
    description: {
        fontSize:30,
        fontWeight:'700',
        marginStart: 20,
        paddingTop: 20
    },
    total: {
        fontSize:15,
        fontWeight:'700',
        marginStart: 25,
        paddingBottom: 20
    }
})