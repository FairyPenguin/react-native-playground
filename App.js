import { SafeAreaView, StyleSheet, ScrollView, } from "react-native"

import PokemonCard from "./components/PokemonCard/PokemonCard";
import List from "./components/List/List";
import FList from "./components/FlatList/FList";


export default function App() {


    const bulbasorData = {
        name: "Bulbasor",
        image: require("./assets/001.png"),
        type: "grass",
        hp: 39,
        moves: ["1", "2", "3"],
        weaknesses: ["Fire", "Water"]
    }
    const charmanderData = {
        name: "charmander",
        image: require("./assets/004.png"),
        type: "fire",
        hp: 59,
        moves: ["1", "2", "3"],
        weaknesses: ["rock", "Water"]
    }
    const caterpieData = {
        name: "Bulbasor",
        image: require("./assets/010.png"),
        type: "grass",
        hp: 100,
        moves: ["1", "2", "3"],
        weaknesses: ["Fire", "Water"]
    }
    const charizardData = {
        name: "charizard",
        image: require("./assets/006.png"),
        type: "fire",
        hp: 100,
        moves: ["1", "2", "3"],
        weaknesses: ["rock", "Water"]
    }

    return (
        <SafeAreaView style={styles.container}>

            {/* <ScrollView>
                <PokemonCard  {...bulbasorData} />
                <PokemonCard  {...charmanderData} />
                <PokemonCard  {...charizardData} />
                <PokemonCard  {...caterpieData} />
            </ScrollView> */}

            {/* <List /> */}

            <FList />

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