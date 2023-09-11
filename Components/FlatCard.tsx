/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <ScrollView>

      <View>
        <Text style={styles.main}>FlatCard</Text>
        <View style={styles.Container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>Blue</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
    fontWeight: 'bold',
    fontSize:25
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  card: {
    width: '33%',
    height:  100 ,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    margin: 2
  },
  Container: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})