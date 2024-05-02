import { useState } from "react";
import { View, Image, ScrollView, Button, Text, Pressable, Modal } from "react-native";
const logoimg = require("./assets/adaptive-icon.png")

//pressable is used to create external buttons

export default function () {
  const [isModalVisible, setIsModalVisible] = useState(false)

  return (<View style={{ backgroundColor: "lightblue", flex: 1 }}>
    {/* for scrolling we use the below command */}
    <ScrollView>
      <Pressable onPress={() => console.log("Images-1 pressed")}>
        <Image source={logoimg} style={{ height: 300, width: 300, margin: 20 }}></Image>
      </Pressable>

      <Pressable onPressIn={() => console.log("Image-2 pressed")}>
        <Image source={{ uri: "https://imgs.search.brave.com/gfoYWXI0j42_EGXHEF_K-nOhzzSINfSgYlkNeBWO-Ls/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTIy/OTYxNTAxL3Bob3Rv/L3BpY3R1cmVzcXVl/LWxhbmRzY2FwZS1m/ZW5jZWQtcmFuY2gt/YXQtc3VucmlzZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Sm40dWptVmZVTlVD/ZWpub0UzUUoybjl0/VjZiaGppWXRBNzA2/ZHRKZW1PWT0" }} style={{ height: 300, width: 300, margin: 20 }}></Image>
      </Pressable>

      <Pressable onPressOut={() => console.log("Text pressed")}>
        <Text >scenery images</Text>
      </Pressable>

      <Pressable onPress={() => console.log("Image-3 pressed")}>
        <Image source={{ uri: "https://imgs.search.brave.com/gjboou_InQB5F_-0YqSo3sVyik6KtA2QTih890yCIIs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/Mi8yOS8xOC80Ny9t/b3VudGFpbnMtMzA0/ODI5OV82NDAuanBn" }} style={{ height: 300, width: 300, margin: 20 }}></Image>
      </Pressable>

      <Pressable onPress={() => console.log("Image-4 pressed")}>
        <Image source={{ uri: "https://imgs.search.brave.com/naT46C4UqEXoSeXoDgvBoquAPHYbU5gsNhY4jRevZ8g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2JlYi9zY2Vu/ZXJ5LTE1NzU3NDYu/anBnP2ZtdA" }} style={{ height: 300, width: 300, margin: 20 }}></Image>
      </Pressable>


      <Button
        title="press"
        onPress={() => console.log("Button pressed")}
        style={{ margin: 20 }}
        color="black"
      // to disable the button use disabled command
      // disabled

      />


      <Text>Press the blue button to open the modal </Text>
      <Button
        title="click"
        onPress={() => setIsModalVisible(true)}
        style={{ margin: 20 }}

      />
      <Modal
        visible={isModalVisible}
        //to close modal content with back button
        onRequestClose={() => setIsModalVisible(false)}

        //to add animation{fade,slide}
        animationType="slide"

        //presentation style chngs the UI {pageSheet,formSheet}-->DOES NOT WORK IN ANDROID
        presentationStyle="pageSheet"

        >
        <View style={{ backgroundColor: "midnightblue", flex: 1 }}>
          <Text style={{ margin: 30 }}>This is Modal content</Text>

          <Button
            style={{ margin: 20 }}
            title="Close"
            onPress={() => setIsModalVisible(false)}

          />

        </View>
      </Modal>






    </ScrollView>

  </View>)
}
