import {
    StyleSheet,
    Text,
    View, 
    Linking, 
    Image , 
    TouchableOpacity 
} from 'react-native';

import React from 'react';


export default function ActionCard() {
  const openwebsite = (webSiteLink: string) => {
    Linking.openURL(webSiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevated]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Welcome to JS 21 ,ES-12</Text>
        </View>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.c8hzIwrr3Xq2E6UcG4fqYAHaE8?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
          ECMAScript, the standardized version of JavaScript is increasing its popularity and is becoming powerful every day. Since the introduction of ECMAScript 2015 (ES6) which was an immense growth forward, new features are added every year around June
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => openwebsite('https://dev.to/naimlatifi5/ecmascript-2021-es12-new-features-2l67')}>
            <Text  style={styles.footerText}>
                Read More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 24,
    paddingHorizontal: 6,
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
    margin: 9,
    borderRadius: 8,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headingContainer: {
    padding: 5,
  },
  bodyContainer: {
    marginHorizontal:12,
    marginBottom:12,
  },
  footerContainer: {
    marginHorizontal:10,
    width:120
  },
  footerText:{
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
    backgroundColor:'#2F798D',
    color:'white',
    borderRadius: 8,
  }
});
