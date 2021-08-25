import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {SignIn, SignUp, LandingPage} from "@scenes";
import { AuthStackParams } from "@types";

const { Navigator, Screen } = createStackNavigator<AuthStackParams>();

export function AuthNavigator() {
    return (
        <Navigator
            initialRouteName={"LandingPage"}
            screenOptions={{
                cardStyle: {backgroundColor: '#ffffff'}
            }}
        >
            <Screen
                name="LandingPage"
                component={LandingPage}
            />
            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="SignUp"
                component={SignUp}
            />
        </Navigator>
    )
}