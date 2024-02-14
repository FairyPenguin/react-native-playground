import { View, Text, StyleSheet, Button } from "react-native"


export default function AboutScreen({ navigation, route }) {

    const { name } = route.params

    return (
        <View style={styles.flexContainer}>
            <Text style={styles.title}> You are About it {name}! </Text>
            <Button
                style={styles.button}
                title="Go to Home Kido!"
                onPress={() => navigation.navigate("Home")}
            />
            <View>
                <Text style={styles.button}>Space</Text>
            </View>
            <Button

                title="Update or Stable"
                onPress={() => navigation.setParams({ name: "The Kido who is not Kido anymore" })}
            />
            <Text style={styles.button}>Space</Text>

            <Button title="Go Back kido"
                onPress={() => navigation.navigate("Home", {
                    updateStatus: "Kido?! any Updates"
                })} />
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
    },
    button: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center"
    }
})