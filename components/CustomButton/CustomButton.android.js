import { Text, StyleSheet, Pressable } from "react-native"

export default function androidButton({ onPress, title }) {

    return (

        <Pressable
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.title}> {title} </Text>
        </Pressable>

    )
}

const styles = StyleSheet.create({

    title: {
        fontSize: 33,
        color: "white"
    },
    button: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center"
    }
})