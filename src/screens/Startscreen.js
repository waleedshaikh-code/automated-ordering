import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LottieView from 'lottie-react-native';

const Startscreen = ({navigation}) => {
    setTimeout(()=>{
        navigation.navigate("Home")
    }, 3000)
    return (
        <View style={{flex:1, backgroundColor:'red'}}>
            <LottieView
            source={require("../assets/animations/67226-food-app-interaction.json")}
            autoPlay
            style={{height:400, top:50}}
            />
        </View>
    )
}

export default Startscreen

const styles = StyleSheet.create({})
