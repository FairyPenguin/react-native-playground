import { useNavigation } from "@react-navigation/native"
import { View, Text, StyleSheet, Button } from "react-native"


export default function HomeScreen({ navigation, route }) {

    // const navigationHook = useNavigation()

    return (
        <View style={styles.flexContainer}>
            <Text style={styles.title}> You are Home Kido! </Text>
            <Text style={styles.title}> {route.params?.updateStatus}</Text>
            <Button title="About" onPress={() => navigation.navigate("About",
                { name: "Kido! Again" })} />
        </View>
    )

}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center"

    },
    title: {
        fontSize: 25,
        // color: "blue",
        fontWeight: "bold",
        marginBottom: 16
    }
})