import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  Button,
  Platform,
} from "react-native";


import react, { useState } from "react";


export default function App() {
  const [username, setUsername] = useState("");//empty string
  const [password, setPassword] = useState("");//empty string
  const [errors, setErrors] = useState({})//empty object


  const validateform = () => {
    errors = {}

    if (username=="")  errors.username = "Username is required"

    if (password=="")  errors.password = "password is required"

    setErrors(errors)

    return Object.keys(errors).length === 0;//this line of code checks if the object named errors is empty or not, It returns true if the errors object is empty
  }

  const handlesubmit = () => {
    //if there are no errors then the validateform funcn returns true thus the next step will be taken
    if (validateform()) {
      console.log("submitted", username, password)
      setUsername("");
      setPassword("");
      setErrors({});
    }
  }


  return (
    <SafeAreaView style={[styles.box]} >

      <View >
        <Text style={styles.text}>
          Login Page
        </Text>

        <Text style={[styles.name]}>Username</Text>
        <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
          <TextInput
            placeholder="Enter your Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />

          {errors.username ? (
            <Text style={styles.errortext}>{errors.username}</Text>
          ) : null
          }
        </View>

        <Text style={[styles.label]}>Password</Text>
        <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
          <TextInput
            placeholder="Enter your Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
           {errors.password ? (
          <Text style={styles.errortext}>{errors.password}</Text>
        ) : null
        }
        </View>

       
        <View style={styles.button}>
          <Button
            title="Login"
            onPress={handlesubmit}
          />
        </View>

      </View>

    </SafeAreaView>

  )

}

const styles = StyleSheet.create
  (
    {
      box: {
        backgroundColor: "lightblue",
        flex: 1,
        paddingTop: Platform.OS == "android" ? 50 : 0,

      },
      text: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",

      },
      name: {
        paddingTop: 40,
        color: "black",
        fontSize: 24,
        paddingHorizontal: 20
      },
      input: {
        borderWidth: 1,
        padding: 5,
        paddingHorizontal: 10,
        borderColor: "black",
        fontSize: 15,
        borderRadius: 15,
      },
      label: {
        color: "black",
        fontSize: 24,
        paddingHorizontal: 20,
        paddingTop: 10,
      },
      button: {
        paddingTop: 20,
        minWidth: 300,
        alignSelf: "center",
      },
      errortext: {
        color: "red",
      }
    }
  
  );
