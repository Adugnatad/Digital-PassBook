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
import RequestStatement from "../components/RequestStatement";

const StatementVerification = ({ route, navigation }) => {
  //   const { start, end, email } = route.params;
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
          <RequestStatement navigation={navigation} data={route.params} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default StatementVerification;
