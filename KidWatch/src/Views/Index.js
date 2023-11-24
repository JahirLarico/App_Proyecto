{/*
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import BaseUrl from '../Validation/BaseUrl';
const Index = ({navigation}) => {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState('asdas');

  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');

  const Url = BaseUrl();

  const Validation = async() => {
    try {
      const prueba =await fetch (Url+"colegio?usuario="+userName+"&contrasena="+password)
      const json = await prueba.json();
      if(json.confirmacion){
        setuserName('');
        setpassword('');
        navigation.navigate('Home', {idColegio : json.id});
      }
      else{
        setTypeModal('autorization');
        setShowModal(true);
      }
    } catch (error) {
      setTypeModal('error');
      setShowModal(true);
    }
  }
  return (
    <View style={styles.contentContainer} >
      <Modal
      animationType='fade'
      visible={showModal}
      transparent={true}
      >
        <View style={{flex:1, backgroundColor:'rgba(1,1,1,0.5)'}}>
          
        <View style={styles.modalContainer}>
          {typeModal == 'autorization' && (
            <> 
              <Image source={require('../img/warning.png')} style={{marginBottom: 10,}}/>
              <Text style={{fontSize:15, marginBottom:10}}>Usted esta registrador sin embargo no realizo el pago, comuniquese con el administrador</Text>
            </>
          )}
          {typeModal == 'error' && (
            <>
              <Image source={require('../img/errorIcon.png')} style={{marginBottom: 10,}}/>
              <Text style={{fontSize:15, marginBottom:10}}>Es posible que su usuario o contraseña sean incorrectas </Text>
            </>
          )}
          {typeModal == 'contactame' && (
            <>
              <Image source={require('../img/contactameIcon.png')} style={{marginBottom: 10,}}/>
              <Text style={{fontSize:15, marginBottom:10}}>Soy Jahir Larico contactame al numero 983708192 o al correo laricovargasjahir444@gmail.com</Text>
            </>
          )}
          <TouchableOpacity style={styles.buttonContainerModal} onPress={()=> {setShowModal(false), setTypeModal('')}} >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
      <View style={styles.imgContainer}>
        <Image source={require('../img/logo.png')} style={styles.imgLogo}/>
      </View>

      <View style={styles.inputs}>
        <Image source={require('../img/userIcon.png')} style={styles.imgIcon}></Image>
        <TextInput placeholder='Usuario' value={userName} onChangeText={text => setuserName(text)}/>
      </View>

      <View style={styles.inputs}>
        <Image source={require('../img/passwordIcon.png')} style={styles.imgIcon}></Image>
        <TextInput placeholder='Contraseña' secureTextEntry={true} value={password} onChangeText={text => setpassword(text)}/>
      </View>

      <TouchableOpacity onPress={() => Validation()} style={styles.buttons}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {setShowModal(true), setTypeModal('contactame')}} style={styles.buttons}>
        <Text style={styles.buttonText}>Contactame</Text>
      </TouchableOpacity>
    </View>
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
    marginTop: 5,
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
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainerModal:{
    borderWidth: 1,
    borderRadius: 100,
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  }
});

export default Index;

*/}