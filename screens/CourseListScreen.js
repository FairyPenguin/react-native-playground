import { View, Text, StyleSheet } from "react-native"

export default function CourseListScreen() {

    return (

        <View style={styles.flexContainer}>
            <Text style={styles.title}> CourseListScreen </Text>
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