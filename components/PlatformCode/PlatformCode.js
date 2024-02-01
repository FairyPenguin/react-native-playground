import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native"


export default function PlatformCode() {

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.flexContainer}>
                <View style={styles.box}>
                    <Text style={styles.title}> Platform Component </Text>
                </View>
            </View>
        </SafeAreaView>
    )

}

/* 
 Platform Specific Code

## Platform.OS
## ...Platform.select({})
## 
*/

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1
    },
    flexContainer: {
        flex: 1,
        backgroundColor: "black"
    },
    box: {
        padding: Platform.OS === "android" ? 32 : 0
    },
    title: {
        ...Platform.select({
            android: {
                fontSize: 27,
            },
            ios: {
                fontSize: 22,
            }
        }),
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    }
})