import React, { useEffect, useState } from 'react';
import ScrollItem from '../../components/ScrollItem'
import constants from 'expo-constants'
import { 
  Text, 
  View, 
  ScrollView, 
  StyleSheet,
  FlatList,
} from 'react-native';

import api from '../../services/api'

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    name: "Third Item",
  },
];

export default function Restaurants() {
  const [restaurants,setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3333/restaurants')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  console.log(data)

  const renderItem = ({ item }) => (
    <ScrollItem name={'item'} />
  );

  return (
     <ScrollView style={styles.container}>
       <Text style={styles.header}>Restaurantes</Text>
          <View style={styles.view}>
            <Text style={styles.text}>Recomendações</Text>

              <FlatList 
                scrollEventThrottle={16} horizontal={true} style={{flex:1}}
                showsHorizontalScrollIndicator={false}
                onEndReachedThreshold={0.1}
                //data={restaurants}
                //renderItem={renderItem}
                //keyExtractor={item => item.id}
              />
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
    paddingTop:25,
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