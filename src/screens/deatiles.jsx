// In App.js in a new project
import React, { createContext, useEffect, useState ,useContext } from 'react';
import { PricingCard, lightColors } from '@rneui/themed';
import { View, Text, Button,TouchableOpacity , ScrollView} from 'react-native';
import { useNavigation,useRoute} from '@react-navigation/native';
import CustomButton from '../../common/button';
import routes from '../../common/routes';
import { apiContext } from '../contexts/usersContextProvider';
import { Card } from 'react-native-paper';


const Deatiles = (props)=>{
    const {params}=useRoute()
    const{apiData}=useContext(apiContext)
    console.log(apiData)
    const user = apiData.find(usr => usr.id === parseInt(params));




    return (
        <View>
        {user ? (
               <Card style={{padding:10,marginVertical:30}}>
             <Card.Cover source={{ uri: 'https://media.istockphoto.com/id/635978276/photo/im-happy-to-share-this-message.jpg?s=612x612&w=0&k=20&c=HwvMLR3EFk6iuZLco73JnFrGi748FouSWYT2zkSOihw=' }} />
             <Text style={{padding:10,color:"red"}}>Name : <Text style={{color:"black"}}>{user.name}</Text></Text>
             <Text style={{padding:10,color:"red"}}>Email : <Text style={{color:"black"}}>{user.email}</Text></Text>
             <Text style={{padding:10,color:"red"}}>Phone Number : <Text style={{color:"black"}}>{user.phone}</Text></Text>
             <Text style={{padding:10,color:"red"}}>Username : <Text style={{color:"black"}}>{user.username}</Text></Text>
             <Text style={{padding:10,color:"red"}}>Website : <Text style={{color:"black"}}>{user.website}</Text></Text>
             <Text style={{padding:10,color:"red"}}>Address : <Text style={{color:"black"}}>{user.address.city} , {user.address.street} , {user.address.suite} </Text></Text>
             <Text style={{padding:10,color:"red"}}>Work-Place : <Text style={{color:"black"}}>{user.company.name} </Text></Text>






             </Card>
            ) : (
              <Text>user not found</Text>
            )}
        </View>
    );
}

export default Deatiles;


