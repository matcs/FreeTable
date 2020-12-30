import React from 'react';
import constants from 'expo-constants'
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native';

export default function Profile(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: constants.statusBarHeight + 50
    },
    header: {
        fontSize:40,
        fontWeight:'700',
        paddingHorizontal: 25
      },
})