/*
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Modal} from 'react-native';
import { useState, useEffect} from 'react';
import BaseUrl from '../Validation/BaseUrl';
const AddStudent = ({navigation, route}) => {

    const Url = BaseUrl();
    const tipo = route.params.tipo;
    const clase = route.params.idClase;
    const estudiante = route.params.idEstudiante;

    const [showModal, setShowModal] = useState(false);
    const [typeModal, setModalType] = useState('');

    const [studentName, setStudentName] = useState('')
    const [studentLastName, setStudentLastName] = useState('')
    const [fathersName, setFathersName] = useState('')
    const [fathersLastName, setFathersLastName] = useState('')
    const [fathersPhone, setFathersPhone] = useState('')

    const handleSave = async() => {
        if (tipo == "AddStudent") {
            try {
                const data = {
                    clase: clase,
                    nombreEstudiante: studentName,
                    apellidoEstudiante: studentLastName,
                    nombreApoderado: fathersName,
                    apellidoApoderado: fathersLastName,
                    celularApoderado: fathersPhone
                }
                const response = await fetch(Url+'estudiantes/'+clase,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)})
                setStudentName('')
                setStudentLastName('')
                setFathersName('')
                setFathersLastName('')
                setFathersPhone('')
                setShowModal(true)
                setModalType('success')
                
            }
            catch(error) {
                setShowModal(true)
                setModalType('error')
            }
        }
        else if (tipo == "EditStudent"){
            try {
                const data = {
                    clase: clase,
                    nombreEstudiante: studentName,
                    apellidoEstudiante: studentLastName,
                    nombreApoderado: fathersName,
                    apellidoApoderado: fathersLastName,
                    celularApoderado: fathersPhone
                }
                const response = await fetch(Url+'estudiante/'+clase+'/'+estudiante,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)})
                setShowModal(true)
                setModalType('editSuccess')
            }
            catch {}
        }
    }

    const closeModal = () => {
        setShowModal(false)
        setModalType('')
        navigation.goBack()
    }

    const ValidationType = () => {
        if (tipo == "EditStudent") {
            setStudentName(route.params.nombreEstudiante)
            setStudentLastName(route.params.apellidoEstudiante)
            setFathersName(route.params.nombreApoderado)
            setFathersLastName(route.params.apellidoApoderado)
            setFathersPhone(route.params.celularApoderado)
        }
    }

    useEffect(() => {
        ValidationType();
    }, [])
    return (
        <View style={styles.mainContainer}>
            { tipo == 'EditStudent' ? <Text style={styles.formTittle}>Editando al estudiante "{studentName}"</Text> : 
            <Text style={styles.formTittle}>Añadiendo un nuevo estudiante</Text>}

            <View style={styles.inputContainer}>
                <TextInput placeholder='Nombre del estudiante' style={styles.formInputs} value={studentName} onChangeText={text => setStudentName(text)}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Apellido del estudiante' style={styles.formInputs} value={studentLastName} onChangeText={text => setStudentLastName(text)}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Nombre del padre' style={styles.formInputs} value={fathersName} onChangeText={text => setFathersName(text)}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Apellido del padre' style={styles.formInputs} value={fathersLastName} onChangeText={text => setFathersLastName(text)}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Telefono del padre' style={styles.formInputs} value={fathersPhone.toString()} onChangeText={text => setFathersPhone(text)}></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonContainer} onPress={()=>handleSave()}>
                    <Image source={require("../img/saveIcon.png")} style={styles.buttonIcon}></Image>
                    {tipo == 'EditStudent' ?  <Text style={styles.buttonText}>Editar</Text> : <Text style={styles.buttonText}>Agregar</Text>}
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
                            <Text style={{fontSize:15, marginBottom:10}}>El estudiante fue agregada con exito</Text>
                            </>
                        )}
                        {typeModal == 'editSuccess' && (
                            <> 
                            <Image source={require('../img/successIcon.png')} style={{marginBottom: 10,}}/>
                            <Text style={{fontSize:15, marginBottom:10}}>Se edito con exito el estudiante "{studentName}"</Text>
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
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formSubTittle: {
        fontSize: 24,
        marginBottom: 20,
        color: 'gray',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 'auto',
        width: 200,
        borderBottomWidth: 1,
        marginBottom: 40,
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
export default AddStudent;

*/