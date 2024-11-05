import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCard = (): JSX.Element => {
  return (
    <View>

      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          //Multiple styles can be given using array
          <Text style= {styles.whiteText}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style= {styles.whiteText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style= {styles.whiteText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style= {styles.whiteText}>Black</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  whiteText:{
    color:'white',
  },

  container: {
    flex:1,
    flexDirection:'row',  //Horizontal layout,default is column(vertical layout)
    //flexWrap:'wrap',      //Wrap the content to the next line if it exceeds the width of the container
    padding:8,
    

  },
  card: {
    height:100,
    color:'white',
    width:100,
    borderRadius:4,
    margin:8,
    flex:1,
    justifyContent:'center',   //Aligns the content of the View along the vertical axis
    alignItems:'center',       //Aligns the content of the View along the horizontal axis
  },
  cardOne: {
    backgroundColor:'red',
  },
  cardTwo: {
    backgroundColor:'green',
  },
  cardThree: {
    backgroundColor:'blue',
  },
  cardFour:{
    backgroundColor:'black',
  }
});
export default FlatCard;
