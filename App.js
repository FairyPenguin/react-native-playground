import { View, Text } from "react-native"
import StyledComponent from "./components/StyledComponent"
import MultipleStyles from "./components/Styling/MultipleStyles"


export default function App() {

    return (

        <View style={{ flex: 1, backgroundColor: "#191919", padding: 60 }}>

            {/* <StyledComponent /> */}

            <MultipleStyles />
        </View>

    )


}