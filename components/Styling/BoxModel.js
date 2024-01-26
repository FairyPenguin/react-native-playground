import { View, Text, StyleSheet } from "react-native"





export default function BoxModel() {

    return (
        <>
            <View style={styles.box}>
                <Text> BoxModel Component </Text>

            </View>
            <View style={styles.box}>
                <Text> BoxModel Component </Text>

            </View>
        </>


    )

}

/*
 In react Ntive all dimentions are unitless and represent
 density independnet pixels [No rem or pixel]

 If you have a parent comopnent with width and height 
 child components can have percentage diemntion %%
*/

const styles = StyleSheet.create({
    box: {
        height: "25%",
        width: "25%",
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizonta: 20,
        marginVertical: 10,
        borderWidth: 5,
        borderColor: "grey",
        // borderRadius need to be applied on the View not the element
        //to workwith both IOS and Android
        //in Android it works with Text compoennt
        borderRadius: "20%" 
        // border style is set bold by default
    }
})