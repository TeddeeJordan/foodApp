import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParams } from "@types";
import {NavButton} from '@components'
import { SignIn } from 'scenes/SignIn/SignIn';

type NavProp = StackNavigationProp<AuthStackParams, "LandingPage">;

export function LandingPage({navigation}: {navigation: NavProp}) {

    const signIn = () => {
        navigation.navigate("SignIn")
    }

    const signUp = () => {
        navigation.navigate("SignUp")
    }

    return (
        <View style={styles.container}>
            <NavButton
                title="Sign In"
                navTo={signIn}
            />
            <NavButton
                title="Sign Up"
                navTo={signUp}
            />
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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