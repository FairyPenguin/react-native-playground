import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import List from "./components/List/List";
import FList from "./components/FlatList/FList";
import SList from "./components/SectionList/SList";
import Input from "./components/Input/Input";
import LoginForm from "./components/LoginForm/LoginForm";
import Fetcher from "./components/Fetcher/Fetcher";
import Navigation from "./components/Navigation/Navigation"


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

        <NavigationContainer>

            <SafeAreaView style={styles.container}>

                <Navigation />

            </SafeAreaView>
        </NavigationContainer>


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
        paddingRight: 9,
        paddingLeft: 9
    },
    title: {
        fontSize: 33
    }
})