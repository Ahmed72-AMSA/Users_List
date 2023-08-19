import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ArrowButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingLeft:10,marginTop:3}}>
      <Icon name="arrow-right" size={15} color="black" />
    </TouchableOpacity>
  );
};

export default ArrowButton;
