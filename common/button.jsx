import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    width:"50%",
    paddingHorizontal: 3,
    borderRadius: 5,
    marginVertical:"50%",
    marginHorizontal:"25%"
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
