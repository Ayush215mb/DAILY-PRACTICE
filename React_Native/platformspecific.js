import { StyleSheet, View, Text, SafeAreaView, Platform } from "react-native";
//the best way to give platform specific styles is through the import method as it not causes any confusion
import CustomButton from "./Dynamic UI/Components/CustomButton";

export default function App() {
  return (
    //SafeAreaView is only used for ios to give the padding top
    <SafeAreaView style={{ flex: 1, backgroundColor: "plum" }}>

      <View style={styles.container}>

        <View style={styles.box}>

          <Text style={styles.text}>Welcome</Text>
          <CustomButton title="Press Me" onPress={() => alert("Pressed!")} />

        </View>
        
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    marginTop: Platform.OS === "android" ? 25 : 0,
    //the margin top will only be given to android devices
  },
  box: {
    padding: 20,
  },
  text: {
    //another method to give different styling instructions
    ...Platform.select({
      ios: {
        color: "purple",
        fontSize: 24,
        fontStyle: "italic",
      },
      android: {
        color: "blue",
        fontSize: 30,
      },
    }),
    fontWeight: "bold",
    textAlign: "center",
  },
});