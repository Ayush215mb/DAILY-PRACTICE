import React,{ useEffect, useState } from "react";
import 
{ 
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet
} from "react-native";


 function App()
 {
  const[ postlist, setPostlist]= useState([]) //empty array
  const fetchData= async(limit=10)=>
    {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const Data=  await response.json()
      setPostlist(Data)
    }

    useEffect(()=>{
      fetchData();
    }, []);
  
  return (
    <SafeAreaView style={Styles.container}>

      <View style={{paddingHorizontal:10}}>

        <FlatList

          data={postlist}
          renderItem={({item})=>{
            return(
            <View style={Styles.box}>

              <Text style={Styles.titletext}>{item.title}</Text>
              <Text style={Styles.bodytext} >{item.body}</Text>

            </View>
            )

          }}  
        
        />

      </View>

    </SafeAreaView>
  )
 }


 export default App;

 const Styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
    paddingTop:StatusBar.currentHeight//for android 
  },
  box:{
    borderWidth:3,
    borderColor:"black",
    paddingHorizontal:10,
    marginVertical:10,
    borderRadius:20

  },
  titletext:{
    fontSize:27,
    fontWeight:"bold",
    paddingVertical:10

  },
  bodytext:{
    fontSize:24,
    marginVertical:20
  }
 })
