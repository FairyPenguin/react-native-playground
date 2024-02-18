import { View, Text, StyleSheet } from "react-native"

export default function ProfileScreen() {

    return (

        <View style={styles.flexContainer}>
            <Text style={styles.title}> ProfileScreen </Text>
        </View>
    )

}


const styles = StyleSheet.create({
    flexContainer: {
        flex: 0.6,
        backgroundColor: "white"
    },
    title: {
        fontSize: 33
    }
})