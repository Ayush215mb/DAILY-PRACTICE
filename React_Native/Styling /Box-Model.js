import { View, Text,StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.title}>Box Model</Text>
{/* box model is similar to the browser,
    it doesn't have any dimensions unit(like px,rem,em) but we can use % .
   
*/}
      <View style={[style.box,style.lightbluebg]}>
        <Text style={{backgroundColor:"red", borderRadius:10}}>lightblue box</Text>
      </View>
      <View style={[style.box,style.lightgreenbg]}>
        <Text>lightgreen box</Text>
      </View>
    </View>
  )
  
}

const style=StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor:"black",
    padding:50
  },

  title:
  {
    color:"plum",
    fontSize:30
  },

  box:
  {
    height:100,
    width:100,
    paddingHorizontal:20,
    paddingVertical:20,
    marginVertical:20,
    borderWidth:3,
    borderColor:"white",
    //view pe border radius denge toh android aur ios dono pe chalega par text component pe border radius daalne se bas android pe chalega  
    borderRadius:5
  },

  lightbluebg:{ backgroundColor:"lightblue"},

  lightgreenbg:{backgroundColor:"lightgreen",}
})
