import {
    View, Text, StyleSheet, ScrollView,
    SafeAreaView, StatusBar, FlatList
} from "react-native"

import IcecreamList from "../../Data/Icecream.json";

export default function FList() {

    return (
        <SafeAreaView style={styles.flexContainer}>

            {/* <ScrollView style={styles.scrollView}>

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

            </ScrollView> */}
            <View style={styles.listContainer}>
                <FlatList
                    keyExtractor={(item) => item.id.toString()}

                    data={IcecreamList.flavors}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={styles.listItem}
                                key={item.id}>
                                <Text style={styles.listItemContent}>{item.flavorName}</Text>
                                <Text style={styles.listItemContent}>{item.origin}</Text>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView >
    )

}


/*
# Flat list have a horizontal prop to render a horizontal list

# keyExtractor prop is a func thta tajkes an item from the data array and
return aunique key to the item like key in React
if you have an id key in the data array it will use ut by default 
or you can define it yourself
*/

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "grey",
        // alignItems: "center",
        // justifyContent: "center",
        paddingTop: StatusBar.currentHeight
    },
    listContainer: {
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