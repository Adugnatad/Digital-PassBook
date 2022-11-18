import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import AnimatedExample from "../components/CardlessRequest";
import { Ionicons } from "@expo/vector-icons";

const OTPVerification = ({ navigation }) => {
  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
          padding: 20,
        }}
        onPress={() => navigation.navigate("MyAccount")}
      >
        <Ionicons name="arrow-back" size={24} color="#00adef" />
        <Text
          style={{
            marginLeft: 15,
            color: "#00adef",
            fontSize: 18,
            lineHeight: 22,
          }}
        >
          OTP Verification
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <ScrollView>
          {renderHeader()}
          <AnimatedExample navigation={navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OTPVerification;
