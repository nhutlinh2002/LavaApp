import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useFonts, Montserrat_600SemiBold, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Entypo, AntDesign  } from '@expo/vector-icons';
import address from '../../types/dataAddress';
import { ScrollView } from 'react-native-gesture-handler';

const AddressList = (props) => {

    const { navigation } = props;

    let [fontsLoaded, error] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_500Medium,
        Montserrat_700Bold,
        Montserrat_400Regular
    });

    if (!fontsLoaded) {
        return null;
    };

    const renderItem = (item) => {
        return (
            <View style={styles.adddressContainer}>
                <View style={styles.firstText}>
                    <Text style={styles.userName}>{item.item.name}</Text>
                    <Text style={styles.userPhone}> | </Text>
                    <Text style={styles.userPhone}>{item.item.phone}</Text>
                </View>
                <Text style={styles.userAddress}>{item.item.houseNumber}</Text>
                <Text style={styles.userAddress}>{item.item.county}</Text>
            </View>
        )
    }

    return (
        <View>
            <Pressable onPress={() => navigation.goBack()} style={styles.appBarContainer}>
                <Entypo style={styles.back} name="chevron-left" size={18} color="black" />
                <Text style={styles.appBar}>Địa chỉ đã lưu</Text>
            </Pressable>
            <View style={styles.container}>

                <FlatList
                    ListHeaderComponent={
                        <>
                            <Text style={styles.tittle}>Địa chỉ</Text>
                        </>
                    }
                    bounces={false}
                    data={address}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
                <View style={styles.newContainer}>
                <AntDesign name="pluscircleo" size={18} color="black" />
                    <Text style={styles.newText}>Thêm địa chỉ mới</Text>
                </View>
            </View>
        </View>
    )
}

export default AddressList

const styles = StyleSheet.create({
    newText:{
        marginLeft:10,
        fontFamily:'Montserrat_400Regular',
        fontSize:14
    },
    newContainer:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'white',
        paddingVertical:15
    },
    userAddress: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        color: 'grey',
        marginTop: 5
    },
    userPhone: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        color: 'grey'
    },
    userName: {
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 14
    },
    firstText: {
        flexDirection: 'row',

    },
    adddressContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 1
    },
    tittle: {
        padding: 10,
        color: 'grey',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14
    },
    container: {
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        bottom: 15,
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 18,
    },
    back: {
        position: 'absolute',
        bottom: 15,
        left: 15
    },
    appBarContainer: {
        position: 'relative',
        backgroundColor: 'white',
        width: '100%',
        height: 75,
        alignItems: 'center',
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1
    },
})