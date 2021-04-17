import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = ({ title }) => {
    return (
       <View style={styles.navbar}>
           <Text style={styles.text}>{title}</Text>
       </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 85,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
        paddingBottom: 20
    },
    text: {
        color: '#ddd', 
        fontSize: 24,
        letterSpacing: 3
    }
});