import React from 'react';
import ScrollItem from '../../components/ScrollItem'
import constants from 'expo-constants'
import { 
  Text, 
  View, 
  ScrollView, 
  Dimensions,
  StyleSheet,
  Button
} from 'react-native';


const {height,width} = Dimensions.get('window');
export default function Restaurants({navigation}) {
  return (
     <ScrollView style={styles.container}>
       <Text style={styles.header}>Restaurantes</Text>
          <View style={styles.view}>
            <Text style={styles.text}>Recomendações</Text>
            <ScrollView scrollEventThrottle={16} horizontal={true} style={{flex:1}} showsHorizontalScrollIndicator={false}>
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
            </ScrollView>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>Comida Chinesa</Text>
            <ScrollView scrollEventThrottle={16} horizontal={true} style={{flex:1}} showsHorizontalScrollIndicator={false}>
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
            </ScrollView>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>Comida Thailandesa</Text>
            <ScrollView scrollEventThrottle={16} horizontal={true} style={{flex:1}} showsHorizontalScrollIndicator={false}>
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
            </ScrollView>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>Comida Italiana</Text>
            <ScrollView scrollEventThrottle={16} horizontal={true} style={{flex:1}} showsHorizontalScrollIndicator={false}>
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
            </ScrollView>
          </View>

          <View style={styles.view}>
            <Text style={styles.text}>Comida Brasileira</Text>
            <ScrollView scrollEventThrottle={16} horizontal={true} style={{flex:1}} showsHorizontalScrollIndicator={false}>
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
            </ScrollView>
          </View>
        
      </ScrollView>
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
  view: {
    flex:1,
    paddingTop:25
  },
  text: {
    fontSize:24,
    fontWeight:'700',
    paddingHorizontal: 20,
  },
  scrollview_view: {
    height:130,
    marginTop:20
  },
  
});