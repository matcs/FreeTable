import React from 'react';
import constants from 'expo-constants'
import { ImageBackground, TextInput, KeyboardAvoidingView, View, StyleSheet, Keyboard, Text,Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const imagereact = { uri: "https://reactjs.org/logo-og.png" };

export default function Explore() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={styles.header}>Explore</Text>
        <TextInput placeholder='O que quer comer hoje?' style={styles.textInput} />
        <View style={styles.view}>
          <Text style={styles.header}>Um restaurante ao seu lado</Text>
          <Image style={styles.image} 
                 source={require('../assets/restaurant-2.png')}/>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>


  );
};

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
  view:{
    marginTop: 40
  },
  image: {
      alignSelf: 'center',
      width: '100%',
      height: 375,
      resizeMode:'cover'
  },
  textInput: {
    height: 50,
    width: 350,
    alignSelf: 'center',
    borderColor: '#000000',
    textAlign: 'center',
    borderWidth: 1, 
    borderRadius: 8,  
    marginBottom: 8, 
    fontSize: 18
  },
});