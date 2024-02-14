import { View, Text, StyleSheet } from "react-native"



export default function NewComponent() {

    return (

        <View>
            <Text> React Native </Text>
            <Text> Functional Component </Text>

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