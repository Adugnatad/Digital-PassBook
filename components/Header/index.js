import { useState } from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import banner from "../../assets/icons/coop-banner.png";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import QRCodeComponent from "../QRCode/index";
import styles from "./styles";
import { COLORS } from "../../constants";

const Header = ({ navigation }) => {
  const [balanceVisible, setBalanceVisible] = useState(false);
  const balance = "10200.125";
  const [show, setShow] = useState(false);

  return (
    <View>
      <ImageBackground
        style={{
          height: 200,
          marginTop: 5,
        }}
        source={banner}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 16,
            paddingLeft: 16,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("HomeAccount")}>
            <Entypo
              name="chevron-left"
              style={{
                fontSize: 18,
                color: COLORS.white,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 8 }}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.header}>Account Number</Text>
              </View>
              <Text
                style={{
                  color: "white",
                  marginLeft: 20,
                  marginTop: 3,
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                1000736427343
              </Text>
            </View>
            <Text style={styles.saving}>Saving</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ marginRight: 10 }}>
              <Text style={styles.header}>BALANCE</Text>
              {balanceVisible ? (
                <Text style={styles.visible}>{balance}</Text>
              ) : (
                <Text style={styles.visible}>
                  {[...balance].map((c) => "*")}
                </Text>
              )}
            </View>

            <Ionicons
              name={balanceVisible ? "eye-off" : "eye"}
              size={30}
              color="white"
              onPress={() => setBalanceVisible(!balanceVisible)}
            />
          </View>
          <Text
            style={{
              position: "absolute",
              bottom: 0,
              color: "white",
              margin: 15,
              fontweight: "900",
            }}
          >
            ADUGNA TADESSE
          </Text>
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              marginRight: 20,
              marginBottom: 10,
            }}
          >
            <QRCode value="1234567890" size={60} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      {show && <QRCodeComponent show={show} setShow={setShow} />}
    </View>
  );
};

export default Header;
