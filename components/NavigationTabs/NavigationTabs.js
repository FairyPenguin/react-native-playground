import { View, Text, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import CourseListScreen from "../../screens/CourseListScreen"
import SettingsScreen from "../../screens/SettingsScreen"
import ProfileScreen from "../../screens/ProfileScreen"
import Ionicons from "@expo/vector-icons/Ionicons"
import AboutStack from "../../components/Navigation/Navigation"


const bottomTab = createBottomTabNavigator()

export default function NavgiationTabs() {

    return (

        <bottomTab.Navigator
            screenOptions={{
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: "blue",
                tabBarInactiveTintColor: "red"
            }}
        >
            <bottomTab.Screen
                options={{
                    tabBarLabel: "My Kido",
                    tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" size={25} color={color} />,
                    tabBarBadge: 5
                }}
                name="Profile" component={ProfileScreen} />
            <bottomTab.Screen

                name="Settings" component={SettingsScreen} />
            <bottomTab.Screen

                name="CourseList" component={CourseListScreen} />
            <bottomTab.Screen

                name="AboutStack" component={AboutStack} options={{
                    headerShown: false
                }} />
        </bottomTab.Navigator>


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