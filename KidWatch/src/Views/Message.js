{/*
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image, Button} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import React, { useMemo, useState } from 'react';
import * as SMS from 'expo-sms';
import SendIntent from 'react-native-send-intent';

import ReactNativeSMS from 'react-native-sms';
const Message = ({route}) => {

    const estudiate = route.params.nombreEstudiante;

    const sendSMS = async () => {
        const isAvailable = await SMS.isAvailableAsync();
        if (isAvailable) {
            const { result } = await SMS.sendSMSAsync(
                ['+51942280677'],
                'hola frank desde expo '
            );
        } else {
            // misfortune... there's no SMS available on this device
        }
    }

    const enviarSMS = () => {
        const destinatario = '+51983708192'; // Número de teléfono del destinatario
        const mensaje = 'ojala funcione esto';
      
        ReactNativeSMS.send({
          body: mensaje,
          recipients: [destinatario],
          successTypes: ['sent', 'queued'],
        }, (completed, cancelled, error) => {
          console.log('Mensaje enviado:', completed);
          console.log('Mensaje cancelado:', cancelled);
          console.log('Error al enviar el mensaje:', error);
        });
      };

    const handleSendSMS = () => {
        SendIntent.sendSms({
          body: 'franker',
          recipients: ['+51942280677'], // Reemplaza esto con el número de destino
        }).then(isSent => {
          if (isSent) {
            console.log('Mensaje enviado exitosamente.');
          } else {
            console.log('El mensaje no pudo ser enviado.');
          }
        }).catch(error => {
          console.log('Error al enviar el mensaje:', error);
        });
      };

    const Prueba = () => {
        if (selectedId == '1') {
            console.log('Ingreso');
        }
        else if (selectedId == '2') {
            console.log('Salida');
        }
        else if (selectedId == '3') {
            console.log('Personalizado');
        }

    }
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Ingreso',
            value: 'Ingreso',
            style :styles.radioButtons
        },
        {
            id: '2',
            label: 'Salida',
            value: 'Salida',
            style :styles.radioButtons
        },
        {
            id: '3',
            label: 'Personalizado',
            value: 'Personalizado',
            style :styles.radioButtons
        }
    ]), []);
    const [selectedId, setSelectedId] = useState();
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.formTittle}>Mensaje para el padre de "{estudiate}"</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Nombre del estudiante' style={styles.formInputs}></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => enviarSMS()}>
                    <Image source={require("../img/saveIcon.png")} style={styles.buttonIcon}></Image>
                    <Text style={styles.buttonText}>Agregar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.radioButtons}>  
            <RadioGroup 
                radioButtons={radioButtons} 
                onPress={setSelectedId}
                selectedId={selectedId}
                
            />
            </View>
            
            
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
    radioButtons: {
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 20,
        borderWidth: 3,
    }
})
export default Message;

*/}