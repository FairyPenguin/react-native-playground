import { View, Text, StyleSheet } from "react-native"


export default function StyleInheritance() {

    return (

        <View style={styles.styleInheritance}>
            <View>
                <Text> StyleInheritance Component </Text>
            </View>
        </View>

    )

}

/*
 No style inheritance in RN you need to add the style
 to the text component to get color not the view for ex.
 Style inheritance works in text Sub-tree like
 <Text>
  <Text> </Text>
 </Text>

 # from view to text not working | from text toanother 
 text working
*/
const styles = StyleSheet.create({
    styleInheritance: {
        width: "60%",
        height: "30%",
        backgroundColor: "white"
    }
})