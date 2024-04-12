
import { View,StatusBar,ActivityIndicator,Alert, Button } from 'react-native';
import Greet from './custom components/Greet';

export default function(){
  return( 
  <View
  style={{backgroundColor:"lightgreen",flex:1,padding:40}}>
    {/* statusbar only work for android */}
    <StatusBar backgroundColor="plum" barStyle={'default'} hidden />
    {/* by using hidden, the status bar disappears
    
    backgroundcolor does not chng in ios
    default for IOS is white and for android is black
    barstyle={'default', 'light-content','dark-content'} */}

    <ActivityIndicator size="larger" color="black"animating={false} />
    <ActivityIndicator size="larger" color="black" animating={false} />
    {/* ActivityIndicator is used with usestate variable  */}


    <Button title="Alert" onPress={()=> Alert.alert("Invalid Option!")}/>
    <Button title="Alert2" onPress={()=> Alert.alert("Invalid Option!","DOB incorrect")}/>
    <Button title="Alert3" onPress={()=> Alert.alert("Invalid Option!","DOB incorrect",[
      {
        text:"Cancel",
        onPress:()=>console.log("Cancel pressed")
      },
      {
        text:"Okay",
        onPress:()=>console.log("Okay pressed")
      }
    ])}/>

    <View style={{backgroundColor:"lightblue",flex:1,padding:20,marginTop:30}} >
      <Greet name="ayush"/>
      <Greet name="yadav"/>
      <Greet name="Ayush Yadav"/>

    </View>

   
  </View>

  )
}
