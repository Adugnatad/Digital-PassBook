import { View, Text, Image } from "react-native";
import React from "react";
import infinity from "../../assets/icons/Infinity.png";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={styles.Title}>E-PassBook</Text>
          <Image source={infinity} style={{ width: 70, height: 50 }} />
        </View>
      </View>
    </View>
  );
};

export default Header;
