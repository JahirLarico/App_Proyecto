{/*
import {StyleSheet, View , Text, SafeAreaView, Image, TextInput, TouchableOpacity,FlatList} from "react-native"
import StudentCard from "../Components/StudentCard";
import NavBarHome from "../Components/NavBarHome";
import { useState } from "react";
import React from 'react';
import BaseUrl from "../Validation/BaseUrl";
import { useFocusEffect } from '@react-navigation/native';
const Home = ({navigation, route}) => {
    const Url = BaseUrl();
    const idClase = route.params.idClase;
    const nombreClase = route.params.nombreClase;
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const algo = () => {
        console.log("ag")
    }

    const handleFilter = (text) => {
        if (text.trim() === '') {
            setData(originalData);
        } else {
            setData(originalData.filter((user) => user.nombreEstudiante.includes(text)));
        }
    };
    const loadData = async () => {
        try{
            const response = await fetch(Url +'estudiantes/'+ idClase);
            const responseData = await response.json();
            setData(responseData);
            setOriginalData(responseData);
        }catch(error){

        }
    }
    useFocusEffect(
        React.useCallback(() => {
          loadData();
        }, [])
      );
    return (
        <View style={styles.Maincontainer}>
            <NavBarHome navigation={navigation} text="Lista de los estudiantes de " nameClase={nombreClase} />
            <View style={styles.searchContainer}>
                <TextInput placeholder="Buscar por nombre" style={styles.searchInput} onChangeText={text => handleFilter(text)}></TextInput>
                <TouchableOpacity onPress={() => algo()}>
                    <Image source={require('../img/searchIcon.png')} style={styles.searchImg} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => 
                <StudentCard 
                navigation = {navigation}
                clase = {idClase}
                estudiante = {item.id}
                studentName = {item.nombreEstudiante}
                studenLastName = {item.apellidoEstudiante}
                fathersName = {item.nombreApoderado}
                fathersLasName = {item.apellidoApoderado}
                fathersCellPhone = {item.celularApoderado}
                actualizar = {loadData}/>}
            />
            <View style={styles.addIcon}>
                    <TouchableOpacity onPress={()=>navigation.navigate('AddStudent',{tipo: 'AddStudent', idClase:idClase})}>
                        <Image source={require('../img/addIcon.png')} />
                    </TouchableOpacity>
                </View>
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
    addIcon:{
        position: 'absolute',
        bottom: 40,
        right: 60,
    }
})

export default Home

*/}