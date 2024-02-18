import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { View, Text, StyleSheet, Pressable } from "react-native"
import HomeScreen from "../../screens/HomeScreen";
import AboutScreen from "../../screens/AboutScreen";


const Stack = createNativeStackNavigator()

export const AboutStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerTintColor: "black",
            headerTitleStyle: { fontWeight: "bold" },
            headerStyle: {
                backgroundColor: "grey"
            },
            headerRight: () => {
                return (
                    <Pressable onPress={() => alert("Choose from the menu Kido")}>
                        <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
                    </Pressable>
                )
            },
            contentStyle: {
                backgroundColor: "blue"
            }
        }}>
            {/* Home */}
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title: "It's Home Kido",


            }} />
            <Stack.Screen
                name="About"
                component={AboutScreen}
                initialParams={{ name: "Kido!!Kido!!" }}
            // options={({ route }) =>({title:route.params.name})}
            />

        </Stack.Navigator>
    )
}

export default function NewComponent() {

    return (
        <View style={styles.flexContainer}>
            <AboutStack />
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