import { View, Text } from "react-native"
import StyledComponent from "./components/StyledComponent"
import MultipleStyles from "./components/Styling/MultipleStyles"
import BoxModel from "./components/Styling/BoxModel"
import BoxShadow from "./components/Styling/BoxShadow"
import StyleInheritance from "./components/Styling/StyleInheritance"
import FlexContainer from "./components/Styling/FlexContainer"
import Dynamic from "./components/DynamicUI/Dynamic"
import SafeArea from "./components/DynamicUI/SafeAreaView"


export default function App() {

    return (

        <View style={{ backgroundColor: "#191919", marginTop: 33, flex: 1 }}>


            {/* <Dynamic /> */}
            <SafeArea />

            {/* <FlexContainer /> */}

            {/* <StyledComponent /> */}

            {/* <MultipleStyles /> */}

            {/* <BoxModel /> */}

            {/* <BoxShadow /> */}
            {/* <StyleInheritance /> */}
        </View>

    )


}