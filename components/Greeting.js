import { View, Text } from "react-native";


export default function Greeting({ name }) {

    return (

        <View >
            <Text style={{ color: "white", padding: 60, fontSize: 33 }}>
                Greeting {name}
            </Text>
        </View>
    )

}



