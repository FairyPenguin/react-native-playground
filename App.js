import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native"

import PokemonCard from "./components/PokemonCard/PokemonCard";


export default function App() {


    const pokemonData = {
        name: "Bulbasor",
        image: require("./assets/004.png"),
        type: "Earth",
        hp: 39,
        moves: ["1", "2", "3"],
        weaknesses: ["Fire", "Water"]
    }

    return (
        <SafeAreaView style={styles.container}>
            <PokemonCard  {...pokemonData} />
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: Platform.OS === "android" ? 45 : 0,
        paddingRight: 14,
        paddingLeft: 14
    },
    title: {
        fontSize: 33
    }
})