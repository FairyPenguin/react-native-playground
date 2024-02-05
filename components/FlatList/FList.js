import {
    View, Text, StyleSheet, ScrollView,
    SafeAreaView, StatusBar, FlatList
} from "react-native"

import IcecreamList from "../../Data/Icecream.json";

export default function FList() {

    return (
        <SafeAreaView style={styles.flexContainer}>


            <View style={styles.listContainer}>

                <FlatList
                    data={IcecreamList.flavors}
                    // contentContainerStyle={{
                    //     height: "auto",
                    //     backgroundColor: "red",
                    // }}
                    ListHeaderComponent={<Text style={styles.header}>IceCream Flavors</Text>}
                    ListFooterComponent={<Text style={styles.footer}>List End</Text>}
                    keyExtractor={(item) => item.id.toString()}

                    ItemSeparatorComponent={<View style={{ height: 16 }} />}

                    ListEmptyComponent={
                        <View style={{
                            width: "auto", alignItems: "center",
                            justifyContent: "center", height: 500
                        }}>
                            <Text
                                style={{
                                    fontSize: 25, textAlign: "center"

                                }}
                            >No items found</Text>
                        </View>




                    }



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

# ItemSeparatorComponent =>> a seprator component 
without top and bottom additonal space,No need 
for margin bottom or top for every list item

# ListEmptyComponent =>> fallback component for
 the list when no itemsto render
*/

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "grey",

        paddingTop: StatusBar.currentHeight
    },
    listContainer: {
        paddingHorizontal: 16,
        // alignItems: "center",
        // justifyContent: "center",
    },

    listItem: {
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        padding: 12,
        // marginBottom: 8
    },

    listItemContent: {
        fontSize: 24
    },
    header: {
        fontSize: 26,
        textAlign: "center",
        marginBottom: 12
    }
    ,
    footer: {
        fontSize: 26,
        textAlign: "center",
        marginBottom: 12,
        marginTop: 12
    }
})