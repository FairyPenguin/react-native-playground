// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet, Text, View, Image,
  ImageBackground, ScrollView,
  Button, Pressable, Modal
  , StatusBar
} from 'react-native';
const myImage = require("../AwesomeProject/assets/adaptive-icon.png")

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)

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
        <Image source={myImage} style={{ width: 300, height: 300 }} />

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

          style={{ paddingTop: 60, alignItems: 'center' }}>
          <Text style={styles.titleText}>LOL Press Me </Text>
        </Pressable>
        {/* <Image source={myImage} style={{ width: 300, height: 300 }} /> */}
      </ScrollView>
      <Button
        title='Open Modal'
        onPress={() => {
          setIsModalVisible(true)
        }}
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
          style={{ paddingTop: 60, alignItems: 'center' }}
        />
      </Modal>

      {/* <StatusBar style="auto" /> */}

      {/* Hide/Show the staus bar with state click event ==> button  */}
      <StatusBar
        backgroundColor="gray"
        barStyle={"dark-content"}
      // hidden 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 60,
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
