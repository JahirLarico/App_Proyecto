import {View, TextInput, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
const AddStudent = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.formTittle}>hola</Text>
            <Text style={styles.formSubTittle}>hola</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Nombre del estudiante' style={styles.formInputs}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Apellido del estudiante' style={styles.formInputs}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Nombre del padre' style={styles.formInputs}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Apellido del padre' style={styles.formInputs}></TextInput>
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Telefono del padre' style={styles.formInputs}></TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Image source={require("../img/saveIcon.png")} style={styles.buttonIcon}></Image>
                    <Text style={styles.buttonText}>Agregar</Text>
                </TouchableOpacity>
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
    }
})
export default AddStudent;