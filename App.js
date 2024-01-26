import { View, Text } from "react-native"
import StyledComponent from "./components/StyledComponent"
import MultipleStyles from "./components/Styling/MultipleStyles"
import BoxModel from "./components/Styling/BoxModel"
import BoxShadow from "./components/Styling/BoxShadow"
import StyleInheritance from "./components/Styling/StyleInheritance"


export default function App() {

    return (

        <View style={{ flex: 1, backgroundColor: "#191919", padding: 60 }}>

            {/* <StyledComponent /> */}

            {/* <MultipleStyles /> */}

            {/* <BoxModel /> */}

            {/* <BoxShadow /> */}
            <StyleInheritance />
        </View>

    )


}