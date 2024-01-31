import { View, Text, StyleSheet } from "react-native"


export default function Dynamic() {

    return (

        <View style={styles.flexContainer}>
            <Text style={styles.title}> Dynamic Component </Text>

        </View>

    )




}


const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "midnightblue",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 33,
        color: "white"
    }
})