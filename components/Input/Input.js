import { useState } from "react"
import {
    View, Text, StyleSheet,
    StatusBar, SafeAreaView, TextInput
} from "react-native"

export default function Input() {

    const [inputValue, setInputValue] = useState("")


    return (
        <SafeAreaView style={styles.flexContainer}>

            <Text> Input Field </Text>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Write your text"
            // autoCorrect={false}
            // autoCapitalize="none"
            // keyboardType="" //* For keyboard types like numeric
            // secureTextEntry  // * For passwords masking **** 
            />
            <TextInput
                style={styles.multiLine}
                // value={inputValue}
                // onChangeText={setInputValue}
                placeholder="Write your text"
                multiline={true}
            />

            <Text style={styles.title}>The Input is:
                {inputValue}</Text>

        </SafeAreaView>
    )
}

/*

 Text input needs a styling to appear
## Needs state, value and onChangeText
## Auto correct and AutoCapitalize only works by default in IOS
## for textarea like the web you only have
## a prop (multiline={true}) for the Input 
## multiline prop align text totop in IOS and Center in Android

*/


const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        backgroundColor: "grey",
        padding: StatusBar.currentHeight
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1
    },
    multiLine: {
        minHeight: 120,
        margin: 12,
        padding: 10,
        borderWidth: 1,
        /* 
         ## multiline prop align text totop in IOS and Center in Android
         Adding textAlignVertical: "top" to change this behaviour
        */
        textAlignVertical: "top"
    },
    title: {
        fontSize: 24
    }
})