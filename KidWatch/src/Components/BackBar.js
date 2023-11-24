import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const BackBar = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Image source={require('../img/backIcon.png')} style={{width: 30,height: 30,marginRight: 80,}}/>
            </TouchableOpacity>
            <Image source={require('../img/logo.png')} style={styles.logoImg}/>
            <Text style={styles.textHeader}>KidWatch</Text>
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
})

export default BackBar;
