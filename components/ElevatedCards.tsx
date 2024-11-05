import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View  style={[styles.card,styles.elevated]}>
          <Text>
            Tap
          </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
          <Text>
            me
          </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
          <Text>
            to
          </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
          <Text>
            Scroll
          </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
          <Text>
            more....
          </Text>
        </View>
        <View style={[styles.card,styles.elevated]}>
          <Text>
            Gulabi Dil
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container:{
    flex:1,
    padding:8,
    flexDirection:'row',
  },
  card:{
    height:100,
    width:100,
    borderRadius:4,
    margin:8,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   
  },
  elevated:{
     backgroundColor:'#CAD5E2',
     elevation:4,
     shadowOffset:{
        width:1,
        height:1,
     },
     shadowColor:'#333',
     shadowOpacity:0.4,
     shadowRadius:2,
  },
});
