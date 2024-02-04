import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native"

import IcecreamList from "../../Data/Icecream.json";
export default function List() {

    return (
        <SafeAreaView style={styles.flexContainer}>

            <ScrollView style={styles.scrollView}>
                {
                    IcecreamList.flavors.map((flavor) => {
                        return (
                            <View
                                style={styles.listItem}
                                key={flavor.id}>
                                <Text style={styles.listItemContent}>{flavor.flavorName}</Text>
                                <Text style={styles.listItemContent}>{flavor.origin}</Text>
                            </View>
                        )


                    })
                }
            </ScrollView>

        </SafeAreaView>
    )

}


const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "grey",
        // alignItems: "center",
        // justifyContent: "center",
        paddingTop: StatusBar.currentHeight
    },
    scrollView: {
        paddingHorizontal: 16
    },

    listItem: {
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        padding: 12,
        marginBottom: 8
    },

    listItemContent: {
        fontSize: 24
    }
})