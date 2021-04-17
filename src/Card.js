import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const Card = ({ film }) => {
    return (
        <TouchableOpacity 
          activeOpacity={0.5} 
          // onPress={()=>console.log('pressed', card.id)}
          // onLongPress={()=>{onRemove(card.id)}}
        >
          <View style={ styles.card }>
            <Image
            style={styles.logo}
            source={{uri: film.link}}
            />
            <Text style={styles.text}>{film.name}</Text>
            <Text style={styles.textDate}>{film.date}</Text>
          </View>
         </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 60
    },
    logo: {
      width: 200,
      height: 200,
      margin: 10
    },
    text: {
      fontSize: 24,
      color: '#333',
      marginTop: 5
    },
    textDate: {
      fontSize: 18,
      color: '#555',
      marginTop: 5
    },
})