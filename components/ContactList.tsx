import { StyleSheet, Text, View , ScrollView,Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:"Ujjwal",
            status:"Coder",
            imageUrl:"data:image/jpeg;base64,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"
        },
        {
            uid:2,
            name:"Rahul",
            status:"Coder",
            imageUrl:"data:image/jpeg;base64,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"
        },
        {
            uid:3,
            name:"Rajat",
            status:"Coder",
            imageUrl:"data:image/jpeg;base64,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"
        },
        {
            uid:4,
            name:"Shubham",
            status:"Coder",
            imageUrl:"data:image/jpeg;base64,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"
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}>
        {contacts.map(contact=>(
            <View key={contact.uid} style={styles.userCard}>
                <Image
                source={{uri:contact.imageUrl}}
                style={styles.userImage}
                />
                <Text style={styles.userName}>{contact.name}</Text>
                <View>

                <Text style={styles.userStatus}>{contact.status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
        marginVertical:10
    },
    container:{
        marginHorizontal:10,
       
    },
    userCard:{
        marginVertical:12,
        flex:1,
        backgroundColor:'#ffffff',
        elevation:4,
        margin:4,
        padding:4,
        borderRadius:6,
        // flexDirection:'row',
        // alignItems:'center',
    },
    userImage:{
        width:60,
        height:60,

        borderRadius:60/2,  //divide the width by 2 for circular image
    },
    userName:{
        fontSize:18,
        fontWeight:'bold',

    },
    userStatus:{

    },
})