import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet } from "react-native"

export default function StyledComponent() {

    return (

        <View style={styles.container}>
            <Text style={styles.title}> React Native </Text>
            <Text style={styles.title}> Functional Component </Text>
            <StatusBar
                backgroundColor="white"
                barStyle={"dark-content"}
            />

        </View>

    )

}


/* Local Scoped styles only for local styling,
 but you can make global styles file and export 
 the styles object from it to expose it to other files
 with only export before the styles object =>
 =>> export xonst styles = StyleSheet.create({}) <<=
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#191919",
        paddingTop: 30
    },
    title: {
        fontSize: 33,
        color: "white"
    }
})

/*
Styling in RN have 3 approaches 

1- Inline Styles with the style prop 
{Plain JS object for the style prop}

2- StyleSheet API (Multiple styles in one place 
    with the create method)

3- 

*/