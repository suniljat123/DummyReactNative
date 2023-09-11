/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Images() {
    function readMore(Link: string) {
        Linking.openURL(Link);
    }
    return (
        <View>
            <Text style={styles.main}>Visited Places</Text>
            <ScrollView horizontal={true}>

                <View style={[styles.Card, styles.EvelatedCard]}>
                    <Image
                        style={styles.CardImage}
                        source={{
                            uri: 'https://urban.rajasthan.gov.in/content/dam/raj/udh/development-authority/ada-ajmer/images/30711000.jpg',
                        }} />
                    <View style={styles.CardBody}>
                        <View style={styles.About}>

                            <Text style={[styles.cardTitle]}>Anasagar</Text>
                            <Text style={[styles.cardLabel]}>Ajmer</Text>
                        </View>
                        <Text style={[styles.cardDescription]}>Ana Sagar Lake is an artificial lake situated in the city of Ajmer in Rajasthan state in India. It was built by Arnoraja, the grandfather of Prithviraj Chauhan, in 1135 -1150 AD and is named after him. The catchments were built with the help of local populace. The lake is spread over 13 km.</Text>
                        <View style={[styles.cardFooter]}>
                            <View>

                                <Text >1 day ago</Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={() => {
                                    readMore('https://en.wikipedia.org/wiki/Ana_Sagar_Lake')
                                }} >
                                    <Text style={styles.Button}> Read More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.Card, styles.EvelatedCard]}>
                    <Image
                        style={styles.CardImage}
                        source={{
                            uri: 'https://www.holidify.com/images/cmsuploads/compressed/dest_wiki_650_20220110131619.jpg',
                        }} />
                    <View style={styles.CardBody}>
                        <View style={styles.About}>

                            <Text style={[styles.cardTitle]}>Nareli Jain</Text>
                            <Text style={[styles.cardLabel]}>Ajmer</Text>
                        </View>
                        <Text style={[styles.cardDescription]}>Nareli Jain Temple or Shri Gyanodaya Tirth Kshetra, is a new Jain temple located on the outskirts of Ajmer 7 kilometers from the city center.</Text>
                        <View style={[styles.cardFooter]}>
                            <View>

                                <Text >1 day ago</Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={() => {
                                    readMore('https://en.wikipedia.org/wiki/Nareli_Jain_Temple')
                                }} >
                                    <Text style={styles.Button}> Read More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.Card, styles.EvelatedCard]}>
                    <Image
                        style={styles.CardImage}
                        source={{
                            uri: 'https://www.tourmyindia.com/images/sharif-ajmer4.jpg',
                        }} />
                    <View style={styles.CardBody}>
                        <View style={styles.About}>

                            <Text style={[styles.cardTitle]}>Dargah Shareef</Text>
                            <Text style={[styles.cardLabel]}>Ajmer</Text>
                        </View>
                        <Text style={[styles.cardDescription]}>Ajmer Sharif Dargah (also Ajmer Dargah Shareef, Ajmer Sharif or Dargah Sharif)[1] is a Sufi Tomb (dargah) of the Sufi saint, Khawaja Moinuddin Chishti, located at Ajmer Shareef, Rajasthan, India.</Text>
                        <View style={[styles.cardFooter]}>
                            <View>

                                <Text >1 day ago</Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={() => {
                                    readMore('https://en.wikipedia.org/wiki/Ajmer_Sharif_Dargah')
                                }} >
                                    <Text style={styles.Button}> Read More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[styles.Card, styles.EvelatedCard]}>
                    <Image
                        style={styles.CardImage}
                        source={{
                            uri: 'https://www.holidify.com/images/cmsuploads/compressed/AdhaiDinKaJhonpraliterallyshedof2days_20220110131203.jpeg',
                        }} />
                    <View style={styles.CardBody}>
                        <View style={styles.About}>

                            <Text style={[styles.cardTitle]}>Adhai Din ka Jhopara</Text>
                            <Text style={[styles.cardLabel]}>Ajmer</Text>
                        </View>
                        <Text style={[styles.cardDescription]}>Adhai Din ka Jhopara is a Masjid built by Qutub-ud-Din-Aibak, first Sultan of Delhi in AD 1199. It is believed to be constructed in two and a half days and that's where it gets its name. Though most of the ancient temple is in ruins today, the area of the mosque is still used as a place of worship.</Text>
                        <View style={[styles.cardFooter]}>
                            <View>

                                <Text >1 day ago</Text>
                            </View>
                            <View >
                                <TouchableOpacity onPress={() => {
                                    readMore('https://en.wikipedia.org/wiki/Adhai_Din_Ka_Jhonpra')
                                }} >
                                    <Text style={styles.Button}> Read More</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    Card: {
        height: 380,
        width: 350,
        borderRadius: 6,
        margin: 10,
    },
    EvelatedCard: {
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    CardBody: {
        //  backgroundColor:'red'
        paddingLeft: 8,
    },
    cardTitle: {
        fontSize: 23,
        fontWeight: 'bold',

    },
    cardLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        //   marginBottom:5,
        paddingLeft: 4,
        paddingTop: 10
    },
    cardDescription: {
        fontSize: 14,
        marginBottom: 5
    },
    cardFooter: {
        display: 'flex',
        flexDirection: 'row',
        paddingRight: 5,
        justifyContent: 'space-between'
    },
    Button: {
        fontWeight: 'bold',
        color: 'blue',
        paddingRight: 5, 

    },
    main: {
        margin: 10,
        fontSize: 25,
        fontWeight: 'bold'
    },
    CardImage: {
        height: 200,
        borderTopRightRadius: 6,
        borderTopLeftRadius: 6
    },
    About: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 6
    }
})