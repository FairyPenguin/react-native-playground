import {
    View, Text, StyleSheet,
    StatusBar, SafeAreaView, SectionList
} from "react-native"

import IcecreamList from "../../Data/IcecreamTypes.json"

export default function SList() {

    return (
        <SafeAreaView style={styles.flexContainer}>
            <View >
                <SectionList

                    sections={IcecreamList}
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={styles.listItem}
                                key={item.id}>
                                <Text style={styles.listItemContent}>{item}</Text>
                            </View>
                        );
                    }}

                    renderSectionHeader={({ section }) => {
                        return (
                            <Text style={styles.title}>{section.origign}</Text>
                        )
                    }}
                    ItemSeparatorComponent={() => { <View style={{ height: 16 }} /> }}
                    SectionSeparatorComponent={() => { <View style={{ height: 16 }} /> }}

                />
            </View>
        </SafeAreaView>

    )
}

/*
Data property in the Section List is Essetntial for RN
*/


const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "grey",
        paddingTop: StatusBar.currentHeight

    },
    title: {
        fontSize: 24,
        color: "white",
        paddingHorizontal: 16,
        paddingVertical: 8,
        textAlign: "center",
        fontWeight: "bold"
    },
    listContainer: {
        paddingHorizontal: 16,

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