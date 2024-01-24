// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet, Text, View, Image,
  ImageBackground, ScrollView,
  Button, Pressable, Modal
  , StatusBar, ActivityIndicator, Alert
} from 'react-native';
const myImage = require("../AwesomeProject/assets/adaptive-icon.png")

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isStatusBarVisisble, setIsStatusBarVisisble] = useState(false)
  const [showIndicator, setShowIndicator] = useState(false)

  function toggleIndicator() {
    setShowIndicator((prevState) => !prevState)

  }

  function toggleSttausBar() {
    setIsStatusBarVisisble((prevState) => !prevState)

  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.titleText}>React Native</Text>
      <Text style={styles.titleText}>React</Text>
      <Text style={styles.titleText}>On the Mobile</Text> */}
      {/* <Image style={{ width: 300, height: 300 }} source={myImage} />
      <Image style={{ width: 200, height: 200 }} source={{
        uri: "https://picsum.photos/200"
      }} /> */}
      {/* <ImageBackground source={myImage} style={{ flex: 1 }}>
        <Text style={styles.titleText}>Background</Text>
      </ImageBackground> */}
      <ScrollView>
        {/* <Image source={myImage} style={{ width: 300, height: 300 }} /> */}

        <Button
          // disabled
          color={"midnightblue"}
          title='Click Me' onPress={() => {
            console.log("Clicked Bro Relax");
          }} />

        <Pressable
          onPress={() => { console.log("Pressed") }}
          onPressIn={() => { console.log("In") }}
          onPressOut={() => { console.log("Out") }}
          onLongPress={() => { console.log("Loooooooong") }}

          style={{ paddingTop: 15, alignItems: 'center' }}>
          <Text style={styles.titleText}>LOL Press Me </Text>
        </Pressable>
        {/* <Image source={myImage} style={{ width: 300, height: 300 }} /> */}
      </ScrollView>

      <View style={{ flex: 0.5, paddingBottom: 15 }}>

        <View>
          <Button
            title='Indicator Or not'
            onPress={toggleIndicator}
          />
        </View>

        <ActivityIndicator
          size="large"
          color={"aqua"}
          // >::> Animation prop responsible for 
          //show/hide the whole indicator <::<
          animating={showIndicator}
        />
      </View>

      <Button
        title='Open Modal'
        onPress={() => {
          setIsModalVisible(true)

        }

        }

      />




      <Modal
        visible={isModalVisible}
        // Back Button Anroid
        onRequestClose={() => { setIsModalVisible(false) }}
        animationType='slide'
      // IOS Only
      // presentationStyle='formSheet'
      >

        <Text >
          Modal content
        </Text>
        <Button
          title='Close the modal'
          onPress={() => { setIsModalVisible(false) }}
          style={{ paddingTop: 15, alignItems: 'center' }}
        />
      </Modal>

      {/* <StatusBar style="auto" /> */}

      {/* Hide/Show the staus bar with state click event ==> button  */}

      <StatusBar
        backgroundColor="gray" //Only Android
        barStyle={"dark-content"}
        hidden={isStatusBarVisisble}
      />

      <View style={{ paddingTop: 15 }}>
        <Button
          title='Chnage Status bar'
          style={{ paddingBottom: 15 }}
          onPress={
            toggleSttausBar
          }
        />
      </View>


      {/* For Alert you are limited to only 3 buttons 
      in the Alert UI in Android */}
      <View>
        <Button
          title='Alert'
          onPress={() => Alert.alert("Alert me bro")}
        />
        <Button
          title='Alert'
          onPress={() => Alert.alert("Alert me bro", "Message")}
        />
        {/* Multi Buttons */}
        <Button
          title='Alert'
          onPress={() => Alert.alert("Alert me bro", "Message",
            [
              {
                text: "cancel",
                onPress: () => console.log("Canceld from the Alert button")
              },
              {
                text: "Submit",
                onPress: () => console.log("Submitted from the Alert button")
              },
              {
                text: "Return",
                onPress: () => console.log("Returned from the Alert button")
              }
            ])}
        />
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 30,
    paddingBottom: 60,
    paddingRight: 20,
    paddingLeft: 20,


    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontSize: 16
  }
});
