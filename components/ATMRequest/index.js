import {
  Animated,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import ModalComponent from "./ModalComponent";

const CELL_COUNT = 5;
const source = {
  uri: "https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png",
};

const ATMRequest = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 50,
          padding: 20,
        }}
        onPress={() => navigation.goBack()}
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
    <View>
      {renderHeader()}
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Verification</Text>
        <Image style={styles.icon} source={source} />
        <Text style={styles.subTitle}>
          Please enter the verification code{"\n"}
          we sent to your mobile phone
        </Text>

        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              onLayout={getCellOnLayoutHandler(index)}
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
            >
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.nextButtonText}>Verify</Text>
        </TouchableOpacity>
        {visible && (
          <ModalComponent navigation={navigation} visible={visible} />
        )}
      </SafeAreaView>
    </View>
  );
};

export default ATMRequest;
