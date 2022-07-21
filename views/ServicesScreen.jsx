import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native'
import React from 'react'

import Screen from "../components/Screen"
import AppCard from '../components/AppCard'

// This will be pulled from the server once we know what services are being offered.
const services = [
    {
        id: 1,
        title: "massage",
        price: 100,
        image: require("../assets/massage-service.jpg")
    },
    {
        id: 2,
        title: "Soul Guide Session",
        price: "Free",
        image: require("../assets/soul-guide-session-service.jpg")
    },
]

const ServicesScreen = () => {
  return (
    <ImageBackground 
    source={require("../assets/bell-rock-bg.jpg")}
    style={styles.imageBackground}
    blurRadius={2}
    >
        <Screen style={styles.screen}>
        <FlatList 
        data={services}
        keyExtractor={services => services.id.toString()}
        renderItem={({item})=> 
        <AppCard 
        title={item.title}
        subTitle={"$ " + item.price}
        image={item.image}
        />}
        />
        </Screen>

    </ImageBackground>
  );
};

export default ServicesScreen

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1
    },
    screen: {
        padding: 10
    }
})