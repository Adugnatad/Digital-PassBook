import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen1 from "../screens/SignUpScreen1";
import SignInScreen from "../screens/SignInScreen";
import OTPVerification from "../screens/OTPVerification";
import RootTab from "./RootTab";
import StatementVerification from "../screens/StatementVerification";
import CardlessVerification from "../screens/CardlessVerification";
import ATMRequestScreen from "../screens/ATMRequestScreen";
import AccountsDetail from "../screens/AccountDetail";

const Stack = createNativeStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Account" component={AccountsDetail} />
        <Stack.Screen name="Dashboard" component={RootTab} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerification} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen1" component={SignUpScreen1} />
        <Stack.Screen name="Statement" component={StatementVerification} />
        <Stack.Screen
          name="CardlessVerification"
          component={CardlessVerification}
        />
        <Stack.Screen name="ATMRequest" component={ATMRequestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;
