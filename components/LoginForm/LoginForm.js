import { useState } from "react"
import {
    View, Text, StyleSheet, StatusBar, KeyboardAvoidingView,
    TextInput, SafeAreaView, Button, Image, Platform

} from "react-native"


export default function NewComponent() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={styles.flexContainer}>
            <View

                style={styles.formContainer}>
                <Image source={require("../../assets/images/icon.png")}
                    style={styles.image}
                />
                <Text style={styles.label}>Username</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="enter your username"
                    value={username}
                    onChangeText={setUsername}
                />
                <Text style={styles.label}>Password</Text>

                <TextInput
                    style={styles.inputField}
                    placeholder="enter your password ****"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Button
                    title="Login"
                    onPress={() => { }}
                />
            </View>
        </KeyboardAvoidingView>
    )
}


/**
 * KeyboardAvoidingView => is to keep the
 * keyboard awau from the from inputs 
 * but this only for IOS 
 * 
 * 
 * 
 * 
 */

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "grey",
        paddingHorizontal: 20
    },
    title: {
        fontSize: 33
    },
    formContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    inputField: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
        fontWeight: "bold"
    },
    image: {
        width: 200,
        height: 200
        , alignSelf: "center",
        marginBottom: 15
    }
})