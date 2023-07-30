import {StyleSheet, View , Text, SafeAreaView, Image, TextInput, TouchableOpacity,FlatList} from "react-native"
import StudentCard from "../Components/StudentCard";
import NavBarHome from "../Components/NavBarHome";
const Home = ({navigation}) => {
    const algo = () => {
        navigation.navigate('AddStudent');
    }
    const data = [
        { id: '1', name: 'Student 1' },
        { id: '2', name: 'Student 2' },
        { id: '3', name: 'Student 3' },
        { id: '4', name: 'Student 4' },
        { id: '5', name: 'Student 5' },
        { id: '6', name: 'Student 6' },
        { id: '7', name: 'Student 7' },
        { id: '8', name: 'Student 8' },
      ];
    return (
        <View style={styles.Maincontainer}>
            <NavBarHome/>
            <View style={styles.searchContainer}>
                <TextInput placeholder="Buscar por nombre" style={styles.searchInput}></TextInput>
                <TouchableOpacity onPress={() => algo()}>
                    <Image source={require('../img/logo.png')} style={styles.searchImg} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <StudentCard student={item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Maincontainer: {
        flex: 1,
    },
    searchContainer:{
        flexDirection: 'row',
        margin: 20,
        marginBottom: 10,
    },
    searchInput:{
        borderBottomWidth: 2,
        width: 250,
        textAlign: 'center',
        marginRight: 20,
        marginLeft: 10,
    },
    searchImg:{
        width: 40,
        height: 40,
    },
    cardsContainer: {
        width: '100%',
        height: 'auto',
        padding: 10,
    },
})

export default Home