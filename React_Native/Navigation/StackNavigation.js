import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./Navigations/Screens/HomeScreen"
import AboutScreen from "./Navigations/Screens/AboutScreen"
import { Pressable,Text } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
         {/*initialRouteName helps us to set which screen we want at the top */}
        <Stack.Navigator initialRouteName='Home' screenOptions={{
           headerStyle:{
            backgroundColor:"blue"
          },
          statusBarColor:"white",
          headerTintColor:"white",
          headerTitleStyle:{fontWeight:"bold"},

          headerRight: ()=>(
            <Pressable onPress={()=> alert("Menu button presses!")} >
              <Text  style={{color:"white",fontSize:16}}>Menu</Text>
            </Pressable>
          ),

          contentStyle:{
            backgroundColor:"lightblue"
          },
        }}>
          <Stack.Screen 
          name='Home' 
          component={HomeScreen}
          options={{
            title:"Welcome Home",
           
          }}
         
          />

          <Stack.Screen 
          name='About' 
          component={AboutScreen}
           initialParams={{
            name:"Guest",
          }}
          />
        </Stack.Navigator>

    </NavigationContainer>
  );
}


