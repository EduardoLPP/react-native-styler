import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {

    function openWebSite(websiteLink: string){
        Linking.openURL(websiteLink);
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
        <View style={styles.card}>
            <View style={styles.headingContainer}>
                <Text style={styles.headerText}>What's new in Javascript</Text>
            </View>
            <View style={styles.body}>
                <Image 
                    source={{
                        uri: 'https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-4.png'
                    }}
                    style={styles.cardImage}/>

                <View style={styles.bodyContainer}>
                    <Text style={styles.textDescription}>Just like every year, Javascript brings in new features.
                        This year javascript bring 4 new features , which almost in
                        production rollout. Just like every year, Javascript brings in new features.
                        This year javascript bring 4 new features , which almost in
                        production rollout.
                    </Text>
                    
                    <TouchableOpacity
                        onPress={() => openWebSite('https://developer.mozilla.org/pt-BR/docs/Web/JavaScript')}>
                        <Text style={styles.textLink}> Read More...  </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.footerContainer}>
                <TouchableOpacity
                    onPress={() => openWebSite('https://instagram.com/edpasso?igshid=OGQ5ZDc2ODk2ZA==')} style={styles.footerContainer}>
                        <Image source={{
                                uri: 'https://static.vecteezy.com/system/resources/previews/018/930/691/non_2x/instagram-logo-instagram-icon-transparent-free-png.png'
                                }}
                        style={styles.imageInstagram}/>

                    <Text style={styles.textLink}> Follow Me...  </Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        color: '#fff',
    },
    card: {
        flex: 1,
        marginVertical: 12,
        marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0dc41',
        borderRadius: 12,
        marginBottom: 30
    },
    headingContainer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        width: '100%',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        marginBottom: 10
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    cardImage: {
        borderRadius: 8,
        height: 70,
        width: 70
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#f0f0f0',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
    },
    body: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textDescription: {
        fontSize: 20,
        color: '#000',
        marginLeft: 5,
        marginRight: 10
    },
    textLink: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    imageInstagram:{
        height: 70,
        width: 70
    }
})