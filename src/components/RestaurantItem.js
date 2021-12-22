import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Categories from './Categories';

export const localRestaurants = [
  {
    name: 'Biryani',
    image_url: 'https://hamariweb.com/recipes/images/recipeimages/3464.jpg',
    categories: ['Cafe', 'Bar'],
    price: 'RS-150',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Burger',
    image_url:
      'https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x500.jpg',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
  {
    name: 'Pizza',
    image_url:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
];

const ReataurantItem = props => {
  return (
    <ScrollView style={{height: 500}}>
      <Categories />
      <TouchableOpacity activeOpacity={1}>
        {props.restaurantData.map((restaurant, index) => (
          <View
            key={index}
            style={{padding: 15, backgroundColor: '#fff', marginTop: 10}}>
            <RestaurantImage image={restaurant.image_url} />
            <Restaurantinfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        ))}
      </TouchableOpacity>
    </ScrollView>
  );
};

const RestaurantImage = props => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const Restaurantinfo = props => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}>
    <View>
      <Text style={{fontSize: 15, fontWeight: '900'}}>{props.name}</Text>
      <Text style={{fontSize: 13, color: 'grey'}}>30-45 min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}>
      <Text style={{fontWeight: 'bold'}}>{props.rating}</Text>
    </View>
  </View>
);

export default ReataurantItem;
