import { View, Text, StyleSheet } from "react-native"


export default function FlexBox({ children, style }) {

    return (

        <View style={[styles.flexContainer, style]}>
            <Text style={styles.title}> {children} </Text>
        </View>

    )

}



const styles = StyleSheet.create({
    flexContainer: {
        // flex: 1,
        // flexGrow: 1,
        padding: 13,
        // backgroundColor: "white",
        // width: "auto",
        // height: "auto",
        width: 80,
        height: 80
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
})