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
     <View style={styles.container}>
       <Text onPress={ () => navigation.navigate('RestaurantDetails')}>Busca</Text>
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.view}>
            <Text style={styles.text}>
              Recomendações
            </Text>
            <View style={styles.scrollview_view}>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />

              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.view}>
            <Text style={styles.text}>
              Comida Asiatica
            </Text>
            <View style={styles.scrollview_view}>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />

              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <ScrollView scrollEventThrottle={16}>
          <View style={styles.view}>
            <Text style={styles.text}>
              Comida Italiana
            </Text>
            <View style={styles.scrollview_view}>
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />
                <ScrollItem />

              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  container: {
    backgroundColor: 'white',
    paddingTop: constants.statusBarHeight + 60
  },
  view: {
    flex:1,
    
    paddingTop:25
  },
  text: {
    fontSize:24,
    fontWeight:'700',
    paddingHorizontal: 20
  },
  scrollview_view: {
    height:130,
    marginTop:20
  },
  
});