import { View, Text, StyleSheet } from "react-native"


/* 

 Multiple styles can be added with 
 an Array[] of styles 

 Note: the lst style object in the Array can override
  previous objects styles

*/


export default function MultipleStyles() {

    return (

        <View style={styles.container}>
            <Text style={[styles.titlebrownBG, styles.box]} >
                React Native
            </Text>
            <Text style={[styles.titlegreyBG, styles.box]} >
                Functional Component
            </Text>

        </View >

    )

}


const styles = StyleSheet.create({
    container: {
        // flex: 0.5,
        backgroundColor: "#3B3486",

    },
    titlebrownBG: {
        color: "white",
        fontSize: 15,
        backgroundColor: "brown"
    },
    titlegreyBG: {
        color: "white",
        fontSize: 15,
        backgroundColor: "grey"
    },
    box: {
        height: 100,
        width: 100,
        padding: 10
    }

})