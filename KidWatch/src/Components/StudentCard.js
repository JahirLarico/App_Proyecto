import { View, Text, StyleSheet, Image } from 'react-native';
const StudentCard = ({nombre = "defecto"}) => {
    return (
        <View style={styles.containerStudentCard}>
            <View style={styles.studentInformationContainer}>
                <Text>Nombre</Text>
                <Text>Edad</Text>
                <Text>Grado</Text>
                <Text>CELULAR: {nombre}</Text>
            </View>
            <View style={styles.studentOptionsContainer}>
                <Image source={require('../img/logo.png')} style={styles.studentOptionsImg}/>
                <Image source={require('../img/logo.png')} style={styles.studentOptionsImg}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerStudentCard: {
        width: '100%',
        height: 'auto',
        marginBottom: 5,
        borderWidth: 1,
        padding: 10,
        flexDirection: 'row',
    },
    studentInformationContainer: {
        flex: 3,
    },
    studentOptionsImg:{
        flex: 1,
        width: 30,
        height: 30,
    }
});
export default StudentCard;