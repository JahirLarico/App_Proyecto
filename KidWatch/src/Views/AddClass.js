/*
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Modal} from 'react-native';
import { useState, useEffect} from 'react';
import BaseUrl from '../Validation/BaseUrl';
const AddClass = ({navigation, route}) => {

    const Url = BaseUrl();
    const tipo = route.params.tipo;
    const colegio = route.params.idColegio;
    const clase = route.params.idClase;
    const [showModal, setShowModal] = useState(false);
    const [typeModal, setModalType] = useState('');

    const [className, setClassName] = useState('')
    const [tutorName, setTutorName] = useState('')
    const [tutorPhone, setTutorPhone] = useState('')

    const [errorPhone, setErrorPhone] = useState(false)

    const handlePhoneChange = (text) => {
        const numericRegex = /^[0-9]$/;
        if (numericRegex.test(text)) {
            setTutorPhone(text);
            setErrorPhone(false)
        }
        else{
            setErrorPhone(true)
        }
      };

    const handleSave = async() => {
        if (tipo == "AddClass") {
            try {
                const data = {
                    colegio: colegio,
                    nombreClase: className,
                    tutorClase: tutorName,
                    celularTutor: tutorPhone,
                    estudiantes: []
                }
                const response = await fetch(Url+'clases/'+colegio,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)})
                setClassName('')
                setTutorName('')
                setTutorPhone('')
                setShowModal(true)
                setModalType('success')
            }
            catch(error) {
                setShowModal(true)
                setModalType('error')
            }
        }
        else if (tipo == "EditClass"){
            try{
                const data = {
                    colegio: colegio,
                    nombreClase: className,
                    tutorClase: tutorName,
                    celularTutor: tutorPhone,
                    estudiantes: []
                }
                const response = await fetch(Url+'clase/'+colegio+'/'+clase,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)})
                setShowModal(true)
                setModalType('editSuccess')
            }
            catch{}
        }
    }

    const closeModal = () => {
        setShowModal(false)
        setModalType('')
        navigation.goBack()
    }

    const ValidationType = () => {
        if (tipo == "EditClass") {
            setClassName(route.params.nombreClase)
            setTutorName(route.params.tutorClase)
            setTutorPhone(route.params.celularTutor)
        }
    }
    useEffect(() => {
        ValidationType();
    }, [])

    return (
        <View style={styles.mainContainer}>
            { tipo == 'EditClass' ? <Text style={styles.formTittle}>Editando la clase "{className}"</Text> : 
            <Text style={styles.formTittle}>Añadiendo una nueva clase</Text>}
        
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom:30}}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Nombre de la clase' style={styles.formInputs} value={className} onChangeText={text=> setClassName(text)}></TextInput>
                </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom:30}}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Tutor de la clase' style={styles.formInputs} value={tutorName} onChangeText={text=> setTutorName(text)}></TextInput>
                </View>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', marginBottom:30}}>
                <View style={styles.inputContainer}>
                    <TextInput placeholder='Celular del tutor' 
                    style={styles.formInputs} value={tutorPhone.toString()} onChangeText={text => setTutorPhone(text)}></TextInput>
                </View>
                {errorPhone ? <Text style={{color: 'red'}}>Este campo debe tener 9 digitos</Text> : null}
            </View>
            <View>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>handleSave()}>
                    <Image source={require("../img/saveIcon.png")} style={styles.buttonIcon}></Image>
                    {tipo == "EditClass" ? <Text style={styles.buttonText}>Editar</Text> : <Text style={styles.buttonText}>Agregar</Text>}
                    
                </TouchableOpacity>
            </View>

            <Modal
                animationType='fade'
                visible={showModal}
                transparent={true}
                >
                    <View style={{flex:1, backgroundColor:'rgba(1,1,1,0.5)'}}>
                    
                        <View style={styles.modalContainer}>
                        {typeModal == 'success' && (
                            <> 
                            <Image source={require('../img/successIcon.png')} style={{marginBottom: 10,}}/>
                            <Text style={{fontSize:15, marginBottom:10}}>La clase fue agregada con exito</Text>
                            </>
                        )}
                        {typeModal == 'editSuccess' && (
                            <> 
                            <Image source={require('../img/successIcon.png')} style={{marginBottom: 10,}}/>
                            <Text style={{fontSize:15, marginBottom:10}}>La clase "{className}" fue editada con exito</Text>
                            </>
                        )}
                        {typeModal == 'error' && (
                            <>
                            <Image source={require('../img/errorIcon.png')} style={{marginBottom: 10,}}/>
                            <Text style={{fontSize:15, marginBottom:10}}>Hubo problemas al registrar la clase, revise los datos</Text>
                            </>
                        )}
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
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    formTittle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: 200,
        borderBottomWidth: 1,
    },
    formInputs: {
        fontSize: 19,
        color: 'black',
    },
    buttonContainer: {
        borderWidth: 1,
        borderRadius: 100,
        width: 200,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'blue',
        flexDirection: 'row',
    },
    buttonIcon: {
        marginLeft: 20,
    },
    buttonText: {
        marginLeft: 25,
        fontSize: 20,
        fontWeight: 'bold',
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
})
export default AddClass;
*/