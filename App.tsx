import {SafeAreaView, ScrollView, View} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCard/FlatCards'
import ElevatedCard from './components/ElevatedCard/ElevatedCard'
import FancyCard from './components/FancyCard/FancyCard'
import ActionCards from './components/ActionCards/ActionCards'
import ContactList from './components/ContactList/ContactList'

const App = () => {
  return(
    <SafeAreaView >
      <View style={{backgroundColor: '#000'}}>
      <ScrollView>
        <FlatCards/>
        <ElevatedCard/>
        <FancyCard />
        <ContactList />
        <ActionCards />
      </ScrollView>
      </View>
      
    </SafeAreaView>
  )
}

export default App