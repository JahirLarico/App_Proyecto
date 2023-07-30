import { StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Index from './src/Views/Index';
import Home from './src/Views/Home';
import AddStudent from './src/Views/AddStudent';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar  />
      
      <SafeAreaView style={{ flex: 1 }}>
      
    
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddStudent" component={AddStudent} />
          </Stack.Navigator>
        </NavigationContainer>
 
      </SafeAreaView>
    </>
  );
}
