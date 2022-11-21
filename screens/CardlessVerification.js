import React from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardlessRequest from "../components/CardlessRequest";

const CardlessVerification = ({ navigation }) => {
  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
          padding: 20,
        }}
        onPress={() => navigation.navigate("Account")}
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
          <CardlessRequest navigation={navigation} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CardlessVerification;
