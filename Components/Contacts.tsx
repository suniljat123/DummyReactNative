/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
  const contact = [
    {
      name: 'Dev',
      uid: 1,
      status:'Founder of Trainee Management.',
      image:'https://imgur.com/aaAKwvM.jpg',
    },
    {
      name: 'Abrar',
      uid: 2,
      status:'Strategy Partner of Trainee Management.',
      image:'https://imgur.com/ivAcZFU.jpg',
    },
    {
      name: 'Balwant',
      uid: 3,
      status:'Employee in Trainee Management.',
      image:'https://imgur.com/CCRZlTc.jpg',
    },
    {
      name: 'Sunil',
      uid: 4,
      status:'CEO of Trainee Management.',
      image:'https://imgur.com/tA6q2N1.jpg',
    }
  ]
  return (
    <View>
      <Text style={styles.main}>About Us</Text>
      <ScrollView style={styles.Container}>
        {contact.map((item)=>(
          <View key={item.uid} style={styles.Box}> 
            <Image style={styles.image}
            source={{
              uri:item.image
            }}
            /> 
            <View style={styles.About}>
            <Text style={styles.Name}>{item.name}</Text>
            <Text style={styles.Status}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  main: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10
  },
  Container: {
   paddingHorizontal:10
  }, 
  image:{ 
    width:60,
    height:60,
    marginRight:5,
    borderRadius:55 , 
    margin:1
  
  },
  Status:{
    fontSize:14, 
  },
  Name:{
    fontSize:16,
    fontWeight:'bold', 
  },
  Box:{
    display:'flex',
    flexDirection:'row', 
    marginBottom:3,
    borderRadius:10
  },
  About:{ 
    display:'flex',
    justifyContent:'center'
  }
})