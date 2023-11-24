/*
import {StyleSheet, View , Text, SafeAreaView, Image, TextInput, TouchableOpacity,FlatList} from "react-native"
import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import ClassCard from "../Components/ClassCard";
import NavBarHome from "../Components/NavBarHome";
import { useEffect, useState } from "react";
import BaseUrl from "../Validation/BaseUrl";
const Home = ({navigation, route}) => {
    const Url = BaseUrl();
    const colegio = route.params.idColegio;
    const [data, setData] = useState([]);
    const algo = () => {
        navigation.navigate('AddStudent')
    }
    const loadData = async () => {
        try{
            const response = await fetch(Url +'clases/'+ colegio);
            setData(await response.json());
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
            <NavBarHome navigation={navigation} text="Lista de las clases"/>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('HomeStudents',{idClase:item.id, nombreClase:item.nombreClase})}>
                        <ClassCard 
                        navigation = {navigation} 
                        colegio = {colegio}
                        clase = {item.id}
                        className = {item.nombreClase}
                        tutorName = {item.tutorClase}
                        tutorsCellphone = {item.celularTutor}
                        actualizar = {loadData}
                        />
                    </TouchableOpacity>
                    )}
                />   
                <View style={styles.addIcon}>
                    <TouchableOpacity onPress={()=>navigation.navigate('AddClass',{tipo: 'AddClass', idColegio:colegio})}>
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
*/