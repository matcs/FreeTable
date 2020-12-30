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
       <Text style={styles.header}>Busca</Text>
        <ScrollView scrollEventThrottle={16} horizontal={true} style={{flex:1}}>
          <View style={styles.view}>
            <Text style={styles.text}>Recomendações</Text>
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

        <ScrollView scrollEventThrottle={16} horizontal={true} style={{flex:1}}>
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

        <ScrollView scrollEventThrottle={16} horizontal={true} style={{flex:1}}>
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
      </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize:40,
    fontWeight:'700',
    paddingHorizontal: 25
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: constants.statusBarHeight + 50
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