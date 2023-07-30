import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Home from './Home';
const Index = ({navigation}) => {
  const algo = () => {
    console.log('hola');
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.imgContainer}>
        <Image source={require('../img/logo.png')} style={styles.imgLogo}/>
      </View>

      <View style={styles.inputs}>
        <Image source={require('../img/userIcon.png')} style={styles.imgIcon}></Image>
        <TextInput placeholder='Usuario' />
      </View>

      <View style={styles.inputs}>
        <Image source={require('../img/passwordIcon.png')} style={styles.imgIcon}></Image>
        <TextInput placeholder='Contraseña' secureTextEntry={true} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttons}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => algo()} style={styles.buttons}>
        <Text style={styles.buttonText}>Contactame</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    borderWidth: 5,
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    width: 250,
    height: 250,
  },
  imgLogo: {
    width: 140,
    height: 190,
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    width: 200,
    padding: 5,
    marginTop: 25,
    marginBottom: 25,
  },
  imgIcon: {
    width: 20,
    height: 20,
    margin: 10,
    marginRight: 10,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 100,
    width: 200,
    height: 'auto',
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  buttonText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  }
});

export default Index;
