/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EvalatedCards() {
    return (
        <View>
            <Text style={styles.main}>EvalatedCards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Home</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>About</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Team</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Contacts</Text>
                </View>
                <View style={[styles.card, styles.cardFive]}>
                    <Text>Portforlio</Text>
                </View>
                <View style={[styles.card, styles.cardSix]}>
                    <Text>Career</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 25
    },
    container: {
        padding: 10
    },
    card: {
        borderRadius: 8,
        margin: 5,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',

    },
    cardOne: {
        backgroundColor: 'green'
    },
    cardTwo: {
        backgroundColor: 'grey'
    },
    cardThree: {
        backgroundColor: 'yellow'
    },
    cardFour: {
        backgroundColor: 'orange'
    },
    cardFive: {
        backgroundColor: 'red'
    },
    cardSix: {
        backgroundColor: 'pink'
    },
})