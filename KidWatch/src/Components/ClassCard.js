import { View, Text, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import React, { useState } from 'react';
import BaseUrl from '../Validation/BaseUrl';
const StudentCard = ({
    navigation,
    colegio,
    clase,
    className,
    tutorName,
    tutorsCellphone, 
    actualizar}) => {
    const [showModal, setShowModal] = useState(false);

    const Url = BaseUrl();
    const deleteStudent = async () => {
        try{
            const quere = await fetch(Url+'clase/'+colegio+'/'+clase,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            setShowModal(true)
        }
        catch(error){
            console.log(error)
        }
    }
    const closeModal = () => {
        setShowModal(false);
        actualizar(); // Llamar a la función 'actualizar' después de cerrar el modal
    }
    return (
        <View style={styles.containerStudentCard}>
            <View style={styles.studentInformationContainer}>
                <Text>Clase: {className}</Text>
                <Text>Nombre del tutor: {tutorName}</Text>
                <Text>Celular del tutor: {tutorsCellphone}</Text>
            </View>
            <View style={styles.studentOptionsContainer}>
                <TouchableOpacity onPress={()=>deleteStudent()}>
                    <Image source={require('../img/deleteIcon.png')} style={styles.studentOptionsImg}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('AddClass', 
                {tipo:'EditClass',idColegio: colegio,
                idClase:clase,nombreClase: className,
                tutorClase: tutorName ,
                celularTutor: tutorsCellphone})}>
                    <Image source={require('../img/editIcon.png')} style={styles.studentOptionsImg}/>
                </TouchableOpacity>
            </View>
            <Modal
      animationType='fade'
      visible={showModal}
      transparent={true}
      >
        <View style={{flex:1, backgroundColor:'rgba(1,1,1,0.5)'}}>
          
        <View style={styles.modalContainer}>
              <Image source={require('../img/successIcon.png')} style={{marginBottom: 10,}}/>
              <Text style={{fontSize:15, marginBottom:10}}>Se elimino con exito a la clase {className}</Text>
          <TouchableOpacity style={styles.buttonContainerModal} onPress={closeModal} >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        </View>
      </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    containerStudentCard: {
        width: '90%',
        height: 'auto',
        marginBottom: 10,
        marginLeft:'auto',
        marginRight: 'auto',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        paddingBottom: 0,
        flexDirection: 'row',
    },
    studentInformationContainer: {
        flex: 3,
    },
    studentOptionsImg:{
        flex: 1,
        marginBottom: 10,
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
export default StudentCard;