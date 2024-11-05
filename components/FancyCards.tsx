import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import character from  '../data/chars'


export default function FancyCards():JSX.Element {
  return (
    <View style={
      {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }
    }>
      <Text style={styles.headingText}>Anime Characters</Text>
      <View>
        { character.map((char:any) => (
          <View style={[styles.card, styles.elevated]}>
             <Image
             source={{ uri:char.img }}
             style={styles.cardImage}

             />
             <View style={styles.cardBody}>
               <Text style={styles.cardTitle}>{char.title}</Text>
               <Text style={styles.cardLabel}>{char.label}</Text>
   
               <Text style={styles.cardDiscription}>
                 {char.description}
               </Text>
   
               <Text style={styles.cardFooter}>Designed By Ujjwal</Text>
             </View>
        </View>
     ))} 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
      fontWeight: 'bold',
      fontSize: 24,
      paddingHorizontal: 8,
    },
    card: {
      width: 370,
      height: 350,
      borderRadius: 8,
      marginVertical: 12,
      marginHorizontal: 16,
    },
    elevated: {
      elevation: 4,
      backgroundColor: '#F2E8E8',
      shadowOffset: {
        height: 1,
        width: 1,
      },
    },
    cardImage: {
      height: 180,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      marginBottom: 10,
    },
    cardBody: {
      flex: 1,
      flexGrow: 1,
      paddingHorizontal: 12,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 3,
    },
    cardDiscription: {
      fontSize: 14,
      marginBottom: 10,
      flexShrink: 1,
      marginTop: 4,
    },
    cardLabel: {
      fontSize: 18,
      marginBottom: 4,
      color: '#595656',
    },
    cardFooter: {
      marginTop: 0,
      color: '#A1A1A1',
    },
  });