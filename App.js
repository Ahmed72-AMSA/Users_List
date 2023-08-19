import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Root from './navigation/root';
import UsersContextProvider from './src/contexts/usersContextProvider';
import ApiContextProvider from './src/contexts/usersContextProvider';

export default function App() {
  return (
    <ApiContextProvider>
    <NavigationContainer>
     <Root></Root>
    </NavigationContainer>
    </ApiContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
