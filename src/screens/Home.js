import React, { useState, useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native'
// import Categories from '../components/Categories';
import HeaderTab from '../components/HeaderTab'
import SearchBar from '../components/SearchBar';
import RestaurantItem from '../components/RestaurantItem';
import { localRestaurants } from '../components/RestaurantItem'

// const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";



const Home = () => {
    const [restaurantData, setrestaurant] = useState(localRestaurants)

    // const getRestaurantsFromYelp = () => {
    //     const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood`;

    //     const apiOptions = {
    //         headers: {
    //             Authorization: `Bearer ${YELP_API_KEY}`,
    //         },
    //     };

    //     return fetch(yelpUrl, apiOptions)
    //         .then((res) => res.json())
    //         .then((json)=>restaurantData(json.business)); 
    // };


    // useEffect(() => {
    //     getRestaurantsFromYelp();
    // }, [])

    return (
        <SafeAreaView >
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTab />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* <Categories /> */}
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})
