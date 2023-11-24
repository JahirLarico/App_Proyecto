import { StatusBar, SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*
import Index from './src/Views/Index';
import Home from './src/Views/Home';
import AddStudent from './src/Views/AddStudent';
import Message from './src/Views/Message';
import HomeStudents from './src/Views/HomeStudents';
import AddClass from './src/Views/AddClass';
*/
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar  />
      
      <SafeAreaView style={{ flex: 1 }}>
        {/*

          <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Index" component={Index} options={
                  {headerShown: false}
                }/>
                <Stack.Screen name="Home" component={Home} options={
                  {headerShown: false}
                }
                />
                <Stack.Screen name="AddStudent" component={AddStudent} 
                options={
                  {title: 'Agregar Estudiante',}
                }/>
                <Stack.Screen name="Message" component={Message} />
                <Stack.Screen name="HomeStudents" component={HomeStudents} options={
                  {headerShown: false}
                }/>
                <Stack.Screen name="AddClass" component={AddClass} 
                options={
                  {title: 'Agregando clase',}
                }/>
              </Stack.Navigator>
        </NavigationContainer>
        */ }
        <Text>hola</Text>
      </SafeAreaView>
    </>
  );
}
