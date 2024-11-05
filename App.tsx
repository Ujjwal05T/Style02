import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCard from './components/FlatCard';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

//ScrollView is a generic scrolling container that can host multiple components and views.
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/>
        <ElevatedCards/>
        <FancyCards/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
