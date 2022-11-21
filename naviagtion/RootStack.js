import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen1 from "../screens/SignUpScreen1";
import SignInScreen from "../screens/SignInScreen";
import OTPVerification from "../screens/OTPVerification";
import RootTab from "./RootTab";
import ATMRequestScreen from "../screens/ATMRequestScreen";
import CardlessVerification from "../screens/CardlessVerification";
import StatementVerification from "../screens/StatementVerification";

const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="Dashboard" component={RootTab} />
        <Stack.Screen name="ATMRequest" component={ATMRequestScreen} />
        <Stack.Screen name="Cardless" component={CardlessVerification} />
        <Stack.Screen name="Statement" component={StatementVerification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
