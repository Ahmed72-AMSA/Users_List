// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../src/screens/home';
import routes from '../common/routes';
import Deatiles from '../src/screens/deatiles';
import Users from '../src/screens/users';


const Stack = createNativeStackNavigator();


const Root = ()=>{
return(
      <Stack.Navigator>
        <Stack.Screen name={routes.home} component={Home} options={{headerTitle:"Task-2",
        
        headerTintColor:"blue",
        headerTitleAlign:"center"

        
    
    
    
    
    }} />
        <Stack.Screen name={routes.users} component={Users} options={{headerTitle:"Our Users",
        headerTitleAlign:"center",
        headerTintColor:"red",
    }} />


<Stack.Screen name={routes.deatiles} component={Deatiles} options={{headerTitle:"User Details",
        headerTitleAlign:"center",
        headerTintColor:"blue",

}}/>

      </Stack.Navigator>

);
}

export default Root;

