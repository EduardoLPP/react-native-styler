import { ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import { Card } from './styles'

export default function ElevatedCard() {
  const lista = ['Tap','Here','To','Move','The','ScrollView','Area','More...','More...','More...','Just','A', 'Little', 'Bit', 'Joke']
  return (
    <>
      <Text style={styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal>
          
        {lista.map((data,index) => {
            return(
              <Card key={index}>
              <Text style={styles.text}>{data}</Text>
            </Card>
            )
          })
        }
        </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingHorizontal: 12,
        color: '#fff',
      },
      text: {
        fontSize: 22,
        color: '#000'
      }
})