import { View, Text, StyleSheet } from "react-native"

import { createDrawerNavigator } from '@react-navigation/drawer';

import SettingsScreen from "../../screens/SettingsScreen";
import DashboardScreen from "../../screens/DashboardScreen";

const Drawer = createDrawerNavigator()

export default function NavgiationDrawer() {

    return (

        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={DashboardScreen}
                options={{
                    title: "Dashboard Screen",
                    drawerLabel: "Dash",
                    drawerActiveBackgroundColor: "grey",
                    drawerActiveTintColor: "white",
                    drawerContentStyle: {
                        backgroundColor: "grey"
                    }
                }}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>

    )

}

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    title: {
        fontSize: 33
    }
})