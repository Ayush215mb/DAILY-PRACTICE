import { View, Text,StyleSheet } from 'react-native';
/*another way of styling sheets(more preferable)
the shtylesheet created here can only be used here but we can create diff file for style sheet and export it to use
*/ 

export default function App() {
  return (
    <View style={style.container}>
        <Text style={style.title}>stylesheet API</Text>
    </View>
  )
  
}
const style=StyleSheet.create({
  container:{flex:1,backgroundColor:"lightblue",padding:50},
  title:{color:"plum",fontSize:30}
})
