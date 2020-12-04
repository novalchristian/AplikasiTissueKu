import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';
import {paseo} from '../../assets';

let profile = [
  {
    key: 1,
    title: 'Nama :',
    subTitle: 'Nama taro disini'
  },
  {
    key: 2,
    title: 'NIM :',
    subTitle: 'nim taro disini'
  },
  {
    key: 3,
    title: 'Kelompok :',
    subTitle: 'kelompok taro disini'
  },
  
]
export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={paseo} style={styles.image}/>
        {profile.map((profile) => (
          <View key={profile.key} style={styles.textWrapper}>
            <Text style={styles.title}>{profile.title}</Text>
            <Text style={styles.subTitle}>{profile.subTitle}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const width = Dimensions.get('screen').width/2.8;
const height = Dimensions.get('screen').height/6;
const styles = StyleSheet.create({
  textWrapper:{
    marginTop:20, 
    alignItems: 'center'
  },
  subTitle:{
    fontSize: 23, 
    fontWeight: 'bold'
  },
  title:{
    fontSize: 15
  },
  image:{
    width, 
    height, 
    borderRadius: 150
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:40
  },
})
