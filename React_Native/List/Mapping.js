import { StyleSheet, View, Text,  FlatList, SafeAreaView, StatusBar,ScrollView } from "react-native";

import pokemonlist from "./LISTS/Data.json"

export default function App() {
  return (
    

         
        <SafeAreaView style={styles.container } >
            <ScrollView style={styles.scrollveiw} >
            {
              pokemonlist.map( (pokemon)=> {
                return( 
                  <View  style={ styles.box} key={pokemon.id} >

                    <Text style={ styles.text} >{pokemon.name} </Text>
                    <Text style={ styles.text} >{pokemon.type} </Text>

                  </View>
                )
              })
            }
           </ScrollView>
          </SafeAreaView>

          
)}

const styles = StyleSheet.create({
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
 }

});
