import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import {paseo, livi, tessa, nice, toply} from '../../assets';

let data = [
    {
        key: 1,
        image: paseo,
        name: 'Paseo',
        price1: '50 Sheets = 5k',
        price2: '250 Sheets = 20k',
        keterangan: 'Terbuat dari 100% serat alami, tissue paseo memiliki kekuatan dan daya serap serta sentuhan kelembutan untuk anda. Cocok digunakan untuk seluruh keluarga karena terbuat dari bahan dasar yang higienis, lembut dan alami. Nikmatilah kenyamanan dan kelembutan dari tissue kesayangan anda.'
    },
    {
        key: 2,
        image: livi,
        name: 'Livi',
        price1: '50 Sheets = 4k',
        price2: '250 Sheets = 15k',
        keterangan: 'Didistribusikan ke 37 negara di lima benua, Livi mempersembahkan hanya yang terbaik untuk menjawab kebutuhan tisu dunia. Livi memiliki standar tinggi dalam menjaga kehigienisan dan kualitas produk tanpa mengurangi nilai ekonomis maupun layanannya.'
    },
    {
        key: 3,
        image: tessa,
        name: 'Tessa',
        price1: '50 Sheets = 5k',
        price2: '250 Sheets = 20k',
        keterangan: 'Tisu Wajah Tessa 250 sheet Natural Soft, dengan kualitas Interfold Facial Tissue dan Harga yang sangat terjangkau membuat Tissue Facial Tessa tidak di ragukan lagi di kelasnya. Tisu terbuat dari bahan serat alami dan berkualitas lembut, daya serap tinggi cocok di gunakan di rumah, di kantor, di mobil dan segala aktifitas.'
    },
    {
        key: 4,
        image: nice,
        name: 'Nice',
        price1: '50 Sheets = 3k',
        price2: '250 Sheets = 17k',
        keterangan: 'Nice terbuat dari 100% serat alami (Virgin Plantation Pulp), diproses secara higienis, menghasilkan tissue halus berkualitas tinggi bagi keluarga anda. Kualitas tissue Nice sudah menjadi tradisi. Depkes RI PD 0102290366.'
    },
    {
        key: 5,
        image: toply,
        name: 'Toply',
        price1: '50 Sheets = 7k',
        price2: '250 Sheets = 16k',
        keterangan: 'Terbuat dari 100% serat alami (Virgin Pulp) yang higienis, lembut dan nyaman. Dengan tekstur yang cocok untuk menemani waktu makan Anda,  sangat aman dan efektif untuk menyerap minyak dan air.'
    },
]

export default function Home({navigation}) {
    const onPressed = (data) => {
        navigation.navigate('HomeDetail', data);
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#333335' barStyle="light-content" translucent/>
            <View style={styles.wrapper}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    {data.map((data) => (
                        <View key={data.key} style={styles.listWrapper}>
                                <View style={styles.imageWrapper}>
                                    <Image style={styles.listImage} source={data.image}/> 
                                </View>
                                <View style={styles.listMidWrapper}>
                                    <Text style={styles.midTextName}>{data.name}</Text>
                                    <Text style={styles.midTextCaption}>{data.price1}</Text>
                                    <Text style={styles.midTextCaption}>{data.price2}</Text>
                                </View>
                                <TouchableOpacity style={styles.button} onPress={() => onPressed(data)}>
                                    <Text style={styles.buttonText}>Buy</Text>
                                </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const width = Dimensions.get('window').width/4.5;
const height = Dimensions.get('window').height/8.5;
const styles = StyleSheet.create({
    buttonText:{
        color:'orange', 
        fontWeight:'bold',
        fontSize:20
    },
    button:{
        flex:0, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginLeft:15,
        marginRight:10
    },
    midTextCaption:{
        marginTop:2,
        color:'grey', 
        textAlign:'justify',
        color:'white'
    },
    midTextName:{
        fontSize:25, 
        fontWeight: 'bold',
        color:'white'
    },
    listMidWrapper:{
        flex:2, 
        marginLeft:10,
        paddingTop:10
    },
    listImage:{
        width, 
        height, 
        borderRadius:10
    },
    imageWrapper:{
        flex:1, 
        justifyContent: 'center', 
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:10
    },
    sessionTitle:{
        fontSize:20, 
        fontWeight: 'bold'
    },
    sessionWrapper:{
        marginTop:15
    },
    image:{
        width: width + 50, 
        height: width + 30,
    },
    headerTextWrapper:{
        padding:10, 
        marginTop:7
    },
    headerWrapper:{
        borderRadius: 20, 
        backgroundColor: '#34ebd8', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding:20
    },
    wrapper:{
        padding: 20
    },
    container:{
        flex:1,
        backgroundColor: '#171717'
    },
    headerText:{
        color: '#fcfcfc', 
        fontSize:22, 
        fontWeight: 'bold'
    },
    listWrapper:{
        marginTop: 15,
        flexDirection: 'row',
        backgroundColor: '#171717',
        padding:10,
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#d1d1d1',
    }
})
