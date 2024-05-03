import { StyleSheet, View, Text,  FlatList, SafeAreaView, StatusBar } from "react-native";

import pokemonlist from "./LISTS/Data.json"

export default function App() 
{
  return (
    <SafeAreaView style={styles.container } >

        <FlatList 
        data={pokemonlist}

        renderItem={({item} )=>
          {

            return (
            <View style={styles.box} key={item.id }>

              <Text style={styles.text}> {item.name} </Text>
              <Text style={styles.text}> {item.type} </Text>
            </View>
            )
          }
        
        }
        ItemSeparatorComponent={<View style={{marginHorizontal:16}} ></View>}

        ListHeaderComponent={<Text style={styles.headertext}>Pokemon List</Text>}
        ListFooterComponent={<Text style={styles.footertext} >E O L</Text>}

        ListEmptyComponent={<Text>didn't found any data</Text>}//incase the array is empty, when we import data from API sometimes the data is not found so we should write it for backup

         //there is also something as keyextractor but couldn't understand it so look in the docs
     
         
        //horizontal to veiw the list horizontally
        />
   
    </SafeAreaView>

          
  )
}

const styles = StyleSheet.create
(
  {
 container:
 {
    backgroundColor:"white",
    flex:1,
    paddingTop:StatusBar.currentHeight
 },

 box:
 {
  
    borderWidth:2,
    borderRadius:20,
    marginBottom:20,
    padding:15
 },
 scrollveiw:{
  paddingHorizontal:20,
  paddingVertical:20,
 },
 text:{
  fontWeight:"bold",
  fontSize:25
 },
 headertext:
 {
  fontSize:30,
  fontWeight:"bold",
  textAlign:"center",
  marginBottom:20,
  
 },
 footertext:
 {
  fontSize:30,
  fontWeight:"bold",
  textAlign:"center",
  marginVertical:20,
  paddingBottom:5
  
 }

}
);