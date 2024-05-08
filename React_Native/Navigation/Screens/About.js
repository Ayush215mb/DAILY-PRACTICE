import { View,Text,StyleSheet, Button } from "react-native";

function About({navigation,route}){

    const {name}= route.params;
    return (
        <View styles={styles.container}>
            <Text style={styles.text}>About {name} </Text>
            <Button 
            title="Go To Home" 
            onPress={()=> navigation.navigate("Home")} 
            style={styles.button}
            />

            <Button
            title="Update the name"
            onPress={()=> navigation.setParams({
                name:"Ayush"
            })}
            />
            <Button
            title="Go back with data"
            onPress={()=> navigation.navigate("Home", {result: "Data from About"})}

            
            />

      </View>
    )
}

export default About;

const  styles= StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:"center",
            justifyContent:"center",

            
        },
        text:{
            fontSize:30,
            fontWeight:"bold",
            textAlign:"center",
            paddingVertical:30
        },
        button:{
            paddingVertical:10
        }

      
    },
   
)
