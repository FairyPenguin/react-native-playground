import { Text, StyleSheet, Pressable } from "react-native"

export default function iosButton({ onPress, title }) {

    return (

        <Pressable
            style={styles.title}
            onPress={onPress}
        >
            <Text> {title} </Text>
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
        borderRadius: 20
        , backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center"
    }
})