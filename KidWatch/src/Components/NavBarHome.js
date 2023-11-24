import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import BackBar from './BackBar';
const NavBarHome = ({navigation, text, nameClase}) => {
  return (
    <View style={{marginBottom:20}}>
        <BackBar navigation={navigation}/>
        <View style={styles.titleContainer}>
            {nameClase == '' ? <Text style={styles.textTittle}>{text}</Text> : 
            <Text style={styles.textTittle}>{text} "{nameClase}"</Text>}
            
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        backgroundColor: '#F2F2F2',
        flexDirection: 'row',
        borderWidth: 1,
    },
    logoImg: {
        width: 23,
        height: 30,
        marginRight: 10,
    },
    textHeader: {
        fontSize: 20,
        color: 'black',
    },
    titleContainer:{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    textTittle:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
    },
})

export default NavBarHome;
