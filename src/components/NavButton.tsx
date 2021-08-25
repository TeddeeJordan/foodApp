import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type NavButtonProps = {
    navTo: () => void;
    title: string;
}

export function NavButton({navTo, title}: NavButtonProps) {
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={navTo}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        justifyContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: 'red',
        padding: 10,
        margin: 4,
        borderRadius: 50,
        width: '40%',
        height: 60,
        flexDirection: 'column'
    },
    text: {
        alignSelf: 'center',
        fontWeight: 'bold'
    }
});