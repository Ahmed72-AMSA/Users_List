// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import CustomButton from '../../common/button';
import routes from '../../common/routes';

const Home = ()=>{
const {navigate} = useNavigation();
return(
<View>
<CustomButton title="Users" onPress={()=>{
 navigate(routes.users);
}} />
    </View>
);
}

export default Home;


