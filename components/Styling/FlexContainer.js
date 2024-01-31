import { View, Text, StyleSheet } from "react-native"
import FlexBox from "./FlexBox"



export default function FlexContainer({ children }) {

    return (
        // <Text style={styles.title}> FlexContainer Component </Text>

        <View style={styles.flexContainer}>
            <FlexBox
                style={{ backgroundColor: "#8e9b00", }}>FBox Item 1</FlexBox>
            <FlexBox
                style={{ backgroundColor: "#1c4c56", }}>FBox Item 2</FlexBox>
            <FlexBox
                style={{ backgroundColor: "#b65d1f", }}>FBox Item 3</FlexBox>
            <FlexBox
                style={{ backgroundColor: "pink", }}>FBox Item 4</FlexBox>
            <FlexBox
                style={{ backgroundColor: "#6b0803", }}>FBox Item 5</FlexBox>
            <FlexBox
                style={{ backgroundColor: "grey", }}>FBox Item 6</FlexBox>
            <FlexBox
                style={{ backgroundColor: "aqua", }}>FBox Item 7</FlexBox>

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

/*
Align-content
*/
/*
 Flex-basis: alternative to the height and width 
 properties in flex layouts
*/

const styles = StyleSheet.create({
    flexContainer: {
        // flex: 1,
        // flexWrap: "wrap",
        // flexGrow: 1,
        // rowGap: 20,
        // columnGap: 30,
        gap: 5,
        // alignContent: "space-around",
        height: "auto",
        // justifyContent: "space-between",
        // alignItems: "flex-start",
        // flexDirection: "column",
        marginTop: 20,
        marginBottom: 10,
        borderWidth: 6,
        borderColor: "red",
        // width: 500
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