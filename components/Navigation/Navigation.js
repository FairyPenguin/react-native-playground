import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text, StyleSheet } from "react-native"
import HomeScreen from "../../screens/HomeScreen";
import AboutScreen from "../../screens/AboutScreen";


const Stack = createNativeStackNavigator()

export default function NewComponent() {

    return (
        <View style={styles.flexContainer}>
            <Stack.Navigator initialRouteName="Home">
                {/* Home */}
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen}
                    initialParams={{ name: "Kido!!Kido!!" }} />

            </Stack.Navigator>
        </View>
    )

}

/**
 * useNavigation hook works in any component not only the screens
 * the navgation prop works only in the screen components
 * For screens use the prop
 * For nested components and othe cases use the Hook
 * 
 */


const styles = StyleSheet.create({
    flexContainer: {
        flex: 0.6,
        backgroundColor: "white"
    },
    title: {
        fontSize: 33
    }
})