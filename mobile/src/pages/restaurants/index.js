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

export default function Restaurants() {
  const [restaurants,setRestaurants] = useState([]);
  const [loading, setLoading] = useState(false);
  
  async function loadRestaurants(){
    if(loading){
        return;
    }

    setLoading(true);

    const response = await api.get('restaurants')
    
    setRestaurants([...restaurants,...response.data]);
    setLoading(false);
  }

  useEffect(()=>{
      loadRestaurants();
  }, [])


  const renderItem = ({ item }) => (
    <ScrollItem id={item.idRestaurant}
                name={item.name} 
                location={item.location}
                description={item.description}
                />
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
                data={restaurants}
                renderItem={renderItem}
                keyExtractor={item => item.idRestaurant}
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