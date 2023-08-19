import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {View,Text, StyleSheet, Pressable,TouchableOpacity,TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ApiContextProvider, { apiContext } from '../contexts/usersContextProvider';
import routes from '../../common/routes';
import ArrowButton from '../../common/Arrow';
import Icon from 'react-native-vector-icons/FontAwesome';
import Deatiles from './deatiles';




const Users = () => {
const {navigate}=useNavigation()
const{apiData}=useContext(apiContext)

const [filter,setFilter]=useState(apiData);

const[word,setWord]=useState("");



const recieveWord=(word)=>{
  setFilter(apiData.filter((s)=>s.name.toLowerCase().includes(word.toLowerCase())));
}

const handleInputChange = (value) => {
  setWord(value);
  recieveWord(value);
};









    return (
      <>
      <View style={styles.container}>
      <TextInput style={styles.input}
      value={word}
      onChangeText={handleInputChange}
      placeholder="Search"
    />

      </View>

        <View>
        {filter.map((usr)=>
         <View style={{flexDirection:"row",padding:10,alignContent:'center',justifyContent:"center",marginBottom:15,borderBottomWidth:1,marginTop:2}}>
         <Text>{usr.name}</Text>
        <TouchableOpacity onPress={()=>navigate(routes.deatiles,usr.id)} style={{paddingLeft:10,marginTop:3}} key={usr.id}>
      <Icon name="arrow-right" size={15} color="black" />
    </TouchableOpacity>
       </View>
    

        )}
        
        </View>

        </>

    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 9,
    marginBottom: 60,
  },
});


export default Users;
