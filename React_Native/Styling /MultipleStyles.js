import { View, Text,StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Multiple styles</Text>
{/* we can add multiple styles to a particular style by using array ,
    the last element of array takes precedence
*/}
      <View style={[style.box,style.lightbluebg]}>
        <Text>lightblue box</Text>
      </View>
      <View style={[style.box,style.lightgreenbg]}>
        <Text>lightgreen box</Text>
      </View>
    </View>
   
    
  )
  
}

const style=StyleSheet.create({
  container:{flex:1,backgroundColor:"black",padding:50},
  title:{color:"plum",fontSize:30},
  box:{height:100,width:100,padding:10},
  lightbluebg:{ backgroundColor:"lightblue"},
  lightgreenbg:{backgroundColor:"lightgreen",}
})
