import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
const NavBarHome = ({navigation}) => {
  const algo = () => {
    console.log('hola');
  }

  return (
    <View>
        <View style={styles.headerContainer}>
            <Image source={require('../img/logo.png')} style={styles.logoImg}/>
            <Text style={styles.textHeader}>KidWatch</Text>
        </View>
        <View style={styles.titleContainer}>
            <Image source={require('../img/logo.png')} style={styles.tittleImg}/>
            <Text style={styles.textTittle}>ALUMNOS</Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        paddingTop: 0,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    logoImg: {
        width: 23,
        height: 30,
        marginRight: 10,
    },
    textHeader: {
        fontSize: 20,
        color: 'white',
    },
    titleContainer:{
        flexDirection: 'row',
        padding: 10,
        paddingLeft: 20,
    },
    tittleImg:{
        width: 50,
        height: 50,
        marginRight: 80,
    },
    textTittle:{
        fontSize: 30,
        color: 'white',
        marginTop: 10,
    },
})


export default NavBarHome;
