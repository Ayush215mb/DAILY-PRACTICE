
import { View, Text,StyleSheet } from 'react-native';


export default function App() {
  return (
    <View style={style.back}>
      <View style={[style.bluebg,style.Bshadow,style.androidshadow]}>
        <Text>blue-box</Text>
      </View>
      <View style={[style.brownbg]}>
        <Text>brown-box </Text>
      </View>
    </View>
  )
}

const style=StyleSheet.create({
  back:{
    backgroundColor:"black",
    flex:1,
    padding:50
  },
  bluebg:{
    backgroundColor:"lightblue",
    borderRadius:20,
    padding:60,
    marginBottom:50
  },
  brownbg:{
    backgroundColor:"brown",
    borderRadius:20,
    padding:70
  },
  Bshadow:{
    shadowColor:"white",
    textShadowOffset:{
      width:20,
      height:20
    },
    shadowOpacity:1,
    shadowRadius:5//it ranges from 0-1, 0 meaning transperent
  },
  //shadow properties doesn't work in android so we use elevation
  androidshadow:{
    elevation:10
  }
})
