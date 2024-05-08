import { View,Text,StyleSheet,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Home({route}){
    const navigation= useNavigation()
    return (
        <View styles={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button 
            title="Go to About" 
            onPress={()=> navigation.navigate("About",{
                name: "Ayush"
            })}
           
            />

            <Text style={styles.text}>{route.params?.result}</Text>
        </View>
    )
}

export default Home;

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

    }
)
