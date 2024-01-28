import { View, Text, StyleSheet } from "react-native"
import FlexBox from "./FlexBox"



export default function FlexContainer({ children }) {

    return (
        // <Text style={styles.title}> FlexContainer Component </Text>

        <View style={styles.flexContainer}>
            <FlexBox
                style={{ backgroundColor: "#8e9b00", alignSelf: "stretch" }}>FBox Item 1</FlexBox>
            <FlexBox
                style={{ backgroundColor: "#1c4c56", alignSelf: "flex-start" }}>FBox Item 2</FlexBox>
            <FlexBox
                style={{ backgroundColor: "#b65d1f", alignSelf: "center" }}>FBox Item 3</FlexBox>
            <FlexBox
                style={{ backgroundColor: "pink", alignSelf: "center" }}>FBox Item 4</FlexBox>
            <FlexBox
                style={{ backgroundColor: "#6b0803", alignSelf: "flex-end" }}>FBox Item 5</FlexBox>
            <FlexBox
                style={{ backgroundColor: "grey", alignSelf: "flex-end" }}>FBox Item 6</FlexBox>
            <FlexBox
                style={{ backgroundColor: "midnightblue", alignSelf: "flex-start" }}>FBox Item 7</FlexBox>

        </View>
    )

}

/*
 align-self: auto => is the default value and it's 
 inherited from the parent flex container
 */
// align-items: stretch => is the default value
/*
  flex-wrap: "nowrap" => prevents items overflow 
 and wrap the items.
 This happens when the avilable space that was detemined by
 the flex contianer is limited like height: 300 and the 
 total height of all items are over the container height
 horizontal wrapping avilable when flexDirection is "row"
*/

const styles = StyleSheet.create({
    flexContainer: {
        // flex: 1,
        flexWrap: "wrap",
        height: 300,
        // justifyContent: "space-between",
        // alignItems: "stretch",
        // flexDirection: "row",
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 6,
        borderColor: "red"
    },
    start: {
        alignSelf: "flex-start"
    },
    center: {
        alignSelf: "center"
    },
    end: {
        alignSelf: "flex-end"
    },
    title: {
        fontSize: 16,
        color: "white"
    }
})