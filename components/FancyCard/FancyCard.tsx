import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>

        <View style={[styles.card, styles.cardElevated]}>
        <Image source={{
            uri: 'https://images.freeimages.com/images/large-previews/9d3/hotel-1217956.jpg'
        }} 
        style={styles.cardImage} />

        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Palace Resort</Text>
            <Text style={styles.cardLabel}> Hawaii</Text>
            <Text style={styles.cardDescription}>There's a description here about a greatest resort in Hawaii.
                The greatest resort in Hawaii is great and it's location is in Hawaii.</Text>
            <Text style={styles.cardFooter}> 112888800 miles away</Text>
        </View>
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
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8, 
    },
    cardElevated: {
        backgroundColor: '#EFEFF0',
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    cardImage: {
        height: 220,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8, 
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
        marginBottom: 6
    },
    cardTitle: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 2
    },
    cardDescription: {
        color: '#0f0e0e',
        fontSize: 20,
        marginBottom: 8
    },
    cardLabel: {
        color: '#000',
        fontSize: 26,
        marginBottom: 4,
    },
    cardFooter: {
        color: '#000',
        marginBottom: 10
    }
})