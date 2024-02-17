import { View, Text, StyleSheet, Button } from "react-native"

export default function DashboardScreen({ navigation }) {

    return (

        <View style={styles.flexContainer}>
            <Text style={styles.title}> Dashboard </Text>
            <Button title="Draw Me!" onPress={() => navigation.toggleDrawer()} />
            <Button title="Jump !!!" onPress={() => navigation.jumpTo("Settings")} />
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