import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, Button, Alert, Image, TouchableOpacity } from 'react-native'

export default function HomeDetail({route}) {
    const {name, image, price1, price2, keterangan} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <Image source={image} style={styles.image}/> 
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{keterangan}</Text>
                <Text style={styles.subTitlePrice}>{price1}</Text>
                <Text style={styles.subTitlePrice}>{price2}</Text>
            </View>
            <TouchableOpacity style={{backgroundColor:'green', padding:20, marginHorizontal:100, alignItems:'center'}} onPress={() => Alert.alert('Success', 'Pesanan anda telah dikirimkan')}>
                <Text style={{color:'white'}}>CheckOut</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonText:{
        color: '#fff', 
        fontWeight: 'bold'
    },
    subTitle:{
        fontSize: 18, 
        marginTop: 10,
        textAlign: 'center'
    },
    subTitlePrice:{
        fontSize: 20, 
        marginTop: 10,
        textAlign: 'center',
        fontWeight:'bold'
    },
    title:{
        fontSize: 28, 
        fontWeight: 'bold',
        textAlign: 'center',

    },
    textWrapper:{
        padding: 20,
        alignItems: 'center',
    },
    image:{
        height: 250, 
        width:412
    },
    imageWrapper:{
        alignItems: 'center', 
    },
    container: {
      flex:1,
      backgroundColor: 'white',
    },
})