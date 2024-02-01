import { View, Text, StyleSheet, useWindowDimensions } from "react-native"

export default function Dynamic() {


    const windowWidth = useWindowDimensions().width
    const windowHeight = useWindowDimensions().height


    return (

        <View style={styles.flexContainer}>
            <View
                style={[styles.box,
                {
                    width: windowWidth > 500 ? "70%" : "90%",
                    height: windowHeight > 600 ? "60%" : "90%",
                }]}>
                <Text
                    style={[styles.title,
                    { fontSize: windowWidth > 500 ? 50 : 24, }]}>
                    Dynamic Component
                </Text>
            </View>

        </View >

    )


}


/*
 Responsive Styles

 The recommended approach is the useWindowDimensions 
*/

// const windowWidth = Dimensions.get("window")
// const windowHeight = Dimensions.get("window")


// console.log(windowHeight, windowWidth)


const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "white",

        alignItems: "center",
        justifyContent: "center"
    },
    title: {

        color: "black"
    },
    box: {

        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"
    }
})