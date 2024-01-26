import { View, Text, StyleSheet } from "react-native"





export default function BoxShadow() {

    return (

        <View style={styles.boxShadow}>

            <Text> BoxShadow Component </Text>

        </View>

    )


}


const styles = StyleSheet.create({
    boxShadow: {
        marginTop: 30,
        width: "29%",
        height: "29%",
        backgroundColor: "white",
        paddingHorizontal: 10,
        shadowColor: "blue",
        shadowOffset: {
            width: 16,
            height: 16
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        // boxShadow in android needs the elevation property
        // shadowColor is the only one works for both Android and IOS
        // there is packages for this
        elevation: 10
    }
})